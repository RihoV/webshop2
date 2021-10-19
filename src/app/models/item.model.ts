export class Item {
    constructor(
        public title: string,
        public price: number,
        public imgSrc: string,
        public category: string,
        public isActive: boolean
    ) { }
}