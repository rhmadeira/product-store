import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct, TProductPayload } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<IProduct[]>('api/products');
  }

  create(payload: TProductPayload) {
    return this.httpClient.post('api/products', payload);
  }

  constructor() {}
}
