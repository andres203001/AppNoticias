import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';
// importar el servicio a usar
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appNoticias';
  listadoDeNoticias: any[] = []
  loading = false;
  // inyectar el servicio a usar en el construtor o donde se vaya a usar; crear la variable donde se almacena el servio 
  constructor(private _api: NoticiasService) {

  }

  buscarNoticas(parametro: any) {
    this.loading = true
    this.listadoDeNoticias = [];
    setTimeout(() => {
      // cuando se usar obsevables hay que suscribirse a la hora de usar el servicio
      this._api.getNoticias(parametro).subscribe(resultado => {
        console.log(resultado)
        this.listadoDeNoticias = resultado.articles;
        this.loading = false
      })
    }, 2000)

  }
}
