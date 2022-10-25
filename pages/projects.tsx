import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeInUp, routeAnimation, stagger } from '../animations'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../ServicesContract'

const Projects = () => {

    const [projects, setProjects] = useState(projectsData)
    const [active, setActive]     = useState("all")
    
    const [ showDetail, setShowDetail ] = useState<number|null>(null)

    const handleFilterCategory = (category: Category | "all") => {
        if (category === "all") {
            setProjects(projectsData)
            setActive(category)
            return
        }
        
        setProjects(
            projectsData.filter(
                project => project.category.includes(category)
            )
        )
        setActive(category)
    }

    return (
        <motion.div className="px-5 py-2 overflow-y-scroll" style={{ height: '64vh' }} variants={routeAnimation} initial="initial" animate="animate" exit="exit">

            <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active}/>

            <motion.div 
                variants={stagger}
                initial="initial"
                animate="animate"
                className="relative grid grid-cols-12 gap-4 my-3">
                {
                    projects.map(project => (
                        <motion.div variants={fadeInUp} 
                            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                            <ProjectCard project={project} key={project.name} showDetail={showDetail} setShowDetail={setShowDetail}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Projects