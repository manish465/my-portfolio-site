import React from "react";
import { Switch, Route } from "react-router";
import LandingPage from "../Pages/LandingPage/LandingPage";
import AboutMe from "../Pages/AboutMe";
import Contact from "../Pages/Contact/Contact";
import Projects from "../Pages/Projects/Projects";
import Resume from "../Pages/Resume";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
        </Switch>
    );
};

export default Main;
