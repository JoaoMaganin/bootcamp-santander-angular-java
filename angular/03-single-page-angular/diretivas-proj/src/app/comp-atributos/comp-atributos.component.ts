import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "disable";
  corFundo:string = "magenta";
  corDaFonte:string = "green";
  item:string = "";
  lista:string[] = [];
  isEnableBlock:boolean = true;

  constructor() { }

  adicionarLista(){
    this.lista.push(this.item);
  }

  ngOnInit(): void {
  }

  trocar() {
    if(this.estilo === "enable") {
      this.estilo = "disable";
    } else {
      this.estilo = "enable";
    }
  }

}
