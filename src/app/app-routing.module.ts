import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {QuestionsComponent} from "./questions/questions.component";
import {FinishComponent} from "./finish/finish.component";

const routes: Routes = [
  {path:'', redirectTo:'welcome', pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"finish", component:FinishComponent},
  {path:"questions", component:QuestionsComponent}
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
