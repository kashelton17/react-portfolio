import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'
import projectData from '../projectData/projectData'

export default function Navigation(/*{ current }*/) {
    let {url} = useRouteMatch()
    console.log(url)
    const projectNav = projectData.map(project => <li className='nav res btn' key={project.id}><NavLink to={`/${project.id}`} key={project.id}>{project.title}</NavLink></li>)
    return (
        <div>
            <nav>
                <ul>
                    {projectNav}
                    <li className='nav res btn'>
                        <a href="/images/KatieSheltonResume.pdf" target='_blank'>Resume</a> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}