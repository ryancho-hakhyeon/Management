import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayComponent } from './today/today.component';
import { WorkComponent } from './work/work.component';
import { DoneComponent } from './done/done.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'today', component: TodayComponent},
  { path: 'work', component: WorkComponent},
  { path: 'done', component: DoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
