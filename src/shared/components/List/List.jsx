import React from 'react';
import { connect } from 'react-redux';
import './List.scss';
import { fetchJobs } from '../../../redux/actions';
import ListItem from '../ListItem';

class List extends React.Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const { query, page } = this.props;
    if (query !== prevProps.query || page !== prevProps.page) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { query, page, fetchJobs } = this.props;
    fetchJobs(query, page);
  }

  renderCount() {
    const { total } = this.props;
    const text = total ? `${total} jobs found` : 'No job found';

    return (
      <li>
        <h4>{text}</h4>
      </li>
    );
  }

  renderList() {
    const { list } = this.props;

    return list.map(job => <ListItem
      key={job.id}
      {...job}
    />);
  }

  render() {
    const { error } = this.props;

    if (error) {
      return (
        <ul className='List'>
          <h4 className='error'>Something went wrong!</h4>
        </ul>
      );
    }

    return (
      <ul className='List'>
        {this.renderCount()}
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    search: { query, page },
    jobs: { error, list, total }
  } = state;
  return { query, page, error, list, total };
}

export default connect(
  mapStateToProps,
  {
    fetchJobs
  }
)(List);