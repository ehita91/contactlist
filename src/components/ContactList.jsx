import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { ContactCard } from "./ContactCard";

const getAllContacts = () => {
  return fetch(
    "https://assets.breatheco.de/apis/fake/contact/agenda/efg_agenda"
  ).then((response) => response.json());
};

export function ContactList() {
  const {data, isLoading, error} = useQuery(["contacts"], getAllContacts);

  return <div>
    {isLoading && <div>Loading Contacts</div>}
    {error && <div> Error loading contacts</div>}
    {data && data.map((contact, index) => { return <ContactCard key={index} contact={contact}/> })}
    <Link href="/add" className="btn btn-primary">
        Add Contact
    </Link>
    </div>;
}