import { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import React from 'react'
import { services } from '../data'

const index = ({services}: {services:any}) => {

    console.log("CLIENT:", services)

    return (
        <div>
            <h1>
                Bye bye world 
            </h1>
        </div>
    )
}

export default index