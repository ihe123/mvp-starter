import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      type: "POST",
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('errrrrrrrrr', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>What is your mood today?</h1>
      <form><input type="radio" value="happy"></input></form>
      <form><input type="radio" value="happy"></input></form>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
      