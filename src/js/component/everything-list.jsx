import React from 'react';
import { ListGroupItem } from 'reactstrap';

const EverythingList = ({
  id, name, changeActiveList, active,
}) => (
  <ListGroupItem className={active ? 'active' : ''} action>
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        changeActiveList(id);
      }}
    >
      {name}
    </a>
  </ListGroupItem>
);

export default EverythingList;
