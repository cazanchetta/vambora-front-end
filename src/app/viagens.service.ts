import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViagensService {

  viagensUrl = "http://localhost:8080/viagens";
  viagem: any;
  
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.viagensUrl}`);
  }

  solicitarViagem(viagem: any) {
    return this.http.post(this.viagensUrl + '/solicita-viagem', viagem);
  }

  alterarViagem(id: any, status: any) {
    this.http.get(this.viagensUrl + '/id/' + id).subscribe(resposta => {
      this.viagem = resposta
      this.viagem.statusViagem = status;
    });
    return this.http.put(this.viagensUrl, this.viagem);
  }

}
