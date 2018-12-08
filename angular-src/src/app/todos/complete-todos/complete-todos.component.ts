import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-complete-todos',
  templateUrl: './complete-todos.component.html',
  styleUrls: ['./complete-todos.component.css']
})
export class CompleteTodosComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todos = this.todoService.getCompletedTodos();
  showSpinner = this.todos.length === 0;

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.subscription = this.todoService.completedTodosChanged
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
