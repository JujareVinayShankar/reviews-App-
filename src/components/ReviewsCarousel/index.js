// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentReviewIndex: 0,
  }

  onClickLeftButton = () => {
    const {currentReviewIndex} = this.state
    if (currentReviewIndex > 0) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex - 1,
      }))
    }
  }

  onClickRightButton = () => {
    const {currentReviewIndex} = this.state
    const {reviewsList} = this.props
    if (currentReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReviewIndex: prevState.currentReviewIndex + 1,
      }))
    }
  }

  imageDisplay = currentReview => {
    const {imgUrl, username, companyName, description} = currentReview
    return (
      <>
        <img src={imgUrl} alt={username} className="image" />
        <p className="profile-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="company-description">{description}</p>
      </>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {currentReviewIndex} = this.state
    const currentReview = reviewsList[currentReviewIndex]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="content-container">
          <div className="left-button_container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLeftButton}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          <div className="image-container">
            {this.imageDisplay(currentReview)}
          </div>
          <div className="right-button_container">
            <button
              type="button"
              className="button"
              onClick={this.onClickRightButton}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
