import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductFormService } from 'src/app/Services/product-form.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  constructor(
    private fb: FormBuilder,
    private productformservice: ProductFormService,
    private router: Router
  ) {}

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

  onSubmit() {
    this.productformservice.productFormData.unshift(this.productForm.value);
    this.router.navigate(['/product']);
  }
}
