import React from 'react';
import { ListGroupItem } from 'reactstrap';

const List = ({ id, name, removeList, changeActiveList, active }) => (
  <ListGroupItem className={active ? 'active' : ''} action>
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        changeActiveList(id);
      }}
    >
      {name}
    </a>
    <i
      className="bin"
      onClick={e => {
        e.preventDefault();
        removeList(id);
        // Here, we need a wrapper function so that the "removeList(id)" don't get executed right away.
      }}
    />
  </ListGroupItem>
);

export default List;
