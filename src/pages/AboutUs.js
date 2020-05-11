import React from 'react';

import OurTeamMembers from "../components/OurTeamMembers";
import { Jumbotron, Container } from 'react-bootstrap';

class AboutUsPage extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1>Help. Simplify. Enable.</h1>
                        <p className="subtitle-text-gray">Learn more about our goal, our work and our team.</p>
                    </Container>
                </Jumbotron>
                <Container>
                    <div className="text-center">
                        <h3 className="HomePage-Heading">Why do we exist?</h3>
                        <p>{ OutGoal } </p>
                    </div>
                </Container>
                <hr />
                <OurTeamMembers />
            </div>
        );
    }
}

const OutGoal = "We started Fourntech with a big dream - to help and enable our customers through our services. We aim to simplify the problems of the users and create solutions through high-quality services. We believe such solution can be created through our unwavering dedication and ever updating, competing skills. We ensure that our customers receive top notch service and support."

export default AboutUsPage;