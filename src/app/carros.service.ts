import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {

  carrosDisponiveisUrl = 'http://localhost:8080/carros/disponiveis';

  constructor(private http: HttpClient) { }

  listarDisponiveis() {
    return this.http.get<any[]>(`${this.carrosDisponiveisUrl}`)
  }

}
