import { Component, OnInit, Input, ViewEncapsulation,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SubmenuComponent{

  @Input() navItems : any[]
  selected : any
  @Output() clickedSubMeu = new EventEmitter();
  constructor() { }

 

  clickedEvent(name){
    this.selected = this.selected != name ? name : ''
    this.clickedSubMeu.emit(name)
  }
  

}