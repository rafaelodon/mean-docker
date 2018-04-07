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
    if(window.location.host.indexOf("localhost:4200") >= 0){
      return "http://localhost:8080" + path;
    }else{
      return window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + path;
    }
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
