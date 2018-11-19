import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.css']
})
export class AllTodosComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todos = this.todoService.getAllTodos();
  showSpinner = this.todos.length === 0;

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.subscription = this.todoService.todosChanged
      .subscribe((data) => {
        this.showSpinner = false;
        // console.log(data);
        this.todos = data;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
