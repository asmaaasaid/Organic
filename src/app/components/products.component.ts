import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

   productList:any[]=[
    {
      productName:"Farm Fresh Fruits",
      productDescription:"Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.",
      productQuantity:200,
      productImg:"../../assets/organic-img/lemon2.jpg"
    },
    {
      productName:"Fresh Vegetables",
      productDescription:"Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.",
      productQuantity:1,
      productImg:"../../assets/organic-img/vegetable.jpg"
    },
    {
      productName:"Organic Legume",
      productDescription:"Phasellus sed urna mattis, viverra libero sed, aliquam est.",
      productQuantity:0,
      productImg:"../../assets/organic-img/images (1).jpg"
    }
  ]
  
}
