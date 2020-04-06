import React, { Component } from "react";
import { Tabs, Tab } from "react-mdl";

class Projects extends Component {
    state = {
        activeTab: 0,
    };

    toggleCategories = () => {
        if (this.state.activeTab === 0) {
            return <h1>React</h1>;
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
                    {this.toggleCategories()}
                </section>
            </div>
        );
    }
}

export default Projects;
