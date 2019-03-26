import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {
    return (
        <div className="Sidebar">
            <ul>
                <li><NavLink activeClassName="active" exact to="/">Weather</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/fuel">Fuel</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/currency">Currency</NavLink></li>
                <li><NavLink activeClassName="active" exact to="/timetable">Timetable</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
