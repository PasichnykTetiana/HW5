import React from 'react';

export default class FormJson extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>!!!</label>
            <input name="num" value={this.props.one} onChange={this.props.onHandler} />
          </div>
        </form>
      </div>
    );
  }
}
