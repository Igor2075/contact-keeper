import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

function ContactFilter() {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered, contacts } = contactContext;
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });
  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
        disabled={contacts.length === 0}
      />
    </form>
  );
}

export default ContactFilter;
