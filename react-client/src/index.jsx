import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import NameInput from './components/NameInput.jsx';
import Gallery from './components/Gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    console.log('someone clicked a different radio button')
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
   
  render (props) {
    console.log(this.state.items)
    return (<div>
      <h1>What is your mood right now?</h1>
      <RadioGroup onChange={ this.onChange } horizontal>
        <RadioButton value="happy">
        Happy
        </RadioButton>
         <RadioButton value="happy">
        Sad
        </RadioButton>
      </RadioGroup>
      <NameInput/>
      <Gallery data={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
      