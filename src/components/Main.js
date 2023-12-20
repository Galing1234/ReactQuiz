import React, { useState } from 'react' ;
import Quiz from './Quiz' ;

export default function Main() {
  const [quizStarted, setQuizStarted] = useState(false) ;

  function startQuiz() {
    setQuizStarted(true) ;
  }

  return (
    <main className="main">
      {
        quizStarted 
        ?
        <Quiz />
        :
        <>
          <h1>
            Welcome to the React quiz! <br />
            Here you would answer 15 questions about random topics. <br />
            Shall we begin?
          </h1>
          <button 
            className="main--start-button" 
            onClick={startQuiz}
          >Start!</button>
        </>
      }
    </main>
  ) ;
}