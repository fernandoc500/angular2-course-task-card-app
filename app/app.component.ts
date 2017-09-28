import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent { 
    private tasks = [
        new Task("Buy a monkey", false),
        new Task("Return the monkey", false),
        new Task("do nothing", true),
    ]
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
        this.currentTask.completed = null;
    }
}
