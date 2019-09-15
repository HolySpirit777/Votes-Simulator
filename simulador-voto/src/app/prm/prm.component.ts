import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-prm',
  templateUrl: './prm.component.html',
  styleUrls: ['./prm.component.css']
})
export class PrmComponent implements OnInit {

  show = true;
  subscription: Subscription;

  constructor(private rf: ResultadoFinalService) {
    this.subscription = this.rf.getResult().subscribe(resultado => {
      this.show = resultado.value;
      console.log(this.show + ' <--- value del show');
    });
   }

  ngOnInit() {
    console.log(this.show);
  }

}
