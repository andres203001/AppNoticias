import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// el output y el event emitter se importan desde angular core

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() parametrosSelecionados = new EventEmitter<any>();

  categoriaSelecionada = "general";
  paisSelecionado = "us"



  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertaiment', nombre: 'Entretenimiento' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnologia' },

  ]

  paises: any[] = [
    { value: 'us', nombre: 'Estados unidos' },
    { value: 'ar', nombre: 'Argentina' },
    { value: 'fr', nombre: 'Francia' },
    { value: 'hu', nombre: 'Hungria' },
    { value: 'mx', nombre: 'Mexico' },
    { value: 'gb', nombre: 'Reino unido' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia() {
    const PARAMETROS = {
      categoria: this.categoriaSelecionada,
      pais: this.paisSelecionado
    }

    this.parametrosSelecionados.emit(PARAMETROS)

  }

}
