import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import "./Projects.css";
import CardElement from "./CardElement";

class Projects extends Component {
    state = {
        activeTab: 0,
    };

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <CardElement name="React" number="1" />
                    <CardElement name="React" number="2" />
                    <CardElement name="React" number="3" />
                    <CardElement name="React" number="4" />
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <CardElement name="HTML" number="1" />
                    <CardElement name="HTML" number="2" />
                    <CardElement name="HTML" number="3" />
                    <CardElement name="HTML" number="4" />
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <CardElement name="Flutter" number="1" />
                    <CardElement name="Flutter" number="2" />
                    <CardElement name="Flutter" number="3" />
                    <CardElement name="Flutter" number="4" />
                </div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <CardElement name="JavaScript" number="1" />
                    <CardElement name="JavaScript" number="2" />
                    <CardElement name="JavaScript" number="3" />
                    <CardElement name="JavaScript" number="4" />
                </div>
            );
        }
    };

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>HTML</Tab>
                    <Tab>Flutter</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;
