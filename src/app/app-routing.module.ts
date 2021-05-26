import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriviaQuizComponent } from './components/trivia-quiz/trivia-quiz.component';

const routes: Routes = [
  {
    path: '',
    component: TriviaQuizComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
