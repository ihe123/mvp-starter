import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx';
import MoodClick from './components/MoodClick.jsx';
import Name from './components/Name.jsx';
import cuteData from './components/cuteData.jsx';
import motivData from './components/motivData.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'',
      mood:'',
      items: []
    }
    this.submitForm = this.submitForm.bind(this);
    this.changeName = this.changeName.bind(this);
    this.radioSubmit = this.radioSubmit.bind(this);
  }

  submitForm() {
    console.log("this form has been clicked!!!!");
    var obj = {
      mood: this.state.mood,
      name: this.state.name
    };

    //re-render the page
    if (this.state.mood === 'happy'){
      this.setState({
        items: motivData.data
      })
    } else {
        this.setState({
         items: cuteData.data
        })
    }

    $.ajax({
      type: "POST",
      url: '/submitted',
      data: obj,
      success: (data) => {
        console.log("sucesssss")
      }
    })
  }

  radioSubmit(e) {
    console.log('state mood', this.state.mood)
    this.state.mood = e.target.value; 
    console.log('mooooood', this.state.mood);
  }

  changeName(e) {

    console.log('changing the name');
    this.state.name = e.target.value;
    console.log('nameeee', this.state.name);
  }

  componentDidMount() {
    console.log(cuteData.data);
    this.setState({
      items: cuteData.data
    })
    // $.ajax({
    //   type: "POST",
    //   url: '/items', 
    //   success: (data) => {
    //       console.log('sucessssss', data)
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('errrrrrrrrr', err);
    //   }
    // });
  }

  


   
  render (props) {
    return (<div>
      <h1>What is your mood right now?</h1>
      <MoodClick radio={this.radioSubmit}/>
      <Name changeName={this.changeName} submit={this.submitForm}/>
      <Gallery data={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
      
          // {<div>
          //           <h2>Full Name</h2>
          //           <Text field='name' placeholder='Your name'/>
          //   </div>}
      // {<RadioGroup onChange={ this.onChange } horizontal>
      //   <RadioButton value="happy">
      //   Happy
      //   </RadioButton>
      //    <RadioButton value="happy">
      //   Sad
      //   </RadioButton>
      // </RadioGroup>
      // <NameInput/>}