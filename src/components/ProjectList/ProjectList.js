import React from 'react';
import ProjectListItem from '../ProjectListItem';
import { v4 as uuidv4 } from 'uuid';

import './index.css';

const ProjectList = ({projects}) => {
    return (
        <ul className='project-list'>
            {
                projects.map((project) => <ProjectListItem key={uuidv4()} project={project}/>)
            }
        </ul>
    )
}

export default ProjectList
