import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Vingo – Food Delivery App',
    description: 'End-to-end food delivery experience with restaurant listings, cart/checkout, and order tracking.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/amitkr9109/VINGO_FOOD_DELIVERY',
    demo: 'https://vingo-food-delivery-frontend.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_excited-to-share-my-latest-project-vingo-activity-7378393543196782593-z7lC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Uber Clone – Ride Booking Platform',
    description: 'Ride hailing flow with real-time status, fare estimation, and driver/rider matching.',
    tech: ['React', 'Node', 'Express', 'Socket.io', 'Maps API'],
    github: 'https://github.com/amitkr9109/UBER_CLONE',
    demo: 'https://uber-clone-frontend-b0h1.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_uber-clone-ride-booking-platform-activity-7376547565779005440-jqKA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Air BnB – Property Booking App',
    description: 'Property search, availability calendar, and secure bookings with host dashboards.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/amitkr9109/AIR_BNB',
    demo: 'https://air-bnb-frontend.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_thrilled-to-present-my-latest-project-activity-7374840283437490176-7OuJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
]

export default function Projects() {
  useEffect(() => { document.title = 'Projects — Amit Kumar' }, [])
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('[data-animate]').forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section data-section className="py-16 sm:py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Projects</h1>
        <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300">Showcase our best work here.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

