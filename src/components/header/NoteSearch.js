import React from 'react';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            keyword: '',
        }

        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchEventHandler(event) {
        this.props.onSearch(event.target.value);
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        });
    }

    render() {
        return (
            <div className='note-search'>
                <input type="text" placeholder="Cari catatan ..." value={this.state.keyword} onChange={this.onSearchEventHandler} />
            </div>
        );
    }
}

export default NoteSearch;