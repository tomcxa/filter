import React, {useState} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projects from '../../projects';

import './index.css';

function getFilters(db) {
    const categories = new Set();

    db.forEach((project) => {
        categories.add(project.category);
    });

    return ['All', ...categories];
}

const Portfolio = () => {

    const filters = getFilters(projects);

    const initialState = {
        selected: 'All',
        projects
    }

    const [state, setState] = useState(initialState);

    function onSelectFilterHandle(filter) {
        if (filter === 'All') {
            setState(initialState);
        } else {
            const filteredProjects = initialState
                .projects
                .filter(({category}) => category === filter);

            setState({ selected: filter, projects: filteredProjects });
        }
    }

    return (
        <div className="portfolio">
            <Toolbar 
                filters={filters}
                selected={state.selected}
                onSelectFilter={onSelectFilterHandle}
            />
            <ProjectList projects={state.projects}/>
        </div>
    )
}

export default Portfolio;
