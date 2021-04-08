import './App.css';
import FormNum from './FormNum';
import FormJson from './FormJson';
import Calc from './Calc';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      oneForm: '',
      textTwo: 'нет',
      textThree: 'мб',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChangeFormJson = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <FormJson one={this.state.oneForm} onHandler={this.handleChange} /> Почему в строку
          первого импута невозможно ничего ввести?
          <FormNum number={this.state.number} onHandlerChange={this.handleChange} />
          <Calc number={this.state.number} />
        </div>
      </div>
    );
  }
}

export default App;
