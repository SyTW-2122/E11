export type Address = {
    postalCode: number,
    city: string,
    street: string,
    province: string
}

export type Status = 'Procesando pedido' | 'En camino' | 'Entregado';

export class Order {
    constructor(
        private id: number,
        private user_id: number,
        private products_id: number[],
        private date: string,
        private price: number,
        private shippingAddress: Address,
        private status: Status
    ) {}
}