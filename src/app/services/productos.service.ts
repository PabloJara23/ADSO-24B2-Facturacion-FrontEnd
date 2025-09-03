import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Productos } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private options;
  private url = 'http://127.0.0.1:5000/api/v1/productos';
    
  constructor(public http: HttpClient) {     
    let headers = new HttpHeaders({
      'Content-Type':'application/json'
    })
    this.options = { headers:headers }
  }

  obtenerProductos():Observable<any>{
    return this.http.get<Observable<any>>(
      this.url
    );
  }

  guardarProductos(producto: Productos) {
    let productoJson = JSON.stringify(producto);
    return this.http.post(this.url,producto, this.options)
  }
}