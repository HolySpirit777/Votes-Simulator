import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prsc',
  templateUrl: './prsc.component.html',
  styleUrls: ['./prsc.component.css']
})
export class PrscComponent implements OnInit {

  show = true;
  subscription: Subscription;

  constructor(private rf: ResultadoFinalService) {
    this.subscription = this.rf.getResult().subscribe(resultado => {
      this.show = resultado.value;
    });
  }

  ngOnInit() {
    console.log(this.show);
  }

}
