import { Component, OnInit, Input } from '@angular/core';
import { TodoDialogComponent } from '../todo-dialog/todo-dialog.component';
import { TodoService } from 'src/app/services/todo.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  @Input() todo: any;
  completedIcon: String;

  constructor(
    public dialog: MatDialog,
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.todo.timestamp = this.todo._id.toString().substring(0, 8);
    this.todo.date = new Date(parseInt(this.todo.timestamp, 16) * 1000);
    this.completedIcon = this.todo.completed ? 'cancel' : 'done';
    // console.log(this.todo);
  }

  formatDate(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + '.' + (monthIndex + 1) + '.' + year;
  }

  onTodoEdit() {
    const dialogRef = this.dialog.open(TodoDialogComponent, {
      width: '75%',
      data: {
        todo: this.todo.text,
        title: 'Edit Todo'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.fixButtonRippleEffectBug();
      console.log('The dialog was closed');
      if (result) {
        result = result.trim();
        if (result !== '') {
          this.todo.text = result;
          console.log(result);
          this.updateTodo(this.todo);
        } else {
          console.log('Blank Todo');
        }
      }
    });
  }

  onTodoDelete() {
    this.todoService.deleteTodo(this.todo);
  }

  onTodoComplete() {
    this.todo.completed = !this.todo.completed;
    this.updateTodo(this.todo);
  }

  updateTodo(editedTodo) {
    this.todoService.updateTodo(editedTodo);
  }

  private fixButtonRippleEffectBug() {
    const buttonList = document.getElementsByTagName('button');
    const buttonArray = [].slice.call(buttonList);
    // tslint:disable-next-line:prefer-const
    for (let currentButton of buttonArray) {
      currentButton.classList.remove('cdk-program-focused');
      currentButton.classList.add('cdk-mouse-focused');
    }
  }


}
