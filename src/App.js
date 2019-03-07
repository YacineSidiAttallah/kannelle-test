import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar'
import MyForm from './components/MyForm'
import DataDisplay from './components/DataDisplay'

class App extends Component {

  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      phone:'',
      companyName:'',
      catchPhrase:'',
      correctPhrase:"Text Provenant de l'API"
    }

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(data => data.json())
    .then(data => {
      this.setState({
        name: data.name,
        email: data.email,
        phone: data.phone,
        companyName: data.company.name,
        catchPhrase: data.company.catchPhrase
      })
    })
    console.log("Data have been imported ! ")
  }




  handleSubmit(event){
    event.preventDefault()
    this.setState({
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      companyName: this.companyName.value,
      catchPhrase: this.catchPhrase.value,
      correctPhrase:"Text provenant du Formulaire"
    })
  }

  render() {

    return (

    <div>

      <MyNavBar />

      <MyForm
        name={input=> this.name = input}
        email={input=> this.email = input}
        phone={input=> this.phone = input}
        companyName={input=> this.companyName = input}
        catchPhrase={input=> this.catchPhrase = input}
        handleSubmit={this.handleSubmit.bind(this)}
      />

      <DataDisplay
         correctPhrase={this.state.correctPhrase}
         name={this.state.name}
         email={this.state.email}
         phone={this.state.phone}
         companyName={this.state.companyName}
         catchPhrase={this.state.catchPhrase}
        />

    </div>

    );
  }
}

export default App;
