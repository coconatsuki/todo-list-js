import React from 'react';
import { ListGroupItem } from 'reactstrap';

const List = ({
  id, name, removeList, changeActiveList, active,
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
    {id !== 1 ? (
      <i
        className="bin"
        onClick={(e) => {
          e.preventDefault();
          removeList(id);
        }}
      />
    ) : null}
  </ListGroupItem>
);

export default List;
