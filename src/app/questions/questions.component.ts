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
  public yourAnswerText: string = "";
  public answerText: string = "";
  public tooltipText: string = "";
  public maxNumberOfQuestion: number = 4;
  public questionsNumbers: any = [];
  public questionExist: boolean = false;
  public questionNumber: number = 1
  public questionsCorrect: number = 0

  isVisibleYourAnswerInput: any;
  isVisibleYourAnswerAko: any;
  isVisibleAnswerAko: any;
  isVisibleTooltipAko: any;
  isVisibleCorrectButton: any;
  isVisibleNextButton: any;
  isVisibleCheckButton: any;

  constructor(private qustionService: QustionService) {
  }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.findQuestion();
    this.isVisibleAnswerAko = false;
    this.isVisibleYourAnswerInput = true;
    this.isVisibleCorrectButton = false;
    this.isVisibleNextButton = false;
    this.isVisibleCheckButton = true;
  }

  getAllQuestions() {
    for (let i = 0; i < this.maxNumberOfQuestion + 1; i++) {
      this.questionsNumbers?.push(i);
    }
  }

  setQuestionData() {
    this.qustionService.getQuesionJson()
      .subscribe(res => {
        this.questionText = res.questions[this.randNum].questionText
        this.answerText = res.questions[this.randNum].answerText
      })
  }

  loadAnswer() {
    this.yourAnswerText = (<HTMLInputElement>document.getElementById("idTextareaYourAnswer")).value
    this.isVisibleYourAnswerInput = false;
    this.isVisibleAnswerAko = true;
    this.isVisibleYourAnswerAko = true;
    this.isVisibleCorrectButton = true;
    this.isVisibleNextButton = true;
    this.isVisibleCheckButton = false;
  }

  CorrectAnswer(){
    this.questionsCorrect++;
    this.nextQuestion()
  }

  nextQuestion() {
    this.questionNumber++;
    this.findQuestion()
    this.isVisibleAnswerAko = false;
    this.isVisibleYourAnswerInput = true;
    this.isVisibleYourAnswerAko = false;
    this.isVisibleCorrectButton = false;
    this.isVisibleNextButton = false;
    this.isVisibleCheckButton = true;
  }

  findQuestion() {
    this.questionExist = false;
    this.randNum = Math.floor(Math.random() * (this.maxNumberOfQuestion + 1));
    if (this.questionsNumbers.length == 0) {
      const nextButton = <HTMLInputElement>document.getElementById("nextQuestion");
      nextButton.disabled = true;
    }
    while (!this.questionExist) {
      if (this.questionsNumbers?.includes(this.randNum)) {
        this.questionExist = true;
        this.setQuestionData()
        this.questionsNumbers.splice(this.questionsNumbers.indexOf(this.randNum), 1)
      } else {
        this.questionExist = false;
        this.randNum = Math.floor(Math.random() * (this.maxNumberOfQuestion + 1));
      }
    }
  }
}
