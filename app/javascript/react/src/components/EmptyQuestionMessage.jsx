import * as React from 'react'
import * as ReactDOM from 'react-dom'

const EmptyQuestionMessage = (props) => {
  return(
    <div className="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>OOPs!</strong> No Question Found in the tag {props.tagname}.
      Please select another option from the list.
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default EmptyQuestionMessage;