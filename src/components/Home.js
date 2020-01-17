import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';


const INITIAL_STATE = {
    atletasCadastrados: []
}

class Home extends React.Component {

    
  
  constructor(props){
       super(props);
       this.state = {...INITIAL_STATE};
  }

  componentDidMount(){
    // Verificando se o navegador contem o atributo mediaDevices e getUserMedia
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            console.log("midia ok")
            
            const params = {
                audio: true, // acessar audio
                video: true  // acessar video
            };
            
            navigator.mediaDevices.getUserMedia(params)
            .then(stream => console.log(stream));
        } else {
            alert('Este navegador não suporta esta ação!');
        }
    }
    
    
  render() {
    return (
        <Camera/>
    );
  }
}

export default Home;