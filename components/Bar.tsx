import React, { FunctionComponent } from 'react'
import { SkillContract } from '../ServicesContract'
import { motion } from 'framer-motion';

const Bar:FunctionComponent<{ data: SkillContract }> = ({ data : {Icon, name, level}}) => {
    
    const barWidth = `${level}%`;
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: barWidth,
            transition: {
                duration: 0.4,
                type: "spring",
                damping: 10,
                stiffness: 100,
            },
        },
    }
    
    return (
        <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
            <motion.div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
                style={{ width: barWidth }}
                variants={ variants }
                initial="initial"
                animate="animate"
            >
                <Icon className="mr-3"/> 
                <div className="z-40">
                    { name }                
                </div>
            </motion.div>
        </div>
    )
}

export default Bar