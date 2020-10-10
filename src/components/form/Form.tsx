import React, {Component} from 'react';
import { Button, InputGroupAddon, Input,  InputGroup, Row, Col} from 'reactstrap';

interface AddFormProps {
    addNote: Function;
  }

export default class AddForm extends Component<AddFormProps, any> {
    constructor(props: AddFormProps) {
        super(props);
        this.state = {
            note: null
        }
    }
    saveNote = (e: any) => {
        this.setState({note: e.target.value})
        this.setState({note: ''})
    
    }

    render() {
        const {note} = this.state;
        return (
            <Row>
                <Col style={{padding: '25px'}}>
                    <InputGroup>
                        <Input placeholder="Type here" onChange={this.saveNote}/>
                        <InputGroupAddon addonType="append">
                        <Button color="secondary" onClick={() => this.props.addNote(note)}>Add Note</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
          );
    }
} 