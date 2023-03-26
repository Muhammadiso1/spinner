import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import logo from './logo.svg';

export default class App extends Component {
  state = {
   invoice1: true,
   invoice2: false,
   invoice3: false,
   invoice4: false
  }
  invoice1 = () => {
    this.setState({
   invoice1: true,
   invoice2: false,
   invoice3: false,
   invoice4: false
    })
  }
  invoice2 = () => {
    this.setState({
   invoice1: false,
   invoice2: true,
   invoice3: false,
   invoice4: false
    })
  }
  invoice3 = () => {
    this.setState({
   invoice1: false,
   invoice2: false,
   invoice3: true,
   invoice4: false
    })
  }
  invoice4 = () => {
    this.setState({
   invoice1:false,
   invoice2: false,
   invoice3: false,
   invoice4:  true
    })
  }
  render() {
    const {invoice1, invoice2, invoice3, invoice4} = this.state
    return (
      <div className='container mt-5'>
    <div className="btnnn">
    <button className='btn btn-danger' onClick={this.invoice1}>Friend 1</button>
        <button className='btn btn-success' onClick={this.invoice2}>Friend 2</button>
        <button className='btn btn-info' onClick={this.invoice3}>Friend 3</button>
        <button className='btn btn-dark' onClick={this.invoice4}>Friend 4</button>
        <img src={logo} className="App-logo" alt="logo" style={{width:'150px'}} />
    </div>
      
      {
      invoice1 ? <p><b>My first friend's name is Abdulloh Gayratxojayev. 
        </b> He's taller than me and he loves girls(JOKE) Abdulloh knows English language very much. He has an IELTS certification. It's 8.0. For this he studied so much. And we meet each other everyday.🙂</p>
      :
      invoice2 ? <p><b>Then Sultonmurod Sayfullayev.</b>He's my classmate and close friend.We call him a bodybuilder. He has big muscules.So he is king of armwrestling of our class! Sultonmurod is SIGMA. He does not like girls.😂</p>
      :
      invoice3 ? <p><b>Let's to talk about Urchinov Shuhrat.</b> He is also my close friend, he can help me in any situation and so am I. Shuhrat looks like a bear.Urchinov likes green71's songs🖤</p>
      :
      invoice4 ? <p><b>Now we will talk about my friend named Abduhakimov Akbar.</b> We rarely talk but we are close friends. He wishes me luck in everything I do and believes I can do it.💣</p>
      : <h1>hech narsa mavjud emas</h1>
      }
      </div>
    )
  }
}