import React from 'react';
import Illustration from '../images/illustration/message.svg';

const Home = () => {
    return (
        <div className="bg-blue-100">
            <div className="grid grid-cols-2 gap-4 justify-items-center ">
                <div className="p-10">
                    <h1 className="font-extrabold leading-tight text-7xl">Welcome<br/>To<br/>Skybox.</h1>
                </div>
                <div className="">
                <img src={Illustration} alt="register" className="h-5/6 mt-10 pr-36"/>
                </div>
            </div>
        </div>
    )
}

export default Home
