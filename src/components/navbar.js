import React, { Component } from 'react';
import Navitem from './navitem';





class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavitemActive':''
        }
    }
    activeitem=(x)=>{
        if(this.state.NavitemId.length>0)
        {document.getElementById(this.state.NavitemActive).classList.remove('active');}
        this.setState({'NavitemActive':x},() =>{
            document.getElementById(this.state.NavitemActive).classList.add('active');
        });
    }
    render(){
        return (
            <nav>
                <ul>
                    {/* item holds the props navigation  items */}
                    {/* tolink holds navigation routs */}
                    <Navitem item="Home" tolink='/' activec={this.activeitem}> </Navitem>
                    <Navitem item="About" tolink='/about' activec={this.activeitem}> </Navitem>
                    <Navitem item="Education" tolink='/education' activec={this.activeitem}> </Navitem>
                    <Navitem item="Skills" tolink='/skills' activec={this.activeitem}> </Navitem>
                    <Navitem item="Contect" tolink='/contact' activec={this.activeitem}> </Navitem>
                </ul>
            </nav>
        )
    }
}


export default Navbar