import React, { useState } from "react";
import Filters from "../../utils";
import "./board.css";
import Card from "../card/Card";
import ProfileIcon from "../profileIcon/ProfileIcon";

const sortByTitle = (item) => {
    return item.sort((a, b) => a.title.localeCompare(b.title));
};
const sortByPriorty = (item) => {
    return item.sort((a, b) => b["priority"] - a["priority"]);
};
const Board = ({ boardData, grouping, ordering }) => {
    if (!boardData) {
        return null;
    }

    const tickets = boardData.tickets || [];

    const users = boardData.users || [];

    const titlesArray = grouping === "user" ? users : Filters[grouping];
    return (
        <div className="header-wrapper">
            {titlesArray.map((title) => {
                let filteredTickets;
                if (grouping === "status")
                    filteredTickets = tickets.filter(task => task[grouping] === title.name)
                else if (grouping === "priority")
                    filteredTickets = tickets.filter(task => task[grouping] === title.level)
                else if (grouping === "user") {
                    filteredTickets = tickets.filter(task => task['userId'] === title.id)
                }
                ordering === "Title" ? sortByTitle(filteredTickets) : sortByPriorty(filteredTickets);
                return (
                    <div className="section">
                        <div className="title">
                            <div className="title-left-part">
                                {
                                    grouping === 'user' ? <ProfileIcon name={title.name} /> : <img src={title.icon} alt="title-icon" width={"16px"} />
                                }
                                <span>{title.name}</span>
                                <span>{filteredTickets.length}</span>
                            </div>
                            <div className="title-right-part">
                                <img src="https://cdn0.iconfinder.com/data/icons/ui-16px-perfect-megapack-line/16/82_Add-512.png" alt="plus-icon" />
                                <img src="https://www.svgrepo.com/show/124304/three-dots.svg" alt="three-dots-icon" />
                            </div>
                        </div>
                        <TaskContainer users={users} filteredTickets={filteredTickets} grouping={grouping} />
                    </div>
                );
            })}
        </div>
    );
};

const TaskContainer = ({ users, filteredTickets, grouping }) => {
    return (
        <div className="task-container">
            {
                filteredTickets.map(item =>
                    <Card key={item.id} id={item.id} task={item.title} users={users} userId={item.userId}
                        status={item.status} grouping={grouping} priority={item.priority} />)
            }
        </div>
    )
}
export default Board;