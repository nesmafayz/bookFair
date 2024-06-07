export interface IBook {
    bookName: string
    authorName:string
    price: {
      beforeOffer: string
      afterOffer: string
    },
    hall: number,
    block: string
    imgUrl: string,
    publishingYear: string,
    publisher: string,
    category: string

}
