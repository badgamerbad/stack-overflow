import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent  {
  selected  : string
  navItems = [ 
    {name : 'location',label:'Location',path:'/location'},
    {name : 'courses',label:'Courses',path:'/courses',children :[
      {name : 'angular',label:'Angular',path:'/angular',children : [
        {name : 'angular+',label:'Angular+',path:'/angularplus',children : [
          {name : 'angularnine',label:'Angular 9',path :'/angularnine'}
        ]},
        {name : 'angularjs',label:'Angular Js',path:'/angularjs'}
      ]},
      {name : 'react',label:'React',path:'/react'}
    ]},
    {name : 'institute',label:'Institute',path:'/institute',children :[
      {name : 'medical',label:'Medical',path:'/medical'},
      {name : 'certification',label:'Certification',path:'/certification'}
    ]},
  ]

  clickedEvent(name){
    this.selected = this.selected != name ? name : ''
  }

  setActiveClass(name){
    var isActive = false
    if(this.selected === name)
        isActive = true
    return {
      'active' : isActive
    }
  }

  submenuClicked(subMenu){
    this.navItems.forEach((row)=>{
      if(row.children && row.children.length>0){
        row.children.forEach((child)=>{
          if(child.name === subMenu){
             this.selected = row.name
             this.setActiveClass(this.selected) 
             return;
          }
        })
      }
    })    
  }
}
