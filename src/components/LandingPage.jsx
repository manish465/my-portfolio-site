import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}></Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
