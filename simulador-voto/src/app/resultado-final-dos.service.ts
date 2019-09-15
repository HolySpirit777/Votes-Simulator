import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadoFinalDosService {

  constructor() { }
  presidente: number;
  senador: number;
  diputado: number;
  alcalde: number;
  regidor: number;

  mostrarResultado = new Subject<boolean>();
  showResultTwo = new Subject<any>();

  getResult(): Observable<any> {
    return this.showResultTwo.asObservable();
  }

  sendResult() {
    this.showResultTwo.next({value: false});
  }

  activarResultadoFinal() {
    if (this.presidente && this.senador && this.diputado && this.alcalde && this.regidor) {
      return true;
      console.log(this.presidente, this.senador, this.diputado, this.alcalde, this.regidor);
    }
  }
}
