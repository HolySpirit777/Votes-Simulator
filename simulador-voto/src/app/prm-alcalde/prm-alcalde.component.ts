import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prm-alcalde',
  templateUrl: './prm-alcalde.component.html',
  styleUrls: ['./prm-alcalde.component.css']
})
export class PrmAlcaldeComponent implements OnInit {

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
  ]

  constructor() { }

  ngOnInit() {
  }

}