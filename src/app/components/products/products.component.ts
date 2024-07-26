import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/model/product.model';
import { Filter } from '../filter/filter.component';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // array to store all products
  paginatedProducts: Product[] = []; // array to store products in paginated format
  currentPage: number = 1;
  itemsPerPage: number = 5; // change the number of items per page
  totalPages: number = 0;
  filteredProducts: Product[] = [];
  noProducts: boolean = false;
  cartCount: number = 0;


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = [...this.products]
    this.calculatePages();
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProducts();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedProducts();
    }
  }


  onFilterChange(filter: Filter): Product[] | void {
    if (filter.searchTerm == "" && filter.category == "") {
      this.getProductList();
    }
    else {
      if (filter.searchTerm) {
        this.filteredProducts = this.products.filter(product => {
          return (product.name.toLowerCase().includes(filter.searchTerm.toLowerCase()));
        });
      }
      if (filter.category) {
        this.filteredProducts = this.products.filter(product => {
          return ((product.category) == (filter.category));
        });
      }
    }


    if (this.filteredProducts.length > 0) {
      this.calculatePages();
      this.noProducts = false
    }
    else {
      this.calculatePages();
      this.noProducts = true
    }
  }

  onSortChanged(sortOption: string): void {
    switch (sortOption) {
      case 'price-asc':
        this.filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        this.filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
    this.updatePaginatedProducts();
  }

  addToCart(product: Product): void {
    this.cartCount++;
    alert(`${product.name} is added to cart`);
  }

}