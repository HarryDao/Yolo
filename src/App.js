import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './shared/components/Header';
import Search from './shared/components/Search';
import List from './shared/components/List';
import Pagination from './shared/components/Pagination';
import Spinner from './shared/components/Spinner';

class App extends Component {
  scrollToTop = () => {
    window.scrollTo({ top: this.main.offsetTop, behavior: 'smooth' });
  }

  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <div
            className='main'
            ref={main => this.main = main}
          >
            <Spinner
              inProp={this.props.loading}
            />
            <Search />
            <List />
            <Pagination 
              scroll={this.scrollToTop}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { jobs: { loading } } = state;

  return { loading }
};

export default connect(mapStateToProps)(App);
