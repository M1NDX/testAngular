import { Component, OnInit } from '@angular/core';

class Usuario{
  nombre: string;
  pass: string;
  constructor(nombre:string, pass:string){
    this.nombre = nombre;
    this.pass = pass;
  }
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new Usuario("user1","123");
  mostrarUsuario = true;
  
  src = "https://randomuser.me/api/portraits/men/76.jpg";

  constructor() { }

  ngOnInit(): void {

  }

  muestra(){
    this.mostrarUsuario=!this.mostrarUsuario;
  }

}
