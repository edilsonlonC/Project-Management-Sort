import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocomoll',
  templateUrl: './cocomoll.component.html',
  styleUrls: ['./cocomoll.component.css']
})
export class CocomollComponent implements OnInit {

  diseno = 1;
  fecha: Date;

  constructor() {
    this.fecha = new Date();
  }

  ngOnInit() {}

}
