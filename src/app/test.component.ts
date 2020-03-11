import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-test',
  template: `
    <p class={{temp}} [hidden]="!mostrarParrafo" (click)="cambiarVariable()" >
      test works!
      {{temp}}
    </p>

    <input type="text" [value]="valorInput" (input)="valorInput=$event.target.value">
    <p>{{valorInput}}</p>
    <br>
    <input 
      type="text" 
      [(ngModel)]="busqueda" 
      (input)="buscar()" >
    <p>{{resBusqueda | json}}</p>
   
  `,
  styles: []
})
export class TestComponent implements OnInit {
  temp ="display-1"
  mostrarParrafo = true;
  valorInput = 'inicializado';
  objetos = [{id:1, name:"John M"}, {id:2, name:"Mary"}]
  busqueda="";
  resBusqueda = this.objetos;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarVariable():void{
    this.temp = 'display-'+ (Number(this.temp.split('-').pop())+1);
  }

  buscar():void{
    this.resBusqueda = this.objetos.filter(o=>
      o.name
      .toUpperCase()
      .includes(this.busqueda.toUpperCase()));
  }
}
