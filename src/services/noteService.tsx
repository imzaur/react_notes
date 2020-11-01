

export default class NoteService {

    saveNote(note: string) {
        const data = this.getData();
        if (!data){
            localStorage.setItem(`data`, note);
        }
        else {
            localStorage.setItem('data', `${data},${note}`)
        }   
    }
    getData(): string | null {
        return localStorage.getItem('data');
    }
    getAllNotes(): string[] {
        const data = this.getData();
        console.log(`DAT ${data}`)
        if (!data){
            return []
        }
        else {
            return data.split(',');
        }
    }
    deleteNote(index: number){
        const notes = this.getAllNotes();
        const newData = notes.filter((_, ind) => ind !== index);
        localStorage.setItem('data', newData.join(','))
    }
}
