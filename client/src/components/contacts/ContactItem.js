import React, { useContext, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const [points, setPoints] = useState(100);
  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <Fragment>

      <div className='card bg-light'>
        <h3 className='text-primary text-left'>
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge ' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className='list'>
          {email && (
            <li>
              <i className='fas fa-envelope-open' /> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-address-card' /> {phone}
            </li>
          )}
        </ul>
        <ul>
          <li>
            Reward: {points}
          </li>
        </ul>
        <p>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(contact)}
          >
            Edit
        </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
        </button>
        </p>
      </div>
    </Fragment>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
