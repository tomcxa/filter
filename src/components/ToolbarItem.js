import React from 'react';

const ToolbarItem = ({ filter, selected }) => (
    <li className={`filter-list-item${selected ? ' selected' : ''}`}>
        { filter }
    </li>);

export default ToolbarItem;
