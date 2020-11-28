import React, {Component} from 'react';
import ContactsForm from '../ContactsForm/ContactsForm'
import Contacts from '../Contacts/ContactList'
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Filter/Filter';
import styles from './App.module.css';


class App extends Component {
    state = {
      contacts: [
        {
          name: "Roise Simpson",
          number: "645-17-49",
          id: uuidv4(),
        },
        {
          name: "Hermione Kline",
          number: "443-89-12",
          id: uuidv4(),
        },
        {
          name: "Eden Clements",
          number: "459-12-56",
          id: uuidv4(),
        }
      ],
      filter: '',
    }
  handleGetFilter = (filter) => {
    this.setState({
      filter: filter,
    })
  }
  componentDidMount(prevState, prevProps){
    if(localStorage.contacts){
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts'))
      })
    }
  }
  handleDeleteContact = (id) => {
    let delContacts = this.state.contacts.map(contact=>contact.id)
    let delContacts2 = [...this.state.contacts]
    let index = delContacts.indexOf(id)
    delContacts2.splice(index, 1);
    this.setState({
      contacts: [...delContacts2]
    })
  }
  handlePushContact = (name, number) => {
    let thisArr = this.state.contacts.map(contact=>contact.name.toLowerCase())
    if(!thisArr.includes(name.toLowerCase())){
    this.setState(prevState=>({
      contacts: [...prevState.contacts, {name: name, number: number, id: uuidv4(),}]
    }))
  } else{
    alert(`${name} is already in contacts.`)
  }
  }
  render() {
  return (
    <div className="App">
      <h2 className={styles.title}>Phonebook</h2>
      <ContactsForm
      name={this.state.name}
      number={this.state.number}
      handleGetName={this.handleGetName}
      handleGetNumber={this.handleGetNumber}
      handlePushContact={this.handlePushContact}/>
      <h2 className={styles.title}>Contacts</h2>
      <Filter
      filter={this.state.filter}
      handleGetFilter={this.handleGetFilter}/>
      <Contacts
      contacts={this.state.contacts}
      filter={this.state.filter}
      handleDeleteContact={this.handleDeleteContact}
      />
    </div>
  );
  }
}

export default App;