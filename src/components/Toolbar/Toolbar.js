import React from "react";
import ToolbarItem from "../ToolbarItem";
import "./index.css";

const Toolbar = ({ filters, selected, onSelectFilter }) => {
    const clickHandler = (event) => {
        if (event.target.classList.contains('filter-list-item')) {
            onSelectFilter(event.target.textContent);
        }
    }

    return (
        <ul className="filter-list" onClick={clickHandler}>
            {filters.map((filter) => (
                <ToolbarItem
                    key={filter}
                    filter={filter}
                    selected={selected === filter}
                />
            ))}
        </ul>
    );
};

export default Toolbar;
