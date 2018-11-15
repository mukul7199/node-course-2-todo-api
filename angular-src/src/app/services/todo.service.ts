import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  backendHost = 'http://localhost:3000/';

  constructor(
    private http: HttpClient
  ) { }

  getAllTodos() {
    return this.http.get(this.backendHost + 'todos');
  }
}
