import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import CardList from "./components/Cards/CardList";
import Particles from "react-particles-js";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const particlesOptions = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
    }
}


const App = () => {
    const [route, setRoute] = useState('signin');

    const onRouteChange = (route) => {
        setRoute(route)
    }

    return (
        <div className="App">
            <Particles
                className='particles'
                params={particlesOptions}
            />

            <Navigation onRouteChange={onRouteChange}/>
            {route === 'home' ?
                (
                    <>
                        <Logo/>
                        <CardList/>
                    </>
                ) : (
                    route === 'signin'
                        ? <SignIn onRouteChange={onRouteChange}/>
                        : <Register onRouteChange={onRouteChange}/>
                )


            }


        </div>
    );
}

export default App;
