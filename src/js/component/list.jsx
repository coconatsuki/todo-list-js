import React from 'react'
import { ListGroupItem } from 'reactstrap';

const List = ({ id, name, removeList }) => (
  <ListGroupItem action>
    <a href="#" >{name}</a>
    <i className="bin" onClick={e => {
      e.preventDefault();
      removeList(id)
      // Here, we need a wrapper function so that the "removeList(id)" don't get executed right away.
    }}>
    </i>
  </ListGroupItem>
);

export default List;