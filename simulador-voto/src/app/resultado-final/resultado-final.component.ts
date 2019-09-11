import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';

@Component({
  selector: 'app-resultado-final',
  templateUrl: './resultado-final.component.html',
  styleUrls: ['./resultado-final.component.css']
})
export class ResultadoFinalComponent implements OnInit {

  presidente = this.rf.presidente;
  senador = this.rf.senador;
  diputado = this.rf.diputado;
  alcalde = this.rf.alcalde;
  regidor = this.rf.regidor;

  constructor(private rf: ResultadoFinalService) { }

  ngOnInit() { }

}
