import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../style/index.css';
import MemeItem from '../component/meme';
import { EXPORT_MEMES } from '../action';
import {Form ,FormControl , FormGroup,ControlLabel} from 'react-bootstrap';
import Mymemes from '../component/mymemes';

 class App extends Component {
   constructor(){
     super();
     this.state={
       memeLinmit:10,
       text0: '',
       text1 :''
     }
   }
  render() {
    return (
      <div className="App">
        <h2><u> Welcome to meme generator</u> </h2>
        <h4><i>Write some text</i></h4>
        <Mymemes/>
        <Form inline>
        <FormGroup>
          <ControlLabel>Top</ControlLabel>
          { ' '}
     
              <FormControl
                   type="text"
                   onChange={event =>this.setState({text0: event.target.value})}
                >

               </FormControl>
               { '  '}
           
           </FormGroup>
           <FormGroup>
          <ControlLabel>Bottom</ControlLabel>
          { ' '}
     
              <FormControl
                   type="text"
                   onChange={event =>this.setState({text1:event.target.value})}

                >

               </FormControl>
           
           </FormGroup>
        </Form>
        {
          this.props.memes.slice(0,this.state.memeLinmit).map((meme,index)=>{
            return(
             <MemeItem key={index} memes={meme}
             
             text0={this.state.text0}
             text1={this.state.text1}/>
            );
          })
        }
        <div className="meme-button" onClick={()=>{
          this.setState({memeLinmit:this.state.memeLinmit+10})
        }}>Load 10 more memes</div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    memes:state.memes
  };
  
}
export default connect (mapStateToProps,null)(App)
