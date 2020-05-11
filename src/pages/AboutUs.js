import React from 'react';

import { Jumbotron, Container } from 'react-bootstrap';
import { CardDeck, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import arunImg from './Images/About/Arun.jpeg'

const AboutUs = () => <div>
    <Jumbotron fluid>
        <Container>
            <h1>Help. Simplify. Enable.</h1>
            <p>Learn more about our goal, our work and our team.</p>
        </Container>
    </Jumbotron>
    <Container>
        <div class="text-center">
            <h3 className="HomePage-Heading">Why do we exist?</h3>
            <p>{ OutGoal } </p>
        </div>
    </Container>
    <MemberCardTable />
</div>;

class MemberCardTable extends React.Component {
    render() {
        function MemberCard(props) {
            const member = props.member
            return (
                <Card className="col-md-3" border="light" style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={member.img} />
                    <Card.Body>
                        <Card.Subtitle><p>{member.name}</p></Card.Subtitle>
                        {
                            member.twitter ? <Card.Link href={member.twitter}><FontAwesomeIcon icon={faTwitter}/></Card.Link> : ''
                        }
                        <Card.Link href={member.github}><FontAwesomeIcon icon={faGithub}/></Card.Link>
                        <Card.Link href={member.linkedin}><FontAwesomeIcon icon={faLinkedin}/></Card.Link>
                    </Card.Body>
                </Card>
            );
        }

        const cards = [];
        TeamMembers.forEach((member) => {
            cards.push(
                <MemberCard member={member} />
            );
        });

        return (
            <Container>
                <br/>   <br/>
                <Card.Header className="text-center">Our Team</Card.Header>
                <br/>
                <CardDeck>
                    {cards}
                </CardDeck>
                <br/>
            </Container>
        );
    }
}

const TeamMembers = [
    {category: 'Admin', name: 'Arun Prasad Raghavendran',
        img: arunImg,
        twitter: "https://twitter.com/rarunprasad89",
        linkedin: "https://www.linkedin.com/in/rarunprasad1989",
        github: 'https://github.com/rarunprasad1989'},
    {category: 'Admin', name: 'Manjunath Mohan',
        img: "./Images/About/Manjunath.jpg",
        linkedin: "https://in.linkedin.com/in/manjunath-n-m-56860544",
        github: 'https://github.com/nmmanjunath90'},
    {category: 'Admin', name: 'Ponneeswaran Natarajan',
        img: "./Images/About/Ponneeswaran.jpg",
        twitter: "https://twitter.com/Ponneeswaran",
        linkedin: "https://www.linkedin.com/in/ponneeswaran-natarajan-253920105",
        github: 'https://github.com/ponneeswaran'},
    {category: 'Admin', name: 'Praveen Prabhakar',
        img: "./Images/About/Praveen.jpg",
        linkedin: "https://www.linkedin.com/in/ppraveentr",
        github: 'https://github.com/ppraveentr'},
];

const OutGoal = "We started Fourntech with a big dream - to help and enable our customers through our services. We aim to simplify the problems of the users and create solutions through high-quality services. We believe such solution can be created through our unwavering dedication and ever updating, competing skills. We ensure that our customers receive top notch service and support."

export default AboutUs;