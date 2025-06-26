import { PartialMonthlyMotel } from "./contracts/partialMonthlyMotel";
import { Room } from "./contracts/room";
import { SummerMonth, WinterMonth } from "./contracts/util";

type RoomNumber = Room['roomNumber'];


export class MonthlyMotel<T extends SummerMonth | WinterMonth> extends PartialMonthlyMotel {

    private readonly rooms = new Map<Room['roomNumber'], Room>();
    private readonly bookings = new Map<T, Set<Room['roomNumber']>>();
    private totalBudget = 0;

    override getTotalBudget(): string {
        return ` Motel: ${PartialMonthlyMotel.MotelName}

        Total budget: ${this.totalBudget.toFixed(2)}`;
    }

    addRoom(room: Room): string {
        if (
            !('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)
        ) {
            return 'Value was not a Room.';
        }

        const validRoom = room as Room;

        if (this.rooms.has(validRoom.roomNumber)) {
            return `Room '${validRoom.roomNumber}' already exists.`;
        }

        this.rooms.set(validRoom.roomNumber, validRoom);
        return `Room '${validRoom.roomNumber}' added.`;

    }

    bookRoom(roomNumber: RoomNumber, bookedMonth: T): string {
        const room = this.rooms.get(roomNumber);
        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }

        let monthBookings = this.bookings.get(bookedMonth);

        if (!monthBookings) {
            monthBookings = new Set();
            this.bookings.set(bookedMonth, monthBookings);
        }

        if (monthBookings.has(roomNumber)) {
            return `Room '${roomNumber}' is already booked for '${bookedMonth}'.`;
        }

        monthBookings.add(roomNumber);
        this.totalBudget += room.totalPrice;

        return `Room '${roomNumber}' booked for '${bookedMonth}'.`;
    }

    cancelBooking(roomNumber: RoomNumber, bookedMonth: T): string {
        const room = this.rooms.get(roomNumber);

        if (!room) {
            return `Room '${roomNumber}' does not exist.`;
        }
        const monthBookings = this.bookings.get(bookedMonth);

        if (!monthBookings || !monthBookings.has(roomNumber)) {
            return `Room '${roomNumber}' is not booked for '${bookedMonth}'.`;
        }

        monthBookings.delete(roomNumber);
        this.totalBudget -= room.cancellationPrice;

        return `Booking cancelled for Room '${roomNumber}' for '${bookedMonth}'.`;

    }

}

