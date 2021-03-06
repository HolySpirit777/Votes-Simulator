import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoFinalService {

  constructor() { }
  presidente: number;
  senador: number;
  diputado: number;
  alcalde: number;
  regidor: number;

  mostrarResultado = new Subject<boolean>();
  showResult = new Subject<any>();

  getResult(): Observable<any> {
    return this.showResult.asObservable();
  }

  sendResult() {
    this.showResult.next({value: false});
  }

  activarResultadoFinal() {
    if (this.presidente && this.senador && this.diputado && this.alcalde && this.regidor) {
      return true;
      console.log(this.presidente, this.senador, this.diputado, this.alcalde, this.regidor);
    }
  }

}
