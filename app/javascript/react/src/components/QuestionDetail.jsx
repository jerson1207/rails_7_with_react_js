import * as React from 'react'
import * as ReactDOM from 'react-dom'

class  QuestionDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      likeCount: this.props.question.likes_count,
      dislikeCount: this.props.question.dislikes_count
    }

    this.updateLikeCounter = this.updateLikeCounter.bind(this)
    this.updateDislikeCounter = this.updateDislikeCounter.bind(this)
  }

  updateLikeCounter() {
    this.setState(function(state) {
      return {
        likeCount: state.likeCount + 1
      }
    })
    this.updateQuestionCounter({count_for: 'Like'})
  }

  updateDislikeCounter() {
    this.setState(function(state) {
      return {
        dislikeCount: state.dislikeCount + 1
      }
    })
    this.updateQuestionCounter({count_for: 'Dislike'})
  }

  updateQuestionCounter = (data) => {
    fetch(`http://localhost:3000/api/v1/questions/${this.props.question.id}/update_counter`, { // Use backticks for string interpolation
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  render() {
    return(
      <div className="card rounded-0 mt-3">
        <div className="card-body">
          <h3 className="card-title">{this.props.question.title}</h3>
          <div className="lead">
            <p  className="badge bg-primary" >
              {this.props.question.tag}
            </p>
          </div>    
          <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCounter}>
            Like 
            { this.state.likeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.likeCount}</span> : ''
            }
          </button>

          <button type="button" className="btn btn-primary position-relative ms-3" onClick={this.updateDislikeCounter}>
            Dislike 
            { this.state.dislikeCount > 0 ?
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.state.dislikeCount}</span> : ''
            }
          </button>
        </div>
      </div>
    )
  }  
}

export default QuestionDetail