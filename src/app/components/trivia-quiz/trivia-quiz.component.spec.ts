import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { TriviaQuizService } from 'src/app/shared/trivia-quiz.service';

import { TriviaQuizComponent } from './trivia-quiz.component';

describe('TriviaQuizComponent', () => {
  let component: TriviaQuizComponent;
  let fixture: ComponentFixture<TriviaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [TriviaQuizService],
      declarations: [ TriviaQuizComponent ]
    })
    .compileComponents();
  });



  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have quiz completed as false', () => {
    const service = fixture.componentInstance;
    expect(service.quizCompleted).toEqual(false);
  })

  it('should have function ngOnInit', () => {
    const service = fixture.componentInstance;
    expect(service.ngOnInit).toBeTruthy();
  })

  it('should have function shuffleOptions', () => {
    const service = fixture.componentInstance;
    expect(service.shuffleOptions).toBeTruthy();
  })

  it('should have function onOptionSelected', () => {
    const service = fixture.componentInstance;
    expect(service.onOptionSelected).toBeTruthy();
  })

  it('should have function onRetakeQuizButtonClick', () => {
    const service = fixture.componentInstance;
    expect(service.onRetakeQuizButtonClick).toBeTruthy();
  })
});
