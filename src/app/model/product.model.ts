export class ProductModel {

  constructor(public productName: string,
              public category: string,
              public freshness: string,
              public price: number,
              public comments: string,
              public date: Date,
              public id?: number) { }
}
