import { NextApiRequest, NextApiResponse } from "next";
import { services } from "../../data";

export default (request: NextApiRequest, responce: NextApiResponse) => {

    // console.log(services)
    
    responce.status(200).json({ services })

} 