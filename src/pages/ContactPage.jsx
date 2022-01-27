import React, { useState } from "react";
import './ContactPage.css'
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Message enregistré !! ');
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="logo-to-home">
                <Link to="/"><Logo /></Link>
                </div>
                <div className="ContactForm">          
                    <form className="form-contact" onSubmit={this.handleSubmit}>
                        <fieldset className="fieldset-about">
                            <legend> A propos du site: </legend>
                            <p className="text-top">Seriez-vous prêt à le recommander? </p>
                            <div className="imput-btn">
                                <input className="imput-contact" type="radio" name="CSS" value="oui" id="oui"
                                    checked="checked" />
                                <label className="label-contact" for="oui" class="inline">oui</label>
                                <input className="imput-contact" type="radio" name="CSS" value="non" id="non" />
                                <label className="Label-contact" for="non" class="inline">non</label>
                            </div>
                            <label className="label-contact" for="utilise">Si non, pourquoi? : </label>
                            <select className="select-contact" name="utilise" id="utilise">
                                <option value="Autre">Signaler</option>
                                <option value="Choix"> Manque de choix</option>
                                <option value="Goût"> Manque de goût</option>
                                <option value="Livraison"> Temps de livraison</option>                       
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend>Vos coordonnées :</legend>
                            <label className="label-contact" for="Votre nom">Votre nom :</label>
                            <input className="input-contact" type="nom"
                            name="nom" 
                            size="30"
                            maxlength="40" 
                            placeholder="Nom" 
                            id="email" />
                            <label className="label-contact" for="email">Votre email :</label>
                            <input className="input-contact" type="email"
                            name="email" 
                            size="30"
                            maxlength="40" 
                            placeholder="Email" 
                            id="email" 
                            />
                            <label className="label-contact " for="comments">Vos commentaires :</label>
                            <textarea value={this.state.value}
                                onChange={this.handleChange}
                                name="comments"
                                id="comments"
                                cols="20"
                                rows="4">
                            </textarea>
                        </fieldset>
                        <p className="input-sub-res">
                            <input className="label-contact send" type="submit" value="Envoyer" />
                            <input className="label-contact cancel" type="reset" value="Annuler" />
                        </p>               
                    </form>
            </div>    
    </div>
        );
    }
}

export default ContactForm;