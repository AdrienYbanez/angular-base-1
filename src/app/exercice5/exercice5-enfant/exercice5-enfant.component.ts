import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice5-enfant',
  templateUrl: './exercice5-enfant.component.html',
  styleUrls: ['./exercice5-enfant.component.css']
})
export class Exercice5EnfantComponent implements OnInit {
  @Input() compteur;
  @Output() action = new EventEmitter();

  constructor() { }

  public modifCompteur(value) {
    this.action.emit(value);
  }


  ngOnInit(): void {
  }

}
