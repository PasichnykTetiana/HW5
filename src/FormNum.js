import React from 'react';

export default class FormNum extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label>Number</label>
          <input
            type="number"
            name="number"
            value={this.props.number}
            onChange={this.props.onHandlerChange}
          />
        </div>
      </form>
    );
  }
}
