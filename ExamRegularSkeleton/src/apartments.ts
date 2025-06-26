import { Room } from "./contracts/room";

type RoomNumber = Room['roomNumber'];

export class Apartment implements Room {
    private readonly price: number
    readonly roomNumber: RoomNumber
    private readonly numberOfGuests: number

    constructor(price: number, roomNumber: RoomNumber, numberOfGuests: number) {
        this.price = price
        this.roomNumber = roomNumber
        this.numberOfGuests = numberOfGuests
    }

    get totalPrice(): number {
        return this.numberOfGuests * this.price
    }

    get cancellationPrice(): number {
        return this.totalPrice * 0.8;
    }

}