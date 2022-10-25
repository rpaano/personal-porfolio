import { motion } from 'framer-motion'
import { initScriptLoader } from 'next/script'
import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { fadeInUp, stagger } from '../animations'
import { Project } from '../ServicesContract'

const ProjectCard:FunctionComponent<{
    project: Project,
    showDetail: null|number,
    setShowDetail: (id:null|number) => void
}> = ({
    project: {
        id,
        name,
        category,
        deployed_url,
        description,
        github_url,
        image_path,
        key_techs,
    },
    showDetail,
    setShowDetail,
}) => {
        
    return (
        <div>
            <img src={image_path} alt="Project Image" className="cursor-pointer" onClick={() => setShowDetail(id)}/>
            <p className="my-2 text-center">{ name }</p>
            {
                showDetail === id && 
            
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 rounded-lg md:p-10 g-gray-100 mtext-black md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadeInUp} className="border-4 border-gray-500">
                            <img src={image_path} alt="Project Image"/>      
                        </motion.div>
                        <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                            <a href={ github_url } className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillGithub/>
                                <span>Github</span>
                            </a>
                            <a href={ deployed_url } className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200">
                                <AiFillProject/>
                                <span>Project</span>
                            </a>
                        </motion.div>    
                    </motion.div>
                    
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{ name }</motion.h2>
                        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{ description }</motion.h3>
                        <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map(tech => 
                                    <span key={ tech } className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200">{ tech }</span>    
                                )
                            }
                        </motion.div>
                    </motion.div>
                    <button onClick={() => setShowDetail(null)} className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200">
                        <MdClose size={ 30 }/>
                    </button>
                </div>
            }
        </div>
    )
}

export default ProjectCard