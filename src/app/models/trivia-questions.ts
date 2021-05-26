export interface TriviaQuestions {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    options:string[];
    selectedOption:string;
}
