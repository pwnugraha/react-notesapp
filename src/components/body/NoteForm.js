import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
            titleCharLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const maxTitleLength = 50;
        const charLength = event.target.value.length;

        this.setState(() => {
            if (charLength <= maxTitleLength) {
                return {
                    titleCharLimit: maxTitleLength - charLength,
                    title: event.target.value,
                }
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.onAddNote({ title: this.state.title, body: this.state.body });
        this.setState(() => {
            return {
                title: '',
                body: '',
                titleCharLimit: 50
            }
        });
    }

    render() {
        return (
            <div className='note-input'>
                <h2>Add Note</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">Sisa karakter: {this.state.titleCharLimit}</p>
                    <input className="note-input__title" type="text" required placeholder="Masukkan Judul ..." value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <input className="note-input__body" type="text" required placeholder="Tulis isi catatan ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                    <button type="submit">Tambahkan</button>
                </form>
            </div>
        )
    }
}

export default NoteForm;