// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isClicked: true}

  onClickDisplayAnswer = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    const {faqItem} = this.props
    const {id, questionText, answerText} = faqItem

    const imgUrl = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const altName = isClicked ? 'plus' : 'minus'

    return (
      <li className="list-item">
        <div className="question-button">
          <h1 className="heading-question">{questionText}</h1>
          <button
            type="button"
            onClick={this.onClickDisplayAnswer}
            key={id}
            className="button-plus-minus"
          >
            <img src={imgUrl} alt={altName} />
          </button>
        </div>
        {!isClicked && <p className="answer-para">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
