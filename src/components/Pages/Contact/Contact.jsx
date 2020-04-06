import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import "./Contact.css";

class Contact extends Component {
    state = {};
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Manish Sahu</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="Avatar"
                        />
                        <p className="contact-about">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Repudiandae repellat consequatur sequi nemo,
                            ut hic, ullam cupiditate dolores distinctio suscipit
                            ipsa voluptates pariatur quas incidunt soluta eaque
                            impedit, delectus labore.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent
                                        className="list"
                                        icon="person"
                                    >
                                        Person 1
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        className="list"
                                        icon="person"
                                    >
                                        Person 2
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent
                                        className="list"
                                        icon="person"
                                    >
                                        Person 3
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
