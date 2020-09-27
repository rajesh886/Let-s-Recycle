import React, { useState, useContext, useEffect, Fragment } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const [points, setPoints] = useState(0);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        date: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    setPoints(points + 100);
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <div>

        <form onSubmit={onSubmit}>
          <h2 className='text-primary'>
            {current ? 'Edit Request' : 'Add Request'}
          </h2>
          <input
            type='text'
            placeholder='Schedule Date'
            name='name'
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={onChange}
          />
          <input
            type='text'
            placeholder='Address'
            name='phone'
            value={phone}
            onChange={onChange}
          />
          <h5>Garbage Type</h5>
          <input
            type='radio'
            name='type'
            value='cans'
            checked={type === 'cans'}
            onChange={onChange}
          />{' '}
          Cans{' '}
          <input
            type='radio'
            name='type'
            value='plastic'
            checked={type === 'plastic'}
            onChange={onChange}
          />{' '}
          Plastic
      <div>
            <input
              type='submit'
              value={current ? 'Update Request' : 'Add Request'}
              className='btn btn-primary btn-block'
            />
          </div>
          {current && (
            <div>
              <button className='btn btn-light btn-block' onClick={clearAll}>
                Clear
          </button>
            </div>
          )}
        </form>

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='rewardBox'>
        <p>Recycle points: {points}</p>
      </div>
    </Fragment>

  );
};

export default ContactForm;
