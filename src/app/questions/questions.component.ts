import {Component, OnInit} from '@angular/core';
import {QustionService} from "../service/qustion.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public name: string = "";
  public randNum: number = 0;
  public questionText: string = "";
  public answerText: string = "";
  public tooltipText: string = "";
  public maxNumberOfQuestion: number = 4;
  public questionsNumbers: any = [] ;
  public questionExist:boolean = false;
  constructor(private qustionService: QustionService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.findQuestion();
  }

  getAllQuestions() {
    for (let i = 0; i < this.maxNumberOfQuestion+1; i++) {
      this.questionsNumbers?.push(i);
    }
  }

  setQuestionData(){
    this.qustionService.getQuesionJson()
      .subscribe(res => {
        this.questionText = res.questions[this.randNum].questionText
        this.answerText = res.questions[this.randNum].answerText
      })
  }

  findQuestion() {
    this.questionExist=false;
    this.randNum = Math.floor(Math.random() * (this.maxNumberOfQuestion + 1));
    if(this.questionsNumbers.length==0){
      this.tooltipText="cjnvjsnvjvndsjvn";
    }
    while(!this.questionExist) {
      if (this.questionsNumbers?.includes(this.randNum)) {
        this.questionExist = true;
        this.setQuestionData()
        delete this.questionsNumbers[this.randNum];
      } else {
        this.questionExist = false;
        this.randNum = Math.floor(Math.random() * (this.maxNumberOfQuestion + 1));
      }
    }
  }
}
