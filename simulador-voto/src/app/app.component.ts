import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResultadoFinalService } from './resultado-final.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'simulador-voto';
  mostrar = true;
  etiqueta = 'Elije el partido';

  constructor(private router: Router, private rf: ResultadoFinalService) {
  }

  ngOnInit() {
    this.router.navigate(['inicio']);
    sessionStorage.clear();
  }

  clickMostrar() {
    this.mostrar = !this.mostrar;
    if (this.mostrar === false) {
      this.etiqueta = 'Elige al candidato de su preferencia';
    } else {
      this.rf.presidente = null;
      this.rf.senador = null;
      this.rf.alcalde = null;
      this.rf.regidor = null;
      this.rf.diputado = null;
      this.etiqueta = 'Elije el partido';
    }
  }
}
