import { useState, useEffect } from 'react'
import "./styles.css";
import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: 'John',
      phone_number: "5458795878"
    },
    {
      fullname: 'Alice',
      phone_number: "6895648596"
    }]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;
