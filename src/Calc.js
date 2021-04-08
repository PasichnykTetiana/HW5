import React from 'react';
import PropTypes from 'prop-types';

export default class Calc extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.number === '' ? 'Умножение на 0,5 ' : (this.props.number * 0.5).toFixed(6)}
        </div>
        <div>
          {this.props.number === '' ? 'Умножение на 0,05 ' : (this.props.number * 0.5).toFixed(6)}
        </div>
      </div>
    );
  }
}

/* Calc.propTypes = {
  number: PropTypes.number,
};
 */
//export default Calc;
