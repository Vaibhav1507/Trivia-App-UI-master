import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TriviaQuestions } from '../models/trivia-questions';

@Injectable({
    providedIn: 'root'
})
export class TriviaQuizService{
    //-------properties-----------
    readonly rootUrl = "https://localhost:44336";

    //-------helper methods-------
    constructor(private httpClient : HttpClient){}

    //------Http methods---------

    getQuizQuestions(){
        return this.httpClient.get<TriviaQuestions[]>(this.rootUrl + '/api/trivia');
    }
}