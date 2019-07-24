import React from 'react';
import './ListItem.scss';
import peso from '../../../assets/images/peso.png';
import { convertTime } from '../../../helpers';

export default class extends React.PureComponent {
  renderInfo(description, icon) {
      return (
        <div>
          <i className={icon}/>
          {description}
        </div>
      );
  }

  renderSalary(salary) {
    salary = `${Math.round(salary / 1000)}k`;
    return (
      <React.Fragment>
        <img src={peso} alt='peso'/> {salary}
      </React.Fragment>
    );
  }

  render() {
    const {
      job_title,
      salary_range_from,
      salary_range_to,
      company_location,
      xp_lvl,
      degree,
      job_type,
      company_name,
      created_at,
      updated_at,
      company_logo
    } = this.props;

    return (
      <li className='ListItem'>

        <div className='row'>
          <div className='right title'>
            {job_title}
          </div>

          <div className='left salary'>
            {this.renderSalary(salary_range_from)} - {this.renderSalary(salary_range_to)}
          </div>
        </div>

        <div className='row'>
          <div className='right info'>
            {this.renderInfo(company_location, 'fas fa-map-marker-alt')}
              {this.renderInfo(xp_lvl, 'fas fa-briefcase')}
              {this.renderInfo(degree, 'fas fa-graduation-cap')}
              {this.renderInfo(job_type, 'far fa-clock')}
          </div>
        </div>

        <div className='row'>
          <div className='right company'>
            <img
              src={company_logo}
              alt='company logo'
            />
            <h5>{company_name}</h5>            
          </div>

          <div className='left time'>
            {convertTime(updated_at || created_at)}
          </div>
        </div>
      </li>
    );
  }
}