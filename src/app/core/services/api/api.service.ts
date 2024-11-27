import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected http = inject(HttpClient);

  private baseURL = "https://fakestoreapi.com/products";

  getData<T>(): Observable<T> {
    return this.http.get<T>(`${this.baseURL}`);
  }

}
