import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
  const questionList = [
    {
      id: 1,
      title: 'How to check if a key is present in the Hash?',
      tag: "Ruby"
    },
    {
      id: 2,
      title: 'What is the difference between `map` and `collect` in Ruby?',
      tag: "Ruby"
    },
    {
      id: 3,
      title: 'How do you convert a string to a symbol in Ruby?',
      tag: "Ruby"
    },
    {
      id: 4,
      title: 'What are Ruby blocks, procs, and lambdas?',
      tag: "Ruby"
    },
    {
      id: 5,
      title: 'How can you handle exceptions in Ruby?',
      tag: "Ruby"
    },
    {
      id: 6,
      title: 'What is the purpose of the `self` keyword in Ruby?',
      tag: "Ruby"
    },
    {
      id: 7,
      title: 'How do you define a class in Ruby?',
      tag: "Ruby"
    },
    {
      id: 8,
      title: 'What is the use of the `attr_accessor` method in Ruby?',
      tag: "Ruby"
    },
    {
      id: 9,
      title: 'How can you iterate over a hash in Ruby?',
      tag: "Ruby"
    },
    {
      id: 10,
      title: 'What are Ruby modules and how are they used?',
      tag: "Ruby"
    }
  ];
  
  return(
    <div className="row">
      <div className="col-lg-10 max-auto">
        {questionList.map((question) => 
          <QuestionDetail question={question} key={question.id} />
        )}
      </div>
    </div>
  )
}

export default QuestionList