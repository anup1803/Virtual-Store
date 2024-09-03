import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { PhonesDataService } from 'src/app/Services/phones-data.service';
import { ProductFormService } from 'src/app/Services/product-form.service';
import { ProductList } from 'src/app/product-list';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  private baseProductUrl: string =
    'https://mocki.io/v1/78513d6e-0bee-4bc3-8b1f-0f5563203e3a';
  productData: ProductList[] = [];
  searchList: string = '';
  constructor(
    private phoneData: PhonesDataService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private productFormService: ProductFormService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchList = params['search'] || '';
    });
    this.fetchData();
  }

  fetchData(): void {
    const productUrl = `${this.baseProductUrl}${this.searchList}`;
    this.phoneData.getData(productUrl).subscribe({
      next: (response: any) => {
        this.productData = response|| [];
        this.productFormService.storeData(this.productData);
        if (this.productFormService.productId != -1) {
          this.productData[this.productFormService.productId] =
            this.productFormService.updatedProductData;
        }
      },
      error: (err: any) => {
        console.error('Error fetching product data', err);
      },
    });
  }

  addToCart(item: any): void {
    this.cartService.addtoCart(item);
  }

  delete(index: number): void {
    this.productData.splice(index, 1);
  }
}
