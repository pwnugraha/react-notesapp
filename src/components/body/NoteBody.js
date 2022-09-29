import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function NoteBody({ notes, archive, onDelete, onArchive, onAddNote }) {

    return (
        <div className='note-app__body'>
            <NoteForm onAddNote={onAddNote} />
            <NoteList children="List Note" notes={notes} onDelete={onDelete} onArchive={onArchive} />
            <NoteList children="Archive" notes={archive} onDelete={onDelete} onArchive={onArchive} />
        </div>
    );
}

export default NoteBody