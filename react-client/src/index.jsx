import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Form, Radio, Textarea } from 'react-form';
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

  submitForm() {
    console.log('someone submitted....')
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
      <form onSubmit={submitForm}>

        <div>
          <h2>Full Name</h2>
          <Text field='name' placeholder='Your name'/>
        </div>
        
      </form>
      <Gallery data={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
      
      // {<RadioGroup onChange={ this.onChange } horizontal>
      //   <RadioButton value="happy">
      //   Happy
      //   </RadioButton>
      //    <RadioButton value="happy">
      //   Sad
      //   </RadioButton>
      // </RadioGroup>
      // <NameInput/>}