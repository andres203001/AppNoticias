import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// importar el observable,

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }
  // devolver un observable
  // para filtar las noticias en la url se usan comillas simplies
  getNoticias(parametros: any): Observable<any> {
    const URL = 'https://newsapi.org/v2/top-headlines?country=' + parametros.pais + '&category=' + parametros.categoria + '&apiKey=75d4ff630feb4233ad5ee8d99eb6ba45'

    return this.http.get(URL)
  }
}
