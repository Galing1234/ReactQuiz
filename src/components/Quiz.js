import React, { useState, useEffect } from 'react' ;

export default function Quiz() {
  const [gameStatus, setGameStatus] = useState('Running') ;
  const [score, setScore] = useState(0) ;
  const [questionNumber, setQuestionNumber] = useState(1) ;
  const [questions, setQuestions] = useState(
    [
      {
        question: '',
        correctAnswer: '',
        incorrectAnswers: ['', '', '']
      }
    ]
  ) ;
  const questionAnswers = questions.length > 0
  ? shuffleArray([
      questions[questionNumber - 1].correctAnswer,
      ...questions[questionNumber - 1].incorrectAnswers
    ])
  : [] ;
  console.log(questions, questions[15]) ;

  useEffect(() => {
    async function getQuestions() {
      const res = await fetch('https://the-trivia-api.com/api/questions?limit=16') ;
      const data = await res.json() ;
      setQuestions(data) ;
    }

    getQuestions() ;
  }, []) ;

  useEffect(() => {
    if (questionNumber === 16) setGameStatus('Ended') ;
  }, [questionNumber]) ;
  
  function checkAnswer(answer) {
    if (questions[questionNumber - 1].correctAnswer === answer) {
      setScore(prevScore => prevScore + 1) ;
    }

    showNextQuestion() ;
  }

  function shuffleArray(array) {
    var m = array.length, t, i ;

    while (m) {
      i = Math.floor(Math.random() * m--) ;

      t = array[m] ;
      array[m] = array[i] ;
      array[i] = t ;
    }

    return array ;
  }

  function showNextQuestion() {
    setQuestionNumber(prevQuestionNumber => prevQuestionNumber + 1) ;
  }

  return (
    <div className="quiz">
      {
        gameStatus === 'Running' 
        ?
        <>
          <h1>
            Question {questionNumber}: <br />
            <div>{questions[questionNumber - 1].question}</div>
          </h1>

          <div className="quiz--buttons">
            {questionAnswers.map((answer, index) => (
              <button key={index} onClick={() => {
                checkAnswer(answer) ;
              }}>
                <div dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            ))}
          </div>
        </> :
        <>
          <h3>
            You finished the quiz!
          </h3>
          <h1>
            Your score is {score} / 15
          </h1>
        </>
      }
      
    </div>
  ) ;
}