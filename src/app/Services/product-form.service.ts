import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductFormService {
  constructor() {}
  productFormData: any = [];
  public updatedProductData: any = {};
  public productId!:number;


  storeData(productData: any[]) {
    this.productFormData.forEach((item: any) => {
      productData.unshift(item);
    });
    
  }
  


 storeUpdatedData(updatedProduct: any, productId: number): void {
    this.updatedProductData = updatedProduct;
    this.productId = productId;
  }
 
}
