import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TriviaQuestions } from '../models/trivia-questions';

import { TriviaQuizService } from './trivia-quiz.service';

describe('TriviaQuizService', () => {
  let service: TriviaQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [TriviaQuizService]
    });
  });

  beforeEach(() => {
    service = TestBed.inject(TriviaQuizService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of questions'), () => {
    let mockResponse: TriviaQuestions[] = [
      {
        category: 'Entertainment: Film',
        type: 'multiple',
        difficulty: 'medium',
        question: 'In the 1984 movie &quot;The Terminator&quot;…minator portrayed by Arnold Schwarzenegger?',
        correct_answer: 'T-800',
        incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"],
        options: [],
        selectedOption: ''
      },
      {
        category: 'Film',
        type: 'multiple',
        difficulty: 'medium',
        question: ' portrayed by Arnold Schwarzenegger?',
        correct_answer: 'T-800',
        incorrect_answers: ["Dr. Julius No", "Rosa Klebb", "Emilio Largo"],
        options: [],
        selectedOption: ''
      }
    ]

    service.getQuizQuestions().subscribe(res => expect(mockResponse).toBe(res, 'should check mock data'));
  }
});
