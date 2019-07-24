import React from 'react';
import { connect } from 'react-redux';
import './Pagination.scss';
import { setPage } from '../../../redux/actions';
import { findPaginationRange } from '../../../helpers';

class Pagination extends React.Component {
  onPageClick = (num, add) => {
    const { page, pages, setPage, scroll } = this.props;
    const next = num || page + add;

    if (next < 1 || next > pages || next === page) {
      return;
    }

    setPage(next);
    scroll();
  }

  renderPage(num, index, page) {
    const className = page === num ? 'active' : '';

    if (!num) {
      return <span key={`null${index}`}>...</span>;
    }

    return (
      <button
        key={num}
        className={className}
        onClick={() => this.onPageClick(num)}
      >
        {num}
      </button>
    );
  }

  renderBack() {
    const { page } = this.props;
    const className = `next ${page > 2 ? '' : 'disable'}`;

    return (
      <button
        className={className}
        onClick={() => this.onPageClick(null, -1)}
      >
        <i className="fas fa-chevron-left"/>
      </button>
    );
  }

  renderForward() {
    const { page, pages } = this.props;
    const className = `next ${page < pages ? '' : 'disable'}`;

    return (
      <button
        className={className}
        onClick={() => this.onPageClick(null, 1)}
      >
        <i className="fas fa-chevron-right"/>
      </button>
    );    
  }

  render() {
    const { page, pages, error } = this.props;

    if (error) {
      return null;
    }

    const list = findPaginationRange(pages, page);

    return (
      <div className='Pagination'>
        {this.renderBack()}
        {list.map((num, index) => {
          return this.renderPage(num, index, page);
        })}
        {this.renderForward()}
      </div>
    );
  }
}

const mapStateFromProps = (state) => {
  const {
    search: { page },
    jobs: { pages, error },
  } = state;

  return { page, pages, error }
}

export default connect(
  mapStateFromProps,
  {
    setPage
  }
)(Pagination);