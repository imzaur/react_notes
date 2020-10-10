import React, {Component} from 'react';
import { ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';


interface NoteProps {
    notes: string[]
}

export default class Note extends Component<NoteProps, any> {
    constructor(props: NoteProps) {
        super(props);
        this.state = {
            notes: null
        }
    }

    componentDidUpdate(prevProps: NoteProps){
        if (this.props.notes !== prevProps.notes){
            this.setState({notes: this.props.notes})
        } 
    }
    render() {
        const {notes} = this.state;
        if (!notes) {
            return <span>Empty Notes</span>;
        }
        return (
            notes.map((item: string) => {
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