import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  share(product: Product) {
    const telegramMessage = `Check out this product: ${product.name} - ${product.description} - ${product.rating} Stars - ${product.kaspiLink}`;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${encodeURIComponent(telegramMessage)}`;

    window.location.href = telegramURL;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  products: Product[] = [...products];
  categories = ['Earings', 'Ring', 'Necklace', 'Bracelet'];
  selectedCategory: string | undefined;
  filteredProducts: Product[] = [];

  onSelectCategory(category: string): void {
    this.selectedCategory = category;
    this.filterProductsByCategory();
  }

  onRemoveProduct(product: Product): void {
    // Implement logic to remove the product from the list
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.filterProductsByCategory();
    }
  }

  private filterProductsByCategory(): void {
    this.filteredProducts = this.selectedCategory
      ? this.products.filter(product => product.category === this.selectedCategory)
      : this.products;
  }
}


