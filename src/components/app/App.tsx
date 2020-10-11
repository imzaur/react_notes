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
    this.deleteNote = this.deleteNote.bind(this);
  }
  addNote(note: string){
    this.setState(({notes}) => {
      const newNotes = [...notes, note]
      return {
        notes: newNotes
      }
    })
  }
  deleteNote = (index: number) => {
    const {notes} = this.state;
    const newNotes = notes.filter((_: string, i: number) => i !== index);
    this.setState({notes: newNotes});
  }
  updateNote = (index: number, note: string) => {
    const {notes} = this.state;
    const newArr = [...notes.slice(0, index), note, ...notes.slice(index+1)]
    this.setState({notes: newArr});
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
          <Note notes={notes} deleteNote={this.deleteNote} updateNote={this.updateNote}/>
        </Container>
      </div>
    );
  }
}
