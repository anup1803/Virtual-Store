import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  count: number = 1;
  product:any;
  constructor(private cartServices: CartService) {}

  ngOnInit() {
    this.product = history.state;
    console.log("details :",this.product)
  }

  addToCart(item: any) {
    this.cartServices.addtoCart(item);
  }
}
