import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice5',
  templateUrl: './exercice5.component.html',
  styleUrls: ['./exercice5.component.css', '../main-component.css']
})
export class Exercice5Component implements OnInit {
  public compteur: number = 0;
  public compteurModifie: number;

  constructor() { }

  ngOnInit() {
    this.compteurModifie = this.compteur;
  }

  public updateCompteur(value) {
    this.compteurModifie += value;
  }

}
