import React from 'react'
import {motion} from 'framer-motion'

export default function Motion(props) {
    

    return (
        
    <motion.div
    className="container"
    whileHover={{ scale: 1.2, rotate: 90 }}
    whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}/>
        
    )
}
