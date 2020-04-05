import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avetar from "../../assets/avetar.png";
import "./LandingPage.css";

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avetar} alt="" />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
