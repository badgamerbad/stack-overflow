import { Component, OnInit, Input, ViewEncapsulation,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SubmenuComponent{

  @Input() navItems : any[]
  
  constructor() { }

  clickedEvent(event){
    if (event.currentTarget["dataset"].selected === "false")
      event.currentTarget["dataset"].selected = "true";
    else 
      event.currentTarget["dataset"].selected = "false";
  }

  setActiveClass(thisLiElement) {
    return thisLiElement.dataset.selected === "true" ? true : false;
  }

  iconState(thisLiElement) {
    return thisLiElement.dataset.selected === "true" ? "expand_less" : "expand_more";
  }
}