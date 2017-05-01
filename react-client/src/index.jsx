import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Gallery from './components/Gallery.jsx';
import MoodClick from './components/MoodClick.jsx';
import Name from './components/Name.jsx';
import cuteData from './components/cuteData.jsx';
import motivData from './components/motivData.jsx'
import SearchHistory from './components/SearchHistory.jsx';
import UserHistory from './components/UserHistory.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name:'',
      mood:'',
      subreddit: '',
      items: [],
      lookUpEntries: [],
      lookupName: ''
    }
    this.submitForm = this.submitForm.bind(this);
    this.changeName = this.changeName.bind(this);
    this.radioSubmit = this.radioSubmit.bind(this);
    this.nameSearch = this.nameSearch.bind(this);
    this.lookup = this.lookup.bind(this);
  }

  submitForm() {
    var obj = {
      name: this.state.name,
      mood: this.state.mood,
      subreddit: this.state.subreddit
    };

    $.ajax({
      type: "POST",
      url: '/items',
      data: obj,
      success: (data) => {
        console.log('should be expecting data with either buttons', data)
        this.setState({
          items: data
        })
      }
    })
  }

  radioSubmit(e) {
    console.log('state mood', this.state.mood)
    this.state.mood = e.target.value; 
    if (this.state.mood === 'happy') {
      this.state.subreddit = 'getMotivated'
    } else if (this.state.mood === 'sad') {
      this.state.subreddit = 'aww'
    }  
    console.log('mooooood', this.state.mood);
  }

  changeName(e) {
    console.log('changing the name');
    this.state.name = e.target.value;
    console.log('nameeee', this.state.name);
  }

  componentDidMount() {
    $.ajax({
      type: "POST",
      url: '/items', 
      success: (data) => {
          console.log('sucessssss', data)
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('errrrrrrrrr', err);
      }
    });
  }

  nameSearch(e) {
    this.setState({
      lookupName: e.target.value
    })
  }

  lookup() {
    var lookupObj = {
      lookupName: this.state.lookupName
    };

    $.ajax({
      type: 'POST',
      url: '/grabHistory',
      data: lookupObj,
      success: (data) => {
        this.setState({
          lookUpEntries: JSON.parse(data)
        })
      },
      error: (error)=> {
        console.log('error in grabbing data', error);
      }
    });
  }
   
  render (props) {
    return (<div>
      <h1>What is your mood right now?</h1>
      <MoodClick radio={this.radioSubmit}/>
      <Name changeName={this.changeName} submit={this.submitForm}/>
      <SearchHistory nameSearch={this.nameSearch} lookup={this.lookup}/>
      <UserHistory displayHistory={this.state.lookUpEntries}/>
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