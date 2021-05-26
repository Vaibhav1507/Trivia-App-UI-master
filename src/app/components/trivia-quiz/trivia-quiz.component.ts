import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TriviaQuestions } from 'src/app/models/trivia-questions';
import { TriviaQuizService } from 'src/app/shared/trivia-quiz.service';

@Component({
  selector: 'app-trivia-quiz',
  templateUrl: './trivia-quiz.component.html',
  styleUrls: ['./trivia-quiz.component.scss']
})
export class TriviaQuizComponent implements OnInit {

  triviaQuestionList: TriviaQuestions[];
  questionNumberInProgress: number;
  quizCompleted: boolean;

  constructor(private router: Router, private triviaQuizService: TriviaQuizService, private toastr: ToastrService) {
    this.triviaQuestionList = [];
    this.questionNumberInProgress = 0;
    this.quizCompleted = false;
  }

  ngOnInit() {
    this.triviaQuizService.getQuizQuestions().subscribe(res => {
      this.triviaQuestionList = res;
      this.shuffleOptions();
    },
      error => {
        this.toastr.error("Something went wrong please check console for more details");
        console.log(error);
      });
  }

  shuffleOptions() {
    try {
      this.triviaQuestionList.forEach((question) => {
        question.options = [...question.incorrect_answers, question.correct_answer]
      })
  
      this.triviaQuestionList.forEach(q => q.options = q.options.sort(() => Math.random() - 0.5));
    } catch (error) {
      this.toastr.error("Something went wrong please check console for more details");
      console.log(error);
    }
  }

  onOptionSelected(option: string) {
    try {
      this.triviaQuestionList[this.questionNumberInProgress].selectedOption = option;
      if (this.questionNumberInProgress < this.triviaQuestionList.length - 1) {
        this.questionNumberInProgress++;
      }
      else {
        this.quizCompleted = true;
      }
    } catch (error) {
      this.toastr.error("Something went wrong please check console for more details");
      console.log(error);
    }
  }

  onRetakeQuizButtonClick() {
    try {
      this.quizCompleted = false;
      this.questionNumberInProgress = 0;
      this.triviaQuestionList = [];
      this.ngOnInit();
    } catch (error) {
      this.toastr.error("Something went wrong please check console for more details");
      console.log(error);
    }
  }
}
