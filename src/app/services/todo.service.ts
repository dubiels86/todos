import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Configuration } from '../config/config';
import { TODO } from '../model/todo.interface';



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor(
    private httpClient: HttpClient,
  ) { }

  getTodo() {
    return  this.httpClient.get('../todo.json');;
  }



  createTodo(todo:TODO) {
    return this.httpClient.post('../todo.json',todo);
  }

  deleteTodo(id:number) {
    return this.httpClient.delete(`../todo.json/${id}`);
  }

  updateTodo(id: number, todo:TODO) {
    return this.httpClient.patch(`../todo.json/${id}`, todo);
  }

  
}
