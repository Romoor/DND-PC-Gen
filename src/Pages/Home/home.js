import "./Home.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import { RaceSelection } from "../CharQuiz/Races.js";
import { MenuItem, ButtonGroup, Button } from "@material-ui/core";
import Header from '../../components/header/header.js';
import Footer from '../../components/Footer/Footer.js'
import { render } from "@testing-library/react";


const Home = () => {
    return (

        < div className="genButtons" >

            <Button component={Link} to={'/RaceSelect'} element={<RaceSelection />}>Start your Character Creation!</Button>
            {/* <BrowserRouter>
                <div className="content" >
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}>
                            Home
                        </Route>
                        <Route path='/raceSelect' element={<RaceSelection />}>
                        </Route>
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter > */}
        </div >
    );

}


export default Home