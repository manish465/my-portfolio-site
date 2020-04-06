import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Content } from "react-mdl";
import Main from "../RouterComp/main";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll className="header-color">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>
        </div>
    );
};

export default NavBar;
