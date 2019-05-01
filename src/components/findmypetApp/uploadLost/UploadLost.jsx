import React, { Component } from 'react';
import dbLostPets from '../../../services/db-lostPets';

export default class UploadLost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            text: '',
            petImage: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.formHandler = this.formHandler.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
        // console.log({ name, value })
        console.log(this.state.title)
    }

    async formHandler(e) {
        e.preventDefault();

        try {
            await dbLostPets.doc().set({
                title: this.state.title,
                text: this.state.text,
                author: this.props.email
            })
            console.log("Upload");
            this.props.revealPetForm();
        }
        catch(err){
            console.log(err);
        }

    }

    render() {
        return (
            <form onSubmit={this.formHandler}>
                <div className="card-body">
                    <div className="md-form form-lg">
                        <input type="text" name="title" className="form-control form-control-lg" onChange={this.handleChange} />
                        <label htmlFor="title">Title</label>
                    </div>
                    <div className="form-group purple-border">
                        <label htmlFor="textPetLost"></label>
                        <textarea className="form-control" name="text" rows="3" placeholder="Description" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-group">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" name="petImage"
                                aria-describedby="inputGroupFileAddon01" onChange={this.handleChange} />
                            <label className="custom-file-label" htmlFor="petImage">Pet Image</label>
                        </div>
                    </div>
                    <button type="submit" className="btn peach-gradient btn-lg btn-block mt-3">Send</button>
                </div>
            </form>
        )
    }
    
}
