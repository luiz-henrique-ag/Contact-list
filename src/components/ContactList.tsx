import Contact from "../components/Contact";
import { useEffect, useState } from "react";
import { ContactModel } from "../models/contact.model";
import ContactDataService from "../service/contact.service"

export default function ContactList({ searchString }: { searchString: string }) {
  const [contacts, setContacts] = useState<Array<ContactModel>>([]);

  useEffect(() => {
    ContactDataService.query(searchString).then((response: any) => {
      setContacts(response.data);
    }).catch((e: Error) => {
      console.log(e);
    });
  }, [searchString])


  return (
    <div className="contact-list">
      {contacts.map(contact =>
        <Contact
          id={contact.id}
          name={contact.name}
          description={contact.description}
          phone={contact.phone}
          key={contact.id}
        />
      )}
    </div>
  )
}