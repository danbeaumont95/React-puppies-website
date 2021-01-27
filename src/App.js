import "./App.css";
import React from 'react';
import Title from './Components/Title'
import PuppyList from './Components/PuppyList'

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
puppiesAreVisible: true,
user: 'Dan',
  };
  render() {
    return (
      <div className="App">
        <Title user={this.state.user} />
        <button onClick={this.handleClick}>toggle puppies</button>
        <PuppyList puppies={this.state.puppies} puppiesAreVisible={this.state.puppiesAreVisible} />
      </div>
    );
  }
handleClick = () => {
  //directly mutating state is bad!
  //this.state.puppiesAreVisible = !this.state.puppiesAreVisible;

  this.setState((currentState) => {
    return {puppiesAreVisible: !currentState.puppiesAreVisible}
  })
};

}




export default App;
