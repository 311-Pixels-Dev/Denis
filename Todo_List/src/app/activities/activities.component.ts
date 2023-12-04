import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import ActivityModel from '../models/ActivityModel';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [NgbModule, CommonModule, FormsModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent {
    activity: string = "";
    category: string = "";
    categories: string[] = [];
    unfinishedActs: ActivityModel[] = [];
    finishedActs: ActivityModel[] = [];
    catActs: ActivityModel[] = [];

    addActivity() {
        let a: ActivityModel = new ActivityModel(this.activity, this.category);
        this.category == null ? this.category = "Senza categoria" : null;
        this.categories.includes(this.category) ? null : this.categories.push(this.category);
        this.unfinishedActs.push(a);
    }

    setComplete(act: ActivityModel) {
        act.setComplete();
        this.finishedActs.push(act);
        this.unfinishedActs = this.unfinishedActs.filter(unfinishedAct => unfinishedAct != act);
        console.log(this.unfinishedActs);
    }

    getActs(cat: string) {
        this.catActs = this.finishedActs.filter(act => act.category == cat);
    }
}
