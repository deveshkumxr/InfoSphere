import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

const NewsItem = (props) => {
    let {title, text, imgURL, newsURL, date} = props
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={imgURL? imgURL: 'https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q='} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text} </Card.Text>
            <p className="card-text" style={{color: 'grey'}}>{new Date(date).toGMTString()} </p>
            <Button variant="primary btn-sm" href={newsURL} target='_blank'>Read More..</Button>
          </Card.Body>
        </Card>
      </div>
    );
}
export default NewsItem

