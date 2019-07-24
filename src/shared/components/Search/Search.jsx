import React from 'react';
import { connect } from 'react-redux';
import './Search.scss';
import { setQuery } from '../../../redux/actions';

class Search extends React.Component {
  state = { input: '' }

  onInputChange = (e) => {
    return this.setState({ input: e.target.value });
  }

  onInputClick = () => {
    this.input.select();
  }

  onSubmitClick = (e) => {
    e.preventDefault();
    
    this.props.setQuery(this.state.input);
  }

  render() {
    return (
      <form className='Search'>
        <div className='input'>
          <i className='fas fa-search'/>
          <input
            ref={input => this.input = input}
            placeholder='Search for job title or company name'
            value={this.state.input}
            onChange={this.onInputChange}
            onClick={this.onInputClick}
          />
        </div>

        <button
          type='submit'
          onClick={this.onSubmitClick}
        >
          Filter results
        </button>
      </form>
    );
  }
}

export default connect(null, { setQuery })(Search);