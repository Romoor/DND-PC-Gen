import "./races.css";
import { useState } from "react";
import { PHB } from "../../Data/Races.js";
import { MenuItem, ButtonGroup, List, Button } from "@material-ui/core";
import { Navigate } from "react-router";



export const RaceSelection = () => {

    const [race, setRace] = useState("");

    const handleSubmit = (event) => {

        console.log(event);
    };


    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30, marginTop: 60 }}>Create or Generate a Character!</span>
                <div className="Play_B">

                    <h3>Player's Handbook</h3>
                    <div className="race-Select">
                        {/* <ButtonGroup
                            label="Select Race"
                            value={race}
                            onChange={(e) => setRace(e.target.value)}
                            variant="contained"
                            orientation="vertical"
                            style={{ flexWrap: "wrap", maxWidth: '85vw', minWidth: '85vw', alignItems: 'center' }}
                            aria-label="vertical outlined primary button group"
                        > */}
                        {PHB.map((race) => (
                            <Button value={race.value}
                                onClick={handleSubmit(this.race.value)}>
                                {race.race}
                            </Button>
                        ))}
                        {/* </ButtonGroup> */}
                    </div>
                </div>
            </div>
        </div >
    )
}
