import React from 'react';
import './Spinner.scss';
import { Fade } from '../../../transition';

export default class extends React.PureComponent {
  render() {
    const {
        inProp,
        hideBackground
    } = this.props;

    return Fade({ in: inProp }, style => {
        const className = `SpinnerLoader ${hideBackground ? 'hide-background': ''} `
        return (
            <div
                className={className}
                style={style}
            >
                <div className='inner'>
                    <div className='spinner'>
                        <div className='inner'/>
                    </div>
                </div>
            </div>
        );
    });
  }
}