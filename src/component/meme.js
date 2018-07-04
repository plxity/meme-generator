import React from'react';
import {connect} from 'react-redux';
import {createMeme} from '../action/index';

class MemeItem extends React.Component{
    constructor(){
        super();
        this.state={
            hovered:false
        }
    }
    postnew(){
        console.log(this.props);
        const {text0 ,text1}=this.props;
        const memeObj ={
            template_id:this.props.memes.id,
            text0,
            text1
        }
        this.props.createMeme(memeObj);
    }
    render(){
        return(
            <div
                onMouseEnter={()=>this.setState({hovered:true})}
                onMouseLeave={()=>this.setState({hovered:false})}
             className="meme-item"
                     onClick={()=>this.postnew()}
             >
                <img className={this.state.hovered? "meme-img darken-img": "meme-img"}
                src={this.props.memes.url}
                alt={this.props.memes.name}/>
            <p className={this.state.hovered ? "meme-text" :"no-txt"}>
            {this.props.memes.name}    
            </p>
            
            </div>
        );
    }
}

export default connect(null,{createMeme})( MemeItem);