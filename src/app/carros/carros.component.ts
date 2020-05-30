import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

  carrosDisponiveis: Array<any>;

  constructor(private carrosService: CarrosService) { }

  ngOnInit(): void {
    this.listarDisponiveis();
  }

  listarDisponiveis() {
    this.carrosService.listarDisponiveis().subscribe(dados => this.carrosDisponiveis = dados);
  }

}
