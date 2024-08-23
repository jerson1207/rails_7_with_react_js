import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
  const [questionsList, setQuestionList] = useState([])
  const questionsUrl = 'http://localhost:3000/api/v1/questions'

  const fetchQuestionList = () => {
    fetch (questionsUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setQuestionList(data)
      })
  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  return(
    <div className="row">
      <div className="col-lg-10 max-auto">
        {questionsList.map((question) => 
          <QuestionDetail question={question} key={question.id} />
        )}
      </div>
    </div>
  )
}

export default QuestionList