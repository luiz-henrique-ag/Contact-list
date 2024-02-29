import Layout from "../layout/Layout";
import { ChangeEvent, useState } from "react";
import ContactList from "../components/ContactList";

export default function ContactsPage() {
  const [searchString, setSearchString] = useState<string>("");

  function searchBoxChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchString(e.target.value);
  }

  return (
    <Layout>
      <div className="container">
        <div className="search-container">
          <input
            type="text"
            value={searchString}
            onChange={searchBoxChange}
            placeholder="Search..."
          />
        </div>
        <ContactList searchString={searchString} />
      </div>
    </Layout>
  )
}