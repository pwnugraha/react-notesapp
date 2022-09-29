import React from 'react';
import NoteBody from './body/NoteBody';
import NoteHeader from './header/NoteHeader';
import { getInitialData } from '../utils/Data';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);

        // for search feature to keep updated notes
        this.arrNotes = getInitialData();

        this.state = {
            notes: getInitialData(),
            searchKeyword: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        this.arrNotes = this.arrNotes.filter(note => note.id !== id);
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState(() => {
            return { notes }
        });
    }

    onAddNoteHandler({ title, body }) {
        const newNote = {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        }
        this.arrNotes.push(newNote);

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    newNote
                ]
            }
        });

        this.onSearchHandler(this.state.searchKeyword)
    }

    onArchiveNoteHandler(id) {
        const note = this.state.notes.find(note => note.id === id);
        const index = this.arrNotes.findIndex((note) => note.id === id);
        note.archived = !note.archived;
        this.arrNotes[index].archived = note.archived;

        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        note
                    }
                ]
            }
        });
    }

    onSearchHandler(searchKeyword) {
        this.setState(() => {
            let notes = this.arrNotes;
            if (searchKeyword !== '') {
                notes = notes.filter((note) => note.title.toLowerCase().includes(searchKeyword.toLowerCase()));
                return {
                    searchKeyword,
                    notes
                }
            }
            return {
                searchKeyword,
                notes
            }
        })
    }

    render() {
        const notes = this.state.notes.filter(note => note.archived === false);
        const archive = this.state.notes.filter(note => note.archived === true);

        return (
            <>
                <NoteHeader onSearch={this.onSearchHandler}/>
                <NoteBody notes={notes} archive={archive} onDelete={this.onDeleteHandler} onArchive={this.onArchiveNoteHandler} onAddNote={this.onAddNoteHandler} />
            </>
        );
    }
}

export default NotesApp;