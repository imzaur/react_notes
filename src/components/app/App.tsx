import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import Note from '../note';
import AddForm from '../form';


interface AppState {
  notes: string[];
}

export default class App extends Component<any, AppState> {
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
    const {notes} = this.state;

    return (
      <div className='app'>
        <Container>
            <Header/>
        </Container>
        <Container>
          <AddForm addNote={this.addNote}/>
          <Note notes={notes}/>
        </Container>
      </div>
    );
  }
}
