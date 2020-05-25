import React, {useState} from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import projects from '../../projects';

import './index.css';

const Portfolio = () => {
    function getFilters(db) {
        const categories = new Set();

        db.forEach((project) => {
            categories.add(project.category);
        });

        return ['All', ...categories];
    }

    const filters = getFilters(projects);

    const initialState = {
        filters,
        selected: 'All',
        projects
    }
    const [state, setState] = useState(initialState);

    return (
        <div className="portfolio">
            <Toolbar 
                filters={state.filters}
                selected={state.selected}
                onSelectFilter={(filter) => { //правильно ли реализован setState?
                    setState(() => {
                        if (filter === 'All') return initialState;

                        const filtered = initialState
                            .projects
                            .filter((project) => project.category === filter);

                        return {...initialState,
                            selected: filter,
                            projects: filtered
                        }
                    });
                }}
            />
            <ProjectList projects={state.projects}/>
        </div>
    )
}

export default Portfolio;
