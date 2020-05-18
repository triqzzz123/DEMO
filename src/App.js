import React,{Component} from 'react';

import Navigation from  './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceRecogonition from  './components/FaceRecogonition/FaceRecogonition';

import 'tachyons';
import './App.css';

/*const app = new Clarifai.App({
  apiKey: 'af4bbcfa66ef4994aa572f476e944fe4'
 });*/

const particlesoptions={
  particles: {
    number:{
      value:118,
    density:{
      enable:true,
      value_area:800
    }
        
}
}
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input:'',
      
      
    }

  }

  onInputChange=(event)=>{
    this.setState({input:event.target.value})

  }

  onButtonSubmit=()=>{
    this.setState({
      imageUrl:this.state.input
    });
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );


  }
    
  



  render(){
    return(
    <div className="App">
    <Particles className="particles" params={particlesoptions} />
    <Navigation/>
    <Logo/>
    <Rank/>
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
       <FaceRecogonition ImageUrl={this.state.imageUrl}/>
    </div>
  )
}
}

export default App;
