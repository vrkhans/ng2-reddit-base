import { Component } from '@angular/core';
import { RedditAppComponent} from './reddit-app.component'

@Component({
  selector: 'my-app',
  
  template: `
  <reddit></reddit>
  
  `,
  directives:[RedditAppComponent]

  
})

export class AppComponent {
  name: string;
  names: string[];
  count: number;

  constructor(){
    this.count = 0;
    this.name = 'Muhammad';
    this.names = ['zia','salman','jabeen'];
  }

  countPlus(){
    this.count = this.count + 1;
    return this.count;
  }

}
   