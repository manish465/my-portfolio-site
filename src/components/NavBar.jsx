import React from "react";
import { Layout, Header, Navigation, Drawer } from "react-mdl";
import { Content } from "react-mdl/lib/Layout";
import Main from "./main";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Title" scroll>
                    <Navigation>
                        <Link to="/resume">Resume</Link>
                        <Link to="/aboutme">About Me</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
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
