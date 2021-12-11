export class Product {
    constructor(
        private id: number, 
        private name: string, 
        private generalDescription: string,
        private stock: number,
        private features: string,
        private price: number,
        private brand: string,
        private mark: string,
    ) {}
}