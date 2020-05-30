import { Component, OnInit } from '@angular/core';
import { ViagensService } from '../viagens.service';

@Component({
  selector: 'app-viagens',
  templateUrl: './viagens.component.html',
  styleUrls: ['./viagens.component.scss']
})
export class ViagensComponent implements OnInit {

  viagens : Array<any>;
  viagem: any;
  idViagemIniciar: any;
  idViagemFinalizar: any;

  constructor(private viagensService: ViagensService) { }

  ngOnInit(): void {
    this.listar();

    this.viagem = {
      id: null,
      idCarro: null,
      idCliente: null,
      idLocalizacaoOrigem: null,
      idLocalizacaoDestino: null,
      dataHoraSolicitacao: null,
      dataHoraPartida: null,
      dataHoraChegada: null,
      statusViagem: null
    };
  }

  listar() {
    this.viagensService.listar().subscribe(dados => this.viagens = dados);
  }

  solicitarViagem() {
    this.viagensService.solicitarViagem(this.viagem).subscribe(resposta => this.viagens.push(resposta));
  }

  iniciarViagem() {
    this.viagensService.alterarViagem(this.idViagemIniciar, "VIAGEM_INICIADA").subscribe(resposta => {
      this.viagens.splice(this.viagens.indexOf(resposta), 1);
      this.viagens.push(resposta);
    });
  }

  finalizarViagem() {
    this.viagensService.alterarViagem(this.idViagemFinalizar, "VIAGEM_FINALIZADA").subscribe(resposta => {
      this.viagens.splice(this.viagens.indexOf(resposta), 1);
      this.viagens.push(resposta)
    });
  }

}
