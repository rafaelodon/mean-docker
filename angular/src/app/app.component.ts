import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl : 'app.component.html'
})
export class AppComponent implements OnInit{

  tasks = [];

  task = {
    title : 't',
    description : 'd',
    state : 'wip'
  }

  states = ['todo','wip','done'];

  constructor(private http:Http){
  }

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.task = {
      title : '',
      description : '',
      state : 'todo'
    }

    this.http.get("http://localhost:3000/tasks").subscribe(
      next => {
        this.tasks = next.json().list;        
      }
    );
  }

  onClickAdd(){    
    this.task['date'] = new Date();        
    this.http.post("http://localhost:3000/tasks", this.task).subscribe(
      next => this.refresh()
    )
  }
}
