import { useState } from 'react'

function List({ contacts }) {
  const [search, setSearch] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toLocaleLowerCase())
    );
  });

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  };
  return (
    <div>
      <input placeholder='Filter Contacts' value={search} onChange={onChangeSearch}></input>
      <ul class="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>
      <p> Total Contacts {filtered.length}</p>
    </div>
  )
}

export default List;
