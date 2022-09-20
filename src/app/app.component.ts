import { Component } from '@angular/core';
import { ITodo } from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos: ITodo[] = []
  newTodo: string;

  addTodo() {
    if (this.newTodo) {
      this.todos.push({ content: this.newTodo, isCompleted: false })
      this.initNewTodo()
    }
    else alert('Entrez une tâche')
  }

  initNewTodo() { this.newTodo = '' }
  deleteTodo(i: number) { this.todos.splice(i, 1) }
  done(i: number) { this.todos[i].isCompleted = !this.todos[i].isCompleted }
}
