import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  backendHost = 'http://localhost:3000/';

  todosChanged = new Subject<any []>();

  private todos = [];
  constructor(
    private http: HttpClient
  ) { }

  fetchTodos() {
    this.http.get(this.backendHost + 'todos').subscribe((data) => {
      this.todos = data['todos'];
      this.todosChanged.next(this.todos.slice());
    });
  }

  getAllTodos() {
    this.fetchTodos();
    return this.todos.slice();
  }

  createNewTodo(todoText) {
    this.http.post(this.backendHost + 'todos', { text: todoText }).subscribe((data) => {
      // this.todos.push(data);
      // this.todosChanged.next(this.todos.slice());
      this.fetchTodos();
    });
  }

  updateTodo(editedTodo) {
    this.http.patch(this.backendHost + 'todos' + '/' + editedTodo._id, editedTodo).subscribe((data) => {
      console.log('Todo Updated');
      this.fetchTodos();
    });
  }

  deleteTodo(todo) {
    this.http.delete(this.backendHost + 'todos' + '/' + todo._id).subscribe((data) => {
      console.log('Todo deleted');
      this.fetchTodos();
    });
  }
}
