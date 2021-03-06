import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pld',
  templateUrl: './pld.component.html',
  styleUrls: ['./pld.component.css']
})
export class PldComponent implements OnInit, OnDestroy {

  show = true;
  subscription: Subscription;

  constructor(private rf: ResultadoFinalService) {
    this.subscription = this.rf.getResult().subscribe(resultado => {
      this.show = resultado.value;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
