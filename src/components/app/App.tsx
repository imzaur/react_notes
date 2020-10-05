import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from '../header';
import Note from '../note';
import AddForm from '../form';


interface AppState {
  notes: string[];
}

export default class App extends Component<{}, AppState> {
  constructor(props: AppState) {
    super(props);
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this);
  }

  addNote(note: string){
    this.setState(({notes}) => {
      const newNotes = [...notes, note]
      console.log(`NOTES ${newNotes}`);
      return {
        notes: newNotes
      }
    })
  }

  render () {
    return (
      <div className='app'>
        <Container>
            <Header/>
        </Container>
        <Container>
          <Row>
            <Col style={{padding: '25px'}}>
              <AddForm addNote={this.addNote}/>
            </Col>
          </Row>
          <Note/>
        </Container>
      </div>
    );
  }
}
