import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Ellipsemember from '../../images/About-us/Ellipse 15.svg'
import MemberBg from '../../images/About-us/bgmembers.svg'
import Facebook from '../../images/About-us/facebook 1.svg'
import Youtube from '../../images/About-us/youtube 1.svg'
import Twitter from '../../images/About-us/twitter 1.svg'
import Instagram from '../../images/About-us/instagram.svg'

const CardSection = () => {
  const cardInfo = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: '',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]
  const one = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: '',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]
  const a = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: '',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]
  const three = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: '',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]

  const b = [
    {
      MemberBg: { MemberBg },
      Ellipsemember: '',
      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]
  const four = [
    {
      MemberBg: { MemberBg },

      Youtube: 'https://www.youtube.com/',
      Facebook: 'https://www.facebook.com/',
      Twitter: 'https://www.twitter.com/',
      Instagram: 'https://www.instagram.com/',
      title: 'Sara Lara',
      text:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore ex magna aliqua Ut enim illum ad minim veniam, quis ea exercitation ullamco cillum ut enim dolore',
    },
  ]
  const renderCard = (card, index) => (
    <Card key={index} className="card m-3 mt-5 mb-5 ">
      <Card.Header className="aqua-gradient text-center ">
        <Card.Img
          style={{}}
          variant="top"
          src={card.Ellipsemember ? card.Ellipsemember : Ellipsemember}
          alt="Ellipsemember"
          className="img  rounded-circle "
        />
      </Card.Header>
      <Card.Body className="text-center mt-3">
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>
          {card.text}
          <ul className="list-unstyled list-inline font-small mt-3">
            <li className="list-inline-item pr-2">
              <a href={card.Facebook} target="_blank" rel="noreferrer">
                <img src={Facebook} alt="facebook" />{' '}
              </a>
            </li>
            <li className="list-inline-item pr-2">
              <a href={card.Twitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="twitter" />{' '}
              </a>
            </li>
            <li className="list-inline-item">
              <a href={card.Instagram} target="_blank" rel="noreferrer">
                <img src={Instagram} alt="Instagram" />{' '}
              </a>
            </li>
            <li className="list-inline-item">
              <a href={card.Youtube} target="_blank" rel="noreferrer">
                <img src={Youtube} alt="Youtube" />{' '}
              </a>
            </li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )

  return (
    <Container fluid style={{ width: '100%' }}>
      <Row>
        <Col lg={4} md={6}>
          {cardInfo.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {b.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {a.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {one.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {three.map(renderCard)}
        </Col>
        <Col lg={4} md={6}>
          {' '}
          {four.map(renderCard)}
        </Col>
      </Row>
    </Container>
  )
}

export default CardSection
