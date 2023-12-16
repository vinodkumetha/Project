import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import ITsupport from './ITSupport/ITsupport';
import Support from './support/Support';

const Supportitworks = () => {
  const Itworks = [
    {
      id: 1,
      title: 'React',
      description: 'We support IT Job Works and Proxy will do',
    },
    {
      id: 2,
      title: 'Python Django',
      description: 'We support IT Job Works',
    },
    {
      id: 3,
      title: 'Angular',
      description: 'We support IT Job Works',
    },
    {
      id: 4,
      title: 'Java',
      description: 'We support IT Job Works',
    },
    {
      id: 5,
      title: 'Machine Learning',
      description: 'We support IT Job Works',
    },
    {
      id: 6,
      title: 'Artificial Learning',
      description: 'We support IT Job Works',
    },
    {
      id: 7,
      title: '.Net',
      description: 'We support IT Job Works',
    },
    {
      id: 8,
      title: 'Manual Testing',
      description: 'We support IT Job Works',
    },
    {
      id: 9,
      title: 'SQL/PL SQL',
      description: 'We support IT Job Works',
    },
    {
      id: 10,
      title: 'Data ScienceL',
      description: 'We support IT Job Works',
    },
    {
      id: 11,
      title: 'Power BI',
      description: 'We support IT Job Works',
    },
    {
      id: 12,
      title: 'Devops',
      description: 'We support IT Job Works',
    }
  ];

  const cardStyle = {
    width: '18rem',
    marginBottom: '20px',
    transition: 'transform 0.2s ease-in-out',
    backgroundColor: '#1bbd36',
    color: 'white', 
    border: 'none',
  };

  return (
    <Container>
      <Row className='d-flex justify-content-around align-items-center'>
        {Itworks.map((each) => (
          <Card
            key={each.id}
            className='p-3'
            style={{ ...cardStyle }}
          >
            <Card.Body>
              <Card.Title className='text-center'>{each.title}</Card.Title>
              <Card.Text className='text-center'>{each.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Row>

      <ITsupport />
      <Support />
    </Container>
  );
};

export default Supportitworks;
