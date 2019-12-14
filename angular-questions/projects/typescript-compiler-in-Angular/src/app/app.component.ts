import { Component } from '@angular/core';
import { Node } from "@alfresco/js-api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typescript-compiler-in-Angular';
  selectedNode: Node;

  constructor(){
    this.log(123);
    this.log('hello world');
  }

  log(someArg: Object) {
    console.log(someArg);
  }
}
