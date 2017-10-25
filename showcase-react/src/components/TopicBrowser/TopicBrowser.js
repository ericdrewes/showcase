import React, { Component } from 'react';

import EvenAndOdd from './EvenAndOdd';
import FilterObject from './FilterObject';
import FilterString from './FilterString';
import Palindrome from './Palindrome';
import Sum from './Sum';

export default class TopicBrowser extends Component {
  render() {
    return(
      <div>
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
      </div>
    )
  }
}

export default TopicBrowser;
