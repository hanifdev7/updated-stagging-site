"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { AnimatedCounter } from "./animated-counter"
import { Users, Award, Briefcase, Globe } from "lucide-react"

export function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
      <div className="container px-4 md:px-6" ref={sectionRef}>
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Our Impact</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
              Delivering Results
            </h2>
            <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our track record speaks for itself. Here's what we've accomplished so far.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl gap-6 py-8 sm:py-12 grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <AnimatedCounter to={250} suffix="+" />
            </h3>
            <p className="mt-2 text-sm sm:text-base font-medium">Happy Clients</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <AnimatedCounter to={520} suffix="+" delay={200} />
            </h3>
            <p className="mt-2 text-sm sm:text-base font-medium">Projects Completed</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Award className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <AnimatedCounter to={15} suffix=" Years" delay={400} />
            </h3>
            <p className="mt-2 text-sm sm:text-base font-medium">Experience</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center p-6 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-3">
              <Globe className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              <AnimatedCounter to={98} suffix="%" delay={600} formatter={(value) => value.toFixed(1)} />
            </h3>
            <p className="mt-2 text-sm sm:text-base font-medium">Client Retention</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
