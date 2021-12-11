export class Opinion {
    constructor(
        private product_id: number,
        private user_id: number,
        private mark: number,
        private comment: string,
    ) {}
}