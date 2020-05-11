import React from 'react';

import arunImg from './Images/About/Arun.jpeg'
import praveenImg from './Images/About/Praveen.jpg'
import ponneesImg from './Images/About/Ponneeswaran.jpg'
import manjunathImg from './Images/About/Manjunath.jpg'

import { Jumbotron, Container } from 'react-bootstrap';
import { CardDeck, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const AboutUs = () => <div>
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
    <MemberCardTable />
</div>;

class MemberCardTable extends React.Component {
    render() {
        function MemberCard(props) {
            const member = props.member
            return (
                <Card className="col-md-3 text-center" border="light">
                    <Card.Img className="polaroid" variant="top" src={member.img} />
                    <Card.Body>
                        <Card.Subtitle>{member.name}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        {
                            member.twitter ? <Card.Link href={member.twitter}><FontAwesomeIcon icon={faTwitter}/></Card.Link> : ''
                        }
                        {
                            member.github ? <Card.Link href={member.github}><FontAwesomeIcon icon={faGithub}/></Card.Link> : ''
                        }
                        {
                            member.linkedin ? <Card.Link href={member.linkedin}><FontAwesomeIcon icon={faLinkedin}/></Card.Link> : ''
                        }
                    </Card.Footer>
                </Card>
            );
        }

        const cards = [];
        TeamMembers.flatMap((member, index)=> {
            cards.push(
                <MemberCard member={member} key={member.name}/>
            );
        });

        return (
            <Container className="card-padding">
                <h3 className="text-center">Our Team</h3>
                <CardDeck className="card-padding">
                    {cards}
                </CardDeck>
            </Container>
        );
    }
}

// Const
const TeamMembers = [
    {category: 'Admin', name: 'Arun Prasad Raghavendran',
        img: arunImg,
        twitter: "https://twitter.com/rarunprasad89",
        linkedin: "https://www.linkedin.com/in/rarunprasad1989",
        github: 'https://github.com/rarunprasad1989'},
    {category: 'Admin', name: 'Manjunath Mohan',
        img: manjunathImg,
        linkedin: "https://in.linkedin.com/in/manjunath-n-m-56860544",
        github: 'https://github.com/nmmanjunath90'},
    {category: 'Admin', name: 'Ponneeswaran Natarajan',
        img: ponneesImg,
        twitter: "https://twitter.com/Ponneeswaran",
        linkedin: "https://www.linkedin.com/in/ponneeswaran-natarajan-253920105",
        github: 'https://github.com/ponneeswaran'},
    {category: 'Admin', name: 'Praveen Prabhakar',
        img: praveenImg,
        linkedin: "https://www.linkedin.com/in/ppraveentr",
        github: 'https://github.com/ppraveentr'},
];

const OutGoal = "We started Fourntech with a big dream - to help and enable our customers through our services. We aim to simplify the problems of the users and create solutions through high-quality services. We believe such solution can be created through our unwavering dedication and ever updating, competing skills. We ensure that our customers receive top notch service and support."

export default AboutUs;