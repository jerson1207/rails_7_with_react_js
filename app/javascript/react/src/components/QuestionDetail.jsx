import * as React from 'react'
import * as ReactDOM from 'react-dom'

class  QuestionDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = { likeCount: 0 }

    this.updateLikeCounter = this.updateLikeCounter.bind(this)
  }

  updateLikeCounter() {
    this.setState(function(state) {
      return {
        likeCount: state.likeCount + 1
      }
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
          <button className="btn btn-primary mt-1" onClick={this.updateLikeCounter}>Like</button>
          { this.likeCount > 0 ?
              <span className="badge bg-primary">{this.state.likeCount}</span> : ''
            
          }
        </div>
      </div>
    )
  }  
}

export default QuestionDetail