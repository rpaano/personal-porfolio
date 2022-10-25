import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'

const resume = () => {
    return (
        <motion.div className="p-4" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Education</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Computer Science</h5>
                        <p className="font-semibold">Xavier University - Ateneo de Cagayan (2015-2019)</p>
                        <p className="my-3">
                            I am currently pursuing B.tech in Computer Science Engineering
                            from Academy of Technology
                        </p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className="my-3 text-2xl font-bold">Experiance</h5>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                        <p className="font-semibold">TCS </p>
                        <p className="my-3">
                            I don't know why I am doing this job
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Language & Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(language => <Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map(tool => <Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume