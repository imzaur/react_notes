import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';


export default class Note extends Component {
    state = {
        notes: ["first Note", "second Note", "third Note"]
    }

    render() {
        const {notes} = this.state;
        return (
            notes.map(item => {
                return (
                <Row>
                <Col>
                <ListGroup>
                    <ListGroupItem className="justify-content-between">{item}<Badge pill>14</Badge></ListGroupItem>
                 </ListGroup>
                </Col>
                 </Row>    
            )   
            })
        )
    }
}