

export default class NoteService {
    saveNote(index: number, note: string) {
        localStorage.setItem(`${index}`, note);
    }
    getNote(index: number): string | null {
        return localStorage.getItem(`${index}`);
    }
}