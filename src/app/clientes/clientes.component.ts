import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes : Array<any>;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clientesService.listar().subscribe(dados => this.clientes = dados);
  }

}
