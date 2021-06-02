import React from 'react';

export default function Dashboard() {
    function handleLogout() {

    }
    return (
        <>
            

            <div className="bg-green-100 p-10 mx:auto">
                
                <h1 className="text-3xl font-bold mx:auto">Profile</h1>
                <button onClick={handleLogout} className="bg-green-500 p-3 pl-5 pr-5 float-right mx:auto relative">Logout</button>
            </div>
        </>
    )
}
