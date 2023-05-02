import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onChang = e => {
    this.setState({count: e.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <div className="text-con">
            <h1>Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="letter">Enter the phrase</label>

              <br />
              <input
                type="text"
                id="letter"
                className="typing"
                placeholder="Enter the phrase"
                onChange={this.onChang}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://learning.ccbp.in/question/9264e426-7921-4065-9bab-b611050dc730"
            alt="letters calculator"
            className="letter-calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
