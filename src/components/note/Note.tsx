import React, {Component} from 'react';
import { Button, Col, UncontrolledTooltip, Modal, ModalBody, ModalFooter, ModalHeader, Input } from 'reactstrap';


interface NoteProps {
    notes: string[],
    deleteNote: Function,
    updateNote: Function
}

export default class Note extends Component<NoteProps, any> {
    constructor(props: NoteProps) {
        super(props);
        this.state = {
            notes: [],
            modal: false,
            note: ''
        }
    }
    componentDidUpdate(prevProps: NoteProps){
        if (this.props.notes !== prevProps.notes){
            this.setState({notes: this.props.notes})
        } 
    }

    toggle = (index: number) => {
        this.setState({modal: !this.state.modal,
                       note: this.state.notes[index]})
    }

    saveNote = (e: any) => {
        this.setState({note: e.target.value})
    }

    render() {
        const {notes, modal, note} = this.state;
        if (!notes) {
            return <span>Empty Notes</span>;
        }
        return (
            notes.map((item: string, index: number) => {
                return (
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                        {index+1}. {item}
                        <Col/>
                        <Button className="btn-trash btn-sm" style={{marginRight: '5px'}} id="delete" onClick={() => this.props.deleteNote(index)}>
                            <i className="fa fa-trash-o"></i>
                            <UncontrolledTooltip placement="top" target="delete">
                                удалить
                            </UncontrolledTooltip>
                        </Button>
                        <Button className="btn-trash btn-sm" id="edit" onClick={() => this.toggle(index)}>
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                            <UncontrolledTooltip placement="top" target="edit">
                                редактировать
                            </UncontrolledTooltip>
                        </Button>
                        </li>
                        <Modal isOpen={modal} toggle={() => this.toggle(index)}>
                            <ModalHeader toggle={() => this.toggle(index)}>Редактировать</ModalHeader>
                                <ModalBody>
                                <Input value={note} onChange={this.saveNote}/>
                                </ModalBody>
                                <ModalFooter>
                                <Button color="primary" onClick={() => {
                                    this.props.updateNote(index, note);
                                    this.toggle(index);}} >Подтвердить</Button>
                                <Button color="secondary" onClick={() => this.toggle(index)}>Отмена</Button>
                                </ModalFooter>
                        </Modal>
                    </ul>
            )   
            })
        )
    }
}