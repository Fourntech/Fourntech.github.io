import React from "react";
import {Card, CardDeck, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

import arunImg from '../Images/About/Arun.jpeg'
import praveenImg from '../Images/About/Praveen.jpg'
import ponneesImg from '../Images/About/Ponneeswaran.jpg'
import manjunathImg from '../Images/About/Manjunath.jpg'

class OurTeamMembers extends React.Component {
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
                        { member.twitter ? <Card.Link href={member.twitter}><FontAwesomeIcon icon={faTwitter}/></Card.Link> : '' }
                        { member.github ? <Card.Link href={member.github}><FontAwesomeIcon icon={faGithub}/></Card.Link> : '' }
                        { member.linkedin ? <Card.Link href={member.linkedin}><FontAwesomeIcon icon={faLinkedin}/></Card.Link> : '' }
                    </Card.Footer>
                </Card>
            );
        }

        const cards = [];
        TeamMembersData.flatMap((member, index)=> {
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
const TeamMembersData = [
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

export default OurTeamMembers;