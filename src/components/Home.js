import React from 'react';
import Illustration from '../images/illustration/message.svg';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <div className="bg-blue-100 text-center mx:auto p-20">
            <h1 className="font-extrabold leading-tight text-9xl mb-20">Welcome To<br/>Skybox.</h1>
                
            <Link to="./login" className="p-4 pl-12 pr-12 bg-blue-400 text-2xl">Start Chatting!</Link>
        </div>
    )
}

export default Home
