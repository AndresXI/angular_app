import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  }

  // vars 
  @Output() featureSelected = new EventEmitter<string>(); 

  // methods 
  onSelect(feature: string) {
    this.featureSelected.emit(feature); 
  }

}
