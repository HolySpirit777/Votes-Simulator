import { Component, OnInit } from '@angular/core';
import { ResultadoFinalService } from '../resultado-final.service';

@Component({
  selector: 'app-prsc-diputado',
  templateUrl: './prsc-diputado.component.html',
  styleUrls: ['./prsc-diputado.component.css']
})
export class PrscDiputadoComponent implements OnInit {

  diputados = [
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
    this.rf.diputado = value;

    if (this.rf.activarResultadoFinal()) {
      this.rf.sendResult();
    }
  }

  constructor(private rf: ResultadoFinalService) { }

  ngOnInit() {
  }

}
