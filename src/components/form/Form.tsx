import React, {Component} from 'react';
import { Button, InputGroupAddon, Input,  InputGroup} from 'reactstrap';

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
    }

    render() {
        const {note} = this.state;
        return (
            <InputGroup>
                <Input placeholder="Type here" onChange={this.saveNote}/>
                <InputGroupAddon addonType="append">
                <Button color="secondary" onClick={() => this.props.addNote(note)}>Add Note</Button>
                </InputGroupAddon>
            </InputGroup>
          );
    }
} 