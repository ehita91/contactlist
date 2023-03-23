export function ContactCard({ contact }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.full_name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Phone: {contact.phone}</li>
        <li className="list-group-item">Email: {contact.email}</li>
        <li className="list-group-item">Address: {contact.address}</li>
      </ul>
    </div>
  );
}
