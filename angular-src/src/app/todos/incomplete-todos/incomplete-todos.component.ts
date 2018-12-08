import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-incomplete-todos',
  templateUrl: './incomplete-todos.component.html',
  styleUrls: ['./incomplete-todos.component.css']
})
export class IncompleteTodosComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  todos = this.todoService.getIncompleteTodos();
  showSpinner = this.todos.length === 0;

  constructor(
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.subscription = this.todoService.incompleteTodosChanged
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
