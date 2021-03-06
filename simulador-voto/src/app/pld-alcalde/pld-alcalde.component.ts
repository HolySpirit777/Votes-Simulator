import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';

@Component({
  selector: 'app-pld-alcalde',
  templateUrl: './pld-alcalde.component.html',
  styleUrls: ['./pld-alcalde.component.css']
})
export class PldAlcaldeComponent implements OnInit {

  alcaldes = [
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

  constructor(private rf: ResultadoFinalService) { }



  marcar(value) {
    this.valorMarcado = value;
    this.rf.alcalde = value;

    if (this.rf.activarResultadoFinal()) {
      this.rf.sendResult();
    }
  }

  ngOnInit() {
  }

}
