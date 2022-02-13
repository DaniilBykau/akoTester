import { Component, OnInit } from '@angular/core';
import {QustionService} from "../service/qustion.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public name : string="";
  constructor(private qustionService : QustionService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
  }

  getAllQuestions(){
    this.qustionService.getQuesionJson()
      .subscribe(res=>{
        console.log(res.questions);
      })
  }

}
