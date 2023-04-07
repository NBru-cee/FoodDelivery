import { Container } from "reactstrap";
import React from "react";
import "../../../styles/commonSection.css";

const CommonSection = (props) => {
    return (
        <section className="common__section">
            <Container>
                <h2 className="text-white">{props.title}</h2>
            </Container>
        </section>
    );
};

export default CommonSection;
