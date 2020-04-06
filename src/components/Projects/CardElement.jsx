import React from "react";
import { Card, CardTitle, CardText, CardMenu, IconButton } from "react-mdl";

const CardElement = (props) => {
    return (
        <Card shadow={5} className="card">
            <CardTitle className="card-title">
                {props.name} Project #{props.number}
            </CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam sapiente molestias architecto harum maxime a quia nulla
                voluptates earum alias, cumque ratione rem aperiam expedita
                corporis quae quis nam quasi?
            </CardText>
            <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
    );
};

export default CardElement;
