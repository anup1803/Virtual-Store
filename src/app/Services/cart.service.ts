import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any = [];
  totalItems: number = 0;
  constructor() {}

  addtoCart(product: any) {
    const isDuplicate = this.cartItemList.some(
      (item: any) => item.id === product.id
    );
    if (!isDuplicate) {
      this.cartItemList.push(product);
      this.totalItems += product.minimumOrderQuantity;
    } else {
      this.totalItems++;
    }
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => { 
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.totalItems -= a.minimumOrderQuantity;
      }
    });
  }

  removeAllCartItem() {
    this.cartItemList = [];
  }

  subTotal(): number {
    let subtotal = 0;
    this.cartItemList.forEach((item: any) => {
      subtotal += item.price * item.minimumOrderQuantity;
    });
    return subtotal;
  }
  minOrderQuantiy(product: any): number {
    return this.cartItemList.minOrderQuantiy;
  }
}
