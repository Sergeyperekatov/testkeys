import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testkeys-app';
  appTitle = 'Welcome!';
  public todos: Todo[] = [
    {id: 1, title: "Купить хлеб", completed: false, date: new Date()},
    {id: 2, title: "Купить масло", completed: true, date: new Date()},
    {id: 3, title: "Купить молоко", completed: false, date: new Date()},
  ];
  onToggle(id: number) {
    const idx = this.todos.findIndex( t => t.id === id)
    this.todos[idx].completed = !this.todos[idx].completed
  }

}
