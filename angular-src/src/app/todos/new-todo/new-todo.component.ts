import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit {

  todo: String;

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService
  ) { }

  ngOnInit() {
  }

  openNewTodoDialog() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '75%',
      data: {
        todo: this.todo,
        title: 'Create a new todo'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        result = result.trim();
        this.todo = result;
        if (result !== '') {
          console.log(result);
          this.createTodo(result);
        } else {
          console.log('Blank Todo');
        }
      }
    });
  }

  createTodo(newTodo) {
    this.todoService.createNewTodo(newTodo);
    this.todo = '';
  }

}
