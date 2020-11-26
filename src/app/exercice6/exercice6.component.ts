import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice6',
  templateUrl: './exercice6.component.html',
  styleUrls: ['./exercice6.component.css', '../main-component.css']
})
export class Exercice6Component implements OnInit {
  public valeur: string;

  @ViewChild('f') public el: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  public editText() {
    this.valeur = this.el.nativeElement.value;
  }

}
