import React from 'react';
import ReactDom from 'react-dom';
import '../Mystyle/Homestyle.css';

class Home extends React.Component{
    render(){
        return(
            <h1 className='Homestyle'>Welcome to Home Page.</h1>
        );
    }
}

export default Home;