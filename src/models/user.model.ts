export type Address = {
    postalCode: number,
    city: string,
    street: string,
    province: string
}

export type Surnames = {
    first: string,
    second: string
}

export type Gender = 'Masculino' | 'Femenino' | 'No especificado';

export type CreditCard = {
    creditCardNumber: number,
    expirationDate: string,
    securityCode: number
}

export class User {
    constructor(
        private name: string, 
        private surnames: Surnames, 
        private dateOfBirth: string,
        private gender: Gender,
        private email: string, 
        private password: string, 
        private dni: string,
        private address: Address,
        private id: number,
        private creditCard: CreditCard,
        private phoneNumber: number
    ) {}
}
