import React, { FunctionComponent } from 'react'
import { SkillContract } from '../ServicesContract'

const Bar:FunctionComponent<{ data: SkillContract }> = ({ data : {Icon, name, level}}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
        <div className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
            style={{ width: level }}    
        >
            <Icon className="mr-3"/>
            { name }
        </div>
    </div>
  )
}

export default Bar