import React from 'react';
import './header.css';

export const Header = ({ grouping, ordering, setGrouping, setOrdering }) => {
  const [menuOpen, setMenuopen] = React.useState(false);

  const menuToggle = () => {
    setMenuopen(!menuOpen);
  };

  return (
    <div className='Header'>
      <div className='Header-wrapper' onClick={menuToggle}>
        <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/slider-3739444-3117480.png' className='h-icon' alt='menu-icon' />
        <span>Display</span>
        <img src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png' className='h-icon' alt='down-arrow-icon' />
      </div>
      {menuOpen && <Menu grouping={grouping} ordering={ordering} setOrdering={setOrdering} setGrouping={setGrouping} />}
    </div>
  );
};

const Menu = ({ grouping, ordering, setGrouping, setOrdering }) => {
  return (
    <div className='Menu'>
      <div className='Menu-Item'>
        <span>Grouping</span>
        <select name="grouping" value={grouping} onChange={(e) => setGrouping(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className='Menu-Item'>
        <span>Ordering</span>
        <select name='ordering' value={ordering} onChange={(e) => setOrdering(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
};
