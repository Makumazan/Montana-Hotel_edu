import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink} from "react-router-dom";
import {Header} from "./Components/Header";
import {Slider} from "./Components/Slider";
import {AboutUs} from "./Components/AboutUs";
import {Offers} from "./Components/Offers";
import {Video} from "./Components/Video";
import {Rooms} from "./Components/Rooms";
import {Bradcam} from "./Components/Bradcam";
import {FeaturesRoom} from "./Components/Features-Room";
import {ForQuery} from "./Components/ForQuery";
import {InstagramArea} from "./Components/Instagram-area";
import {Footer} from "./Components/Footer";
import {DeliciousFood} from "./Components/Delicious-Food";
import {AboutBanner} from "./Components/About-Banner";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>

                <Route exact path="/" component={ () =>
                    <div>
                        <Slider/>
                        <AboutUs/>
                        <Offers/>
                        <Video/>
                        <DeliciousFood/>
                        <FeaturesRoom/>
                        <ForQuery/>
                        <InstagramArea/>
                        <Footer/>
                    </div>
                }/>

                <Route path="/rooms" component={ () =>
                    <div>
                        <Rooms/>
                        <Bradcam/>
                        <Offers/>
                        <FeaturesRoom/>
                        <ForQuery/>
                        <InstagramArea/>
                        <Footer/>
                    </div>
                }>
                </Route>

                <Route path="/about" component={ () =>
                    <AboutBanner/>
                }></Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
