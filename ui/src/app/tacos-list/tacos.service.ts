import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Taco } from './taco.model';

const TACOS_API = '/api';
@Injectable({
  providedIn: 'root'
})
export class TacosService {
  constructor(private http: HttpClient) {}

  getTacos() {
    return this.http.get<Array<Taco>>(`${TACOS_API}/tacos`);
  }

  deleteTaco(taco: Taco) {
    return this.http.delete(`${TACOS_API}/taco/${taco.id}`);
  }

  addTaco(taco: Taco) {
    return this.http.post<Taco>(`${TACOS_API}/taco/`, taco);
  }

  updateTaco(taco: Taco) {
    return this.http.put<Taco>(`${TACOS_API}/taco/${taco.id}`, taco);
  }
}
