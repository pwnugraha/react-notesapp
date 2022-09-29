import React from 'react';
import NoteSearch from './NoteSearch';

function NoteHeader({ onSearch }) {
    return (
        <div className='note-app__header'>
            <h1>Notes App</h1>
            <NoteSearch onSearch={onSearch} />
        </div>
    );
}

export default NoteHeader;