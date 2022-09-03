import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'

const resume = () => {
  return (
    <div className="p-4">
        <div className="grid gap-6 md:grid-cols-2">
            <div>
                <h5 className="my-3 text-2xl font-bold">Education</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Computer Science</h5>
                    <p className="font-semibold">Xavier University - Ateneo de Cagayan (2015-2019)</p>
                    <p className="my-3">
                        I am currently pursuing B.tech in Computer Science Engineering
                        from Academy of Technology
                    </p>
                </div>
            </div>
            <div>
                <h5 className="my-3 text-2xl font-bold">Experiance</h5>
                <div>
                    <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
                    <p className="font-semibold">TCS </p>
                    <p className="my-3">
                        I don't know why I am doing this job
                    </p>
                </div>
            </div>
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
    </div>
  )
}

export default resume