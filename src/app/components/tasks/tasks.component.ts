import { Component, EventEmitter, OnInit, ViewChild, AfterViewInit, DoCheck, OnChanges, SimpleChanges, AfterContentInit, AfterViewChecked } from '@angular/core';

import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';
import { HeaderComponent } from '../header/header.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Observable } from 'rxjs';
/* import { TASKS } from '../../mock-tasks'; */

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, /* DoCheck,  */OnChanges {
  
  //@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChild(AddTaskComponent) addTaskComponent!: AddTaskComponent;

  tasks: Task[] = [];
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('OnInit is called');
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));    
    /* this.taskService.ownObs.subscribe({
      next: o => console.log(o),
      complete: () => console.log("Done!"),
      error: (err) => console.log(err)
    }); */
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  
  /* ngDoCheck(): void {
    console.log('DoCheck is called');
  } */

  ngAfterContentInit(): void {
    //console.log(this.addTaskComponent?.justForTest);
  }

  ngAfterViewInit(): void {
    console.log(this.addTaskComponent.justForTest);    
    this.addTaskComponent.justForTest = "Change text";
    console.log(this.addTaskComponent.justForTest);    
  }

  ngAfterViewChecked(): void {
    //console.log(this.addTaskComponent.justForTest);    
    //this.addTaskComponent.justForTest = "Change text";
    //console.log(this.addTaskComponent.justForTest);    
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(() => this.tasks = this.tasks.filter((t) => t.id !== task.id));
  }

  toggleRemider(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskRemider(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }

  
}
