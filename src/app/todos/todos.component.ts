import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor() { }

  todos: any[] | undefined;
  todo: any = {text :"text"};


  ngOnInit(): void {
    this.todos=[
      {text:"hacer la compra"},
      {text: "revisar el coche"}
    ];
  }

addTodo(){
  let mitodo={text:this.todo.text};
  this.todos?.push(mitodo);
}
}
