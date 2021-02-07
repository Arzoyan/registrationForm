import React from 'react';


const Home = (props) => {
    return (
        <div>
            HOME PAGE
            <div
                style={{ cursor: 'pointer', }}
                onClick={() => {
                    props.history.push("/login")
                    window.localStorage.clear();
                }}
            >
                Log Out
            </div>
        </div>

    )
}

export default Home;