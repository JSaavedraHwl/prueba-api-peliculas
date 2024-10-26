import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {
  private readonly URL_BASE= 'https://lightgrey-owl-901213.hostingersite.com/api'
  private readonly ENDPOINT_PELICULAS = '/get_peliculas.php?limit=100'
  http = inject(HttpClient);
  constructor() { }

  getPeliculas() {
    const url = this.URL_BASE + this.ENDPOINT_PELICULAS
    return this.http.get<any>(url);
  }
}
