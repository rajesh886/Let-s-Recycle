import React, { useContext, useRef, useEffect, Fragment, useState } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef('');

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = e => {
    if (text.current.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Fragment>
      <form>
        <input
          ref={text}
          type='text'
          placeholder='Filter Requests...'
          onChange={onChange}
        />
      </form>


    </Fragment>

  );
};

export default ContactFilter;
