import React, { Component } from 'react';
import dbLostPets from '../../../services/db-lostPets';


export default class UploadLost extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            text: '',
            petImage: '',
            imageUrl: ''
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
        var OSName = "Unknown OS";
        if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
        if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
        if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
        if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";


        try {
            await dbLostPets.doc().set({
                title: this.state.title,
                text: this.state.text,
                author: this.props.email,
                image: this.state.imageUrl,
                imageUrl: this.state.imageUrl,
                date: new Date().getTime(),
                os: OSName,
            })
            console.log("Upload");
            this.props.revealPetForm();
            this.props.getLostPets();
            this.props.successToast("Added a new Pet :)")
        }
        catch (err) {
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
                    <div className="form-group">
                        <label htmlFor="imageUrl"></label>
                        <input type="text" name="imageUrl" className="form-control" placeholder="URL Image" onChange={this.handleChange} />
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
