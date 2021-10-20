// 1. ei oleks pikalt välja kirjutatud, võib väga pikaks minnna
// {title: string, price: number, imgSrc: string, category: string, isActive: boolean} 
// 2. kui teen siin muudatuse, läheb kõigile automaatselt
// 3. haaraks ühe pilguha, et andmemudelid on samasugused
// {title: string, price: number, imgSrc: string, category: string, isActive: boolean} - Item
// {title: string, price: number, imgSrc: string, category: string, isActive: boolean} - CartItem

// Andmemudelit peaks kasutama, et täpselt seda tõõpi väärtused läheksid õigetesse kohtadesse
// Kui ootan Stringi, siis tuleks sinna String ('jutumärkides sõna')
// Kui ootan eset, millel on 5 võti-väärtus paari, siis tuleks ka täpselt see ese

export class Item {
    constructor(
        public title: string,
        public price: number,
        public imgSrc: string,
        public category: string,
        public isActive: boolean
    ) { }
}