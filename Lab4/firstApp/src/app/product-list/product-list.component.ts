import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [...products];

  share() {
    //window.alert('The product has been shared!');
    const telegramLink = `https://telegram.me/share/url?url=<http://localhost:4200/products/1>`;
    window.open(telegramLink, '_blank ');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
