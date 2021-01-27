import "./App.css";
import React from 'react';
import Title from './Components/Title'
import PuppyList from './Components/PuppyList'
import KittenList from './Components/KittenList'
import TC from '/home/danbeaumont95/Documents/NorthCoders/Week-9-Front-end/Day-3/Code/react-intro/src/TC.jpg'
import Benny from '/home/danbeaumont95/Documents/NorthCoders/Week-9-Front-end/Day-3/Code/react-intro/src/Benny.jpg'

//render everything onto page (DOM)
//click => boolean
//changing of puppiesAreVisible => rerender

class App extends React.Component {
  //state
  state = {
    puppies : [
  {
    name: "Pat",
    img:
      "https://i.pinimg.com/originals/39/6f/14/396f14bd9c68652906500047d677356c.jpg",
      cuteness: 10,
  },
  {
    name: "Dexter",
    img:
      "https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg",
      cuteness: 9,
  },
  {
    name: "Clifford",
    img:
      "http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",
      cuteness: 8,
  },
  {
    name: "Deno",
    img:
      "http://cdn.akc.org/content/article-body-image/beagle2_cute_puppies.jpg",
      cuteness: 8,
  },
],
kittens: [
  {
    name: 'TC',
    img: TC,
    cuteness: 10,
  },
  {
    name: 'Benny',
    img: Benny,
    cuteness: 10,
  },
],
puppiesAreVisible: true,
kittensAreVisible: true,
user: 'Dan',
  };
  render() {
    return (
      <div className="App">
        <Title user={this.state.user} />
        <button onClick={this.handleConsole}>Click here!</button>
        <br></br>
        <br></br>
        <button onClick={this.handleClick}>toggle puppies</button>
        <button onClick={this.handleKitties}>Toggle kitties</button>

        <PuppyList puppies={this.state.puppies} puppiesAreVisible={this.state.puppiesAreVisible} />
        <KittenList kittens={this.state.kittens} kittensAreVisible={this.state.kittensAreVisible} />
      </div>
    );
  }
handleClick = () => {

  this.setState((currentState) => {
    return {puppiesAreVisible: !currentState.puppiesAreVisible}
  })
};
handleConsole = () => {
  this.setState((currentState) => {
    console.log(`Hi ${this.state.user}`)
  })
}
handleKitties = () => {
  this.setState((currentState) => {
    return {kittensAreVisible: !currentState.kittensAreVisible}
  })
}

}




export default App;
