import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  busqueda='';
  activar =false;
  objetos = [{id:1, name:"John M"}, {id:2, name:"Mary"}]
  resBusqueda = this.objetos;

  constructor() { }

  ngOnInit(): void {
  }

  activateButton(){
    this.activar = this.busqueda.length>3;
  }

  buscar():void{
    this.resBusqueda = this.objetos.filter(o=>
      o.name
      .toUpperCase()
      .includes(this.busqueda.toUpperCase()));
  }

}
