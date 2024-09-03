import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonesDataService } from 'src/app/Services/phones-data.service';
import { ProductFormService } from 'src/app/Services/product-form.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent {
  productId: number = -1;
  product: any = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productFormService: ProductFormService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.productId = Number(params.get('id'));
    });
    this.product = history.state;
    this.productForm.patchValue({
      thumbnail: this.product.thumbnail,
      title: this.product.title,
      price: this.product.price,
      rating: this.product.rating,
      description: this.product.description,
      brand: this.product.brand,
      weight: this.product.weight,
      returnPolicy: this.product.returnPolicy,
      warrantyInformation: this.product.warrantyInformation,
      availabilityStatus: this.product.availabilityStatus,
      minimumOrderQuantity: this.product.minimumOrderQuantity,
      stock: this.product.stock,
      dimensions: {
        width: this.product.dimensions.width,
        height: this.product.dimensions.height,
        depth: this.product.dimensions.depth,
      },
    });
  }
  productForm = this.fb.group({
    thumbnail: [''],
    title: [''],
    price: [null],
    rating: [null],
    description: [''],
    brand: [''],
    weight: [null],
    returnPolicy: [''],
    warrantyInformation: [''],
    availabilityStatus: ['InStock'],
    minimumOrderQuantity: [1],
    stock: [1],
    dimensions: this.fb.group({
      width: [null],
      height: [null],
      depth: [null],
    }),
  });

  updateProduct() {
    const updatedProduct = this.productForm.value;
    this.productFormService.storeUpdatedData(updatedProduct, this.productId);
    this.router.navigate(['/product']);
  }
}
