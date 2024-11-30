import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'; // Import TodoComponent

@Component({
  selector: 'app-root',
  standalone: true, // Standalone component
  template: `<h1>To-Do List App</h1>
             <app-todo></app-todo>`,
  imports: [TodoComponent], // Add TodoComponent in imports
})
export class AppComponent {}
