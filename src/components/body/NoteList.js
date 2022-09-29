import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ children, notes, onDelete, onArchive }) {
    return (
        <>
            <h2>{children}</h2>
            {
                !notes.length
                    ? <p className='notes-list__empty-message'>{children} Kosong</p>
                    : <div className='notes-list'>
                        {
                            notes.map((note) => (
                                <NoteItem
                                    key={note.id}
                                    onDelete={onDelete}
                                    onArchive={onArchive}
                                    {...note}
                                />
                            ))
                        }
                    </div>
            }

        </>
    );
}

export default NoteList