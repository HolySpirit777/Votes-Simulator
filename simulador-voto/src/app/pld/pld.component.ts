import { Component, OnInit} from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pld',
  templateUrl: './pld.component.html',
  styleUrls: ['./pld.component.css']
})
export class PldComponent implements OnInit {

  show = true;

  presidente = this.rf.presidente;
  senador = this.rf.senador;
  diputado = this.rf.diputado;
  alcalde = this.rf.alcalde;
  regidor = this.rf.regidor;

  subscription: Subscription;

  constructor(private rf: ResultadoFinalService) {
    this.subscription = this.rf.getResult().subscribe(resultado => {
      this.show = resultado.value;
      console.log(this.show);
    });
   }

  ngOnInit() {
    console.log(this.show);
  }

  imprimir() {
    console.log(this.show + ' <--- quiro ver esta variable show');
  }

}
