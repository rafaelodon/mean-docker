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

  appendApiUrl(path:string){
    return window.location.protocol + "//" + window.location.hostname + ":8080" + path;
  }

  refresh(){
    this.task = {
      title : '',
      description : '',
      state : 'todo'
    }

    this.http.get(this.appendApiUrl("/tasks")).subscribe(
      next => {
        this.tasks = next.json().list;        
      }
    );
  }

  onClickAdd(){    
    this.task['date'] = new Date();        
    this.http.post(this.appendApiUrl("/tasks"), this.task).subscribe(
      next => this.refresh()
    )
  }
}
