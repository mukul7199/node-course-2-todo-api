import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit {

  showSpinner = true;
  todos = [];

  constructor(
    private todoService: TodoService
  ) {
    this.todoService.getAllTodos()
      .subscribe((data) => {
        this.showSpinner = false;
        console.log(data);
        this.todos = data['todos'];
      });
  }

  ngOnInit() {
  }

}
