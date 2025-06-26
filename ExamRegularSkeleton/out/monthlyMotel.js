"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthlyMotel = void 0;
const partialMonthlyMotel_1 = require("./contracts/partialMonthlyMotel");
class MonthlyMotel extends partialMonthlyMotel_1.PartialMonthlyMotel {
    rooms = new Map();
    bookings = new Map();
    totalBudget = 0;
    getTotalBudget() {
        return ` Motel: ${partialMonthlyMotel_1.PartialMonthlyMotel.MotelName}

        Total budget: ${this.totalBudget.toFixed(2)}`;
    }
    addRoom(room) {
        if (!('roomNumber' in room) ||
            !('totalPrice' in room) ||
            !('cancellationPrice' in room)) {
            return 'Value was not a Room.';
        }
        const validRoom = room;
        if (this.rooms.has(validRoom.roomNumber)) {
            return `Room '${validRoom.roomNumber}' already exists.`;
        }
        this.rooms.set(validRoom.roomNumber, validRoom);
        return `Room '${validRoom.roomNumber}' added.`;
    }
    bookRoom(roomNumber, bookedMonth) {
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
    cancelBooking(roomNumber, bookedMonth) {
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
exports.MonthlyMotel = MonthlyMotel;
//# sourceMappingURL=monthlyMotel.js.map