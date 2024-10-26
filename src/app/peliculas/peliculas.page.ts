import { Component, inject, OnInit } from '@angular/core';
import { ApiPeliculasService } from '../servicios/api-peliculas.service';
import { Pelicula } from '../interface/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  apiPeliculasService = inject(ApiPeliculasService)

  peliculas: Pelicula[] = []
  constructor() { }

  ngOnInit() {
    const peliculasLocalStorage = localStorage.getItem('peliculas');
    
    if(peliculasLocalStorage !== null) {
      this.peliculas = JSON.parse(peliculasLocalStorage) as Pelicula[];
    }else {
      this.apiPeliculasService.getPeliculas()
      .subscribe(
        (peliculas)=>  {
          localStorage.setItem('peliculas', JSON.stringify(peliculas));
          this.peliculas = peliculas;
        }
      )
    }
  }

}
