import React from 'react';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      luckyNumber: Math.floor(Math.random() * 100) + 1
    };
  }

  newLuckyNumber = () => {
    this.setState({
      luckyNumber: Math.floor(Math.random() * 100) + 1
    });
  };

  render() {
    const { name, job } = this.props;
    const { luckyNumber } = this.state;

    return (
      <div>
        <h2>Name: {name}</h2>
        <h3>Profession: {job}</h3>
        <p>Your lucky number is: {luckyNumber}</p>
        <button onClick={this.newLuckyNumber}>
          Generate New Lucky Number
        </button>
      </div>
    );
  }
}

export default UserInfo;
