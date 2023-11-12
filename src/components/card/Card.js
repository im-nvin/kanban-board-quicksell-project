import React from "react";
import "./card.css";
import Filters from "../../utils";
import ProfileIcon from "../profileIcon/ProfileIcon";

const Card = ({id,task,userId,users,status,grouping,priority}) => {
  const statusArray = Filters.status;
  const priorityArray = Filters.priority;
  const [ele] = statusArray.filter(item => item.name === status)
  const statusIcon = ele.icon;
  const[key] = users.filter(item => item.id === userId);
  const [it] = priorityArray.filter(item => item.level === priority)
  const priorityIcon = it.icon;

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <span>{id}</span>
        {grouping !== 'user' &&<ProfileIcon name={key.name} /> }
      </div>
      <div className="mid-section">
        {grouping !== 'status' && <img src={statusIcon} alt="statusIcon" width={'12px'}/> }
        <p>{task}</p>
      </div>
      <div className="card-footer">
        {grouping !== 'priority' && <img src={priorityIcon} alt="priorty-icon" width={"12px"} />}
        <div>
          <img src="https://png.pngtree.com/png-clipart/20201029/ourmid/pngtree-circle-clipart-light-gray-round-png-image_2381992.jpg" className="card-footer-img" alt="circle-fill-icon" />
          <span>Feature Request</span>
        </div>
      </div>
    </div>
  );
};

export default Card;