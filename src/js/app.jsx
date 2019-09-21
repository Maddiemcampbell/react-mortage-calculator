import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rate: 0,
      balance: 0,
      term: 15,
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
        
        <h3>Mortgage Calculator</h3>
        <form className="form-horizontal">

          <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="exampleInputName2">Mortgage Balance</label>
            <div className="col-sm-10">
              <input name='balance' className="form-control" type ='number' value={this.state.balance} onChange={this.handleInputChange}></input>
            </div>
          </div>

          <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="exampleInputName2">Mortgage Rate</label>
            <div className="col-sm-10">
              <input name ='rate' className="form-control" type='number' step='0.01' value={this.state.rate} onChange={this.handleInputChange}></input>
            </div>
          </div>

          <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="exampleInputName2">Term (years)</label>
            <div className="col-sm-offset-2 col-sm-10">
              <select className="form-control" name='term' value={this.state.term} onChange={this.handleInputChange}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          </form>
          
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button name='submit' className="btn btn-default" onClick={this.calculate}>Calculate</button>
            </div>
          </div>
       
          <div id='output' name='output'> ${this.state.submit} is your payment. </div> 
          
        </div>
    );
  }
}
