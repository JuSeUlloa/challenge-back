class Product {
  public name: string;
  public specialPrices: any;
  public inStock: boolean;
  public basePrice: number;
  public brand: string;

  constructor(nam: string, spe: any, inSt: boolean, base: number, bra: string) {
    this.name = nam;
    this.specialPrices = spe;
    this.inStock = inSt;
    this.basePrice = base;
    this.brand = bra;
  }
}

export default Product;
