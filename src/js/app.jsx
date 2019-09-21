import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rate: 0,
      balance: 0,
      term: 0,
      submit: 0,
    }
    this.handleInputChange=this.handleInputChange.bind(this);
    this.calculate=this.calculate.bind(this);
  }

  handleInputChange (e) {
    this.setState({ [e.target.name] : e.target.value});
  }

  calculate (e) {
    let balance=Number(this.state.balance);
    let rate=Number(this.state.rate);
    let term=Number(this.state.term);
    let monthlyPayment = ((balance*(rate/100)+balance)/(12*term)).toFixed(2);
    this.setState({[e.target.name]: monthlyPayment})
  }

  render() {
    return (
      <div className='container'>
        <div class="form-group">
          <label className="col-sm-2 control-label">Mortgage Balance</label>
          <input name='balance' type ='number' value={this.state.balance} onChange={this.handleInputChange}></input>
          <label className="col-sm-2 control-label">Mortgage Rate</label>
          <input name ='rate' type='number' step='0.01' value={this.state.rate} onChange={this.handleInputChange}></input>
          <select name='term' value={this.state.term} onChange={this.handleInputChange}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <button name='submit' value={this.state.submit} onChange={this.handleInputChange} onClick={this.calculate}>Submit</button>
        </div>
        <div name='output' id='output'>
          {this.state.submit} is your payment.
        </div>
      </div>
    );
  }
}
