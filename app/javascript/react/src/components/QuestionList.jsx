import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {
  const questionList = [
    {
      title: 'How to check if a key is present in the Hash?',
      tag: "Ruby"
    },
    {
      title: 'What is the difference between `map` and `collect` in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'How do you convert a string to a symbol in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'What are Ruby blocks, procs, and lambdas?',
      tag: "Ruby"
    },
    {
      title: 'How can you handle exceptions in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'What is the purpose of the `self` keyword in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'How do you define a class in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'What is the use of the `attr_accessor` method in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'How can you iterate over a hash in Ruby?',
      tag: "Ruby"
    },
    {
      title: 'What are Ruby modules and how are they used?',
      tag: "Ruby"
    }
  ];
  
  return(
    <div className="row">
      <div className="col-lg-10 max-auto">
        {questionList.map((question) => 
          <div className="card rounded-0 mt-3">
            <div className="card-body">
              <h3 className="card-title">{question.title}</h3>
              <p className="lead">
                <div className="badge bg-primary">{question.tag}</div>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList