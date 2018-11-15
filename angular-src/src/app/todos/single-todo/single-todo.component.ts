import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {

  @Input() todo: any;

  constructor() {
  }

  ngOnInit() {
    this.todo.timestamp = this.todo._id.toString().substring(0, 8);
    this.todo.date = new Date( parseInt( this.todo.timestamp, 16 ) * 1000 );
    // console.log(this.todo);
  }

  formatDate(date) {
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + '.' + (monthIndex + 1) + '.' + year;
  }

}
