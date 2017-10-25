import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
      names: ['Greg', 'Joe', 'Jon', 'Kris', 'Anthony'],
      userInput: '',
      filteredNames: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(prop) {
    var names = this.state.names;
    var filteredNames = [];

    for ( var i = 0; i < names.length; i++ ) {
      if ( names[i].includes(this.state.userInput) ) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4> Filter String </h4>
        <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) } />
        <button className='confirmationButton' onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className='puzzleText'> Original: { JSON.stringify(this.state.names, null, 10) } </span>
        <span className='resultsBox filterStringRB'> Filtered: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
}
