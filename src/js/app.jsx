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
  }

  handleInputChange (e) {
    this.setState({ [e.target.name] : e.target.value});
  }

  render() {
    return (
      <div className='container'>
        <div class="form-group">
          <input name='balance' type ='number' value={this.state.balance} onChange={this.handleInputChange}></input>
          <input name ='rate' type='number' step='0.01' value={this.state.rate} onChange={this.handleInputChange}></input>
          <select name='term' value={this.state.term} onChange={this.handleInputChange}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <button name='submit' value={this.state.submit} onChange={this.handleInputChange}>Submit</button>
        </div>
        <div name='output' id='output'>

        </div>
      </div>
    );
  }
}
