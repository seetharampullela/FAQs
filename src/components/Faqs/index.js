// Write your code here.
// import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  //   state = {isClicked: true}

  //   getSameId = () => {
  //     const {faqsList, id} = this.props
  //     faqsList.map(each => {
  //       const idSame = each.id === id
  //       return idSame
  //     })
  //   }

  //   displayAnswer = id => {
  //     this.setState(prevState => ({
  //       isClicked: !prevState.isClicked,
  //     }))
  //   }
  const {faqsList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">FAQs</h1>
      <div className="inner-container">
        <ul className="list-container">
          {faqsList.map(eachFaq => (
            <FaqItem faqItem={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
