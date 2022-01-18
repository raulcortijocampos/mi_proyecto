import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  
 // todo: any = {text :"text"};
  todos: any | undefined;

  ngOnInit(): void {
    this.todos=[
      {text:"hacer la compra"},
      {text: "revisar el coche"}
    ];
  }

  addTodo(){
    
    }
  
}
