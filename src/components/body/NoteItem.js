import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../../utils/DateFormat'

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }) {
    return (
        <div className='note-item'>
            <div className='note-item__content'>
                <h3 className='note-item__title'>{title}</h3>
                <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
                <p className='note-item__body'>{body}</p>
            </div>
            <div className="note-item__action">
                <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;