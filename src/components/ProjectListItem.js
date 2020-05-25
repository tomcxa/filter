import React from 'react'

const ProjectListItem = ({project}) => {
    return (
        <li>
            <img src={project.img} alt={project.category}/>
        </li>
    )
}

export default ProjectListItem
