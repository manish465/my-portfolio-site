import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "./Contact.css";

class Contact extends Component {
    state = {};
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>Half page</Cell>
                    <Cell col={6}>Half page</Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
