import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../../../assets/avatar.png";
import "./LandingPage.css";

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar} alt="AVATAR" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>
                                REACT | HTML | CSS | Bootstrap | Flutter |
                                JavaScript
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
