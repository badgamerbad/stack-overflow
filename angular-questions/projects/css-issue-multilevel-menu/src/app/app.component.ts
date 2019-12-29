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
    {
      name : 'location',label:'Location',path:'/location'
    },
    {
      name : 'courses',label:'Courses',path:'/courses',
      children :[
        {
          name : 'angular',label:'Angular',path:'/angular',
          children : [
            {
              name : 'angular+',label:'Angular+',path:'/angularplus',
              children : [
                {name : 'angularnine',label:'Angular 9',path :'/angularnine'}
              ]
            },
            {name : 'angularjs',label:'Angular Js',path:'/angularjs'}
          ]
        },
        {
          name : 'react',label:'React',path:'/react',
          children : [
            {name : 'angularjs',label:'Angular Js',path:'/angularjs'},
            {
              name : 'angular+',label:'Angular+',path:'/angularplus',
              children : [
                {name : 'angularnine',label:'Angular 9',path :'/angularnine'}
              ]
            },
          ]
        }
      ]
    },
    {
      name : 'institute',label:'Institute',path:'/institute',
      children :[
        {name : 'medical',label:'Medical',path:'/medical'},
        {name : 'certification',label:'Certification',path:'/certification'}
      ]
    },
  ]

  clickedEvent(event){
    if (event.currentTarget["dataset"].selected === "false")
      event.currentTarget["dataset"].selected = "true";
    else 
      event.currentTarget["dataset"].selected = "false";
  }

  setActiveClass(thisLiElement){
    return thisLiElement.dataset.selected === "true" ? { "active": true } : { "active": false };
  }

  iconState(thisLiElement) {
    return thisLiElement.dataset.selected === "true" ? "expand_less" : "expand_more";
  }
}
