"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/card"
import React from 'react'

type AnimatedCardProps = {
        index: number,
        name: string,
        description: string,
        url: string
}

export const AnimatedCard = (props: AnimatedCardProps) => {
        return (
                <motion.div
                        key={props.index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: props.index * 0.1 } }}
                >
                        <Card name={props.name} description={props.description} url={props.url} />
                </motion.div>

        )
}
