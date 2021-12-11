export class Bank {
    constructor(
        private dni: string,
        private creditCardNumber: number,
        private expirationDate: string,
        private securityCode: number,
        private balance: number
    ) {}
}