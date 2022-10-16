// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  changes = () => {
    this.setState(prevState => ({
      count: Math.floor(Math.random() * 100) + prevState.count,
    }))
  }

  checkEvenOrOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const status = this.checkEvenOrOdd()

    return (
      <div className="even-odd-container">
        <div className="sub-container">
          <h1>Count {count}</h1>
          <p>Count is {status}</p>
          <button className="button" onClick={this.changes}>
            Increment
          </button>
          <p>*increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
