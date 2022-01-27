import React, { useState } from "react";
import './ContactPage.css'

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
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend> A propos du site: </legend>
                    <p>Seriez-vous prêt à le recommander? </p>
                    <input type="radio" name="CSS" value="oui" id="oui"
                        checked="checked" />
                    <label for="oui" class="inline">oui</label>
                    <input type="radio" name="CSS" value="non" id="non" />
                    <label className="" for="non" class="inline">non</label>

                    <label for="utilise">Si non, pourquoi? : </label>
                    <select name="utilise" id="utilise">
                        <option value="Autre">Signaler</option>
                        <option value="Choix"> Manque de choix</option>
                        <option value="Goût"> Manque de goût</option>
                        <option value="Livraison"> Temps de livraison</option>
                        
                    </select>
                </fieldset>

                <fieldset>
                    <legend>Vos coordonnées :</legend>
                    <label for="Votre nom">Votre nom :</label>
                    <input type="nom"
                    // value={this.state.value} 
                    name="nom" 
                    size="30"
                    maxlength="40" 
                    placeholder="Nom" 
                    id="email" />
                    <label for="email">Votre email :</label>
                    <input type="email"
                    name="email" 
                    size="30"
                    maxlength="40" 
                    placeholder="Email" 
                    id="email" />

                    <label for="comments">Vos commentaires :</label>
                    <textarea value={this.state.value}
                        onChange={this.handleChange}
                        name="comments"
                        id="comments"
                        cols="20"
                        rows="4">
                    </textarea>
                </fieldset>

                <p>
                    <input type="submit" value="Envoyer" />
                    <input type="reset" value="Annuler" />
                </p>
                
            </form>
        );
    }
}


export default ContactForm;