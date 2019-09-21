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
  }
  render() {
    return (
      <div className='container'>
        <div class="form-group">
          <input name='balance' type ='number' value={this.state.balance}></input>
          <input name ='rate' type='number' step='0.01' value={this.state.rate}></input>
          <select name='term' value={this.state.term}>
            <option value='15'>15</option>
            <option value='30'>30</option>
          </select>
          <button name='submit' value={this.state.submit}>Submit</button>
        </div>
        <div name='output' id='output'>

        </div>
      </div>
    );
  }
}
