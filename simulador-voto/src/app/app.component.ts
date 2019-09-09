import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simulador-voto';

  mostrar = true;
  etiqueta = 'Elije el partido';

  clickMostrar() {
    this.mostrar = !this.mostrar;
    if (this.mostrar === false) {
      this.etiqueta = 'Elige al candidato de su preferencia';
    } else {
      this.etiqueta = 'Elije el partido';
    }
  }
}
