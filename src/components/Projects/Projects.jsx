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
            return <CardElement />;
        } else if (this.state.activeTab === 1) {
            return <h1>HTML</h1>;
        } else if (this.state.activeTab === 2) {
            return <h1>Flutter</h1>;
        } else if (this.state.activeTab === 3) {
            return <h1>JavaScript</h1>;
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
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects;
