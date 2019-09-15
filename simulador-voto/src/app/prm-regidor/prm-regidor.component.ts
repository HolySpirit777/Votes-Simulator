import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';

@Component({
  selector: 'app-prm-regidor',
  templateUrl: './prm-regidor.component.html',
  styleUrls: ['./prm-regidor.component.css']
})
export class PrmRegidorComponent implements OnInit {

  regidores = [
    {
      numero: 1,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 2,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 3,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 4,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 5,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 6,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 7,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 8,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 9,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 10,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 11,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 12,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 13,
      img: '../assets/Imagenes/Candidato M.png'
    },
    {
      numero: 14,
      img: '../assets/Imagenes/Candidato F.png'
    },
    {
      numero: 15,
      img: '../assets/Imagenes/Candidato M.png'
    }
  ];

  valorMarcado = 0;

  marcar(value) {
    this.valorMarcado = value;
    this.rf.regidor = value;

    if (this.rf.activarResultadoFinal()) {
      this.rf.sendResult();
    }
  }

  constructor(private rf: ResultadoFinalService) { }

  ngOnInit() {
  }

}
