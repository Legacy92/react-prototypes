import React, { Component } from 'react';
import ContactList from './contact_list.js';
import ContactForm from './contact_form.js';
import contactData from '../data/contacts.js';

export default (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Stopwatch</h1>
            <Stopwatch />
        </div>
    )
}

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            contacts: contactData
        }
        this.addContact = this.addContact.bind(this);
    }

    addContact(contact){
        console.log('App: addComponent:', contact);
    
        this.setState({
            // You can put contact second to add it to the
            // end of the array instead of the beginning
            contacts: [contact, ...this.state.contacts]
        });
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-3">Address Book</h1>
                <div className="row">
                    <div className="col-4">
                    <ContactForm add={this.addContact}/>
                    </div>
                    <ContactList contacts={this.state.contacts}/>
                </div>
            </div>
        )
    }
}
export default App;