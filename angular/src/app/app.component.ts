import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html'
})
export class AppComponent {

  tasks = [];

  task = {
    title : 't',
    description : 'd',
    state : 'wip'
  }

  states = ['todo','wip','done'];

  constructor(private http:Http){
  }

  onClickAdd(){    

    this.task['date'] = new Date();
    this.tasks.push(this.task);

    this.task = {
      title : '',
      description : '',
      state : 'todo'
    }
  }
}
