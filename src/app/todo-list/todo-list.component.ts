import { Component, OnInit } from '@angular/core';

import { TodoService } from './todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: any = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.todoService.index()
      .then((response) => {
        this.todoList = response;
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  addRow() {
    let newTodo = {'id': null, 'title': null};
    this.todoList.push(newTodo);
  }

}
