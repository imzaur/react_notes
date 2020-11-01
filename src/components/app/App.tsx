import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import Note from '../note';
import AddForm from '../form';
import NoteService from '../../services';


interface AppState {
  notes: string[];
}


export default class App extends Component<any, AppState> {
  noteService: NoteService;
  constructor(props: any) {
    super(props);
    this.noteService = new NoteService();
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.setData = this.setData.bind(this);
  }
  setData(){
    const notes = this.noteService.getAllNotes()
    if (notes){
      this.setState({notes: notes})
    }
  }
  addNote(note: string){    
    this.noteService.saveNote(note);
    this.setData();
  }
  deleteNote = (index: number) => {
    this.noteService.deleteNote(index);
    this.setData();
  }
  updateNote = (index: number, note: string) => {
    // const {notes} = this.state;
    // const newArr = [...notes.slice(0, index), note, ...notes.slice(index+1)]
    // this.setState({notes: newArr});
    console.log(1);
  }
  componentDidMount(){
    const data = this.noteService.getAllNotes();
    this.setState({notes: data});
  }

  render () {
    const {notes} = this.state;
    console.log(`NOT ${notes}`);
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
