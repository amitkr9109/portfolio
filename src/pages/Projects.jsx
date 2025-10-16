import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ProjectCard from '../components/ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Vingo – Food Delivery App 🍔🍕',
    description: 'Built with MERN Stack, Socket.IO, Leaflet Maps, and Cloudinary for live order tracking, OTP-based delivery confirmation, and shop management with smooth Locomotive Scroll animations for an interactive user experience.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Cloudinary', 'Maps API'],
    github: 'https://github.com/amitkr9109/VINGO_FOOD_DELIVERY',
    demo: 'https://vingo-food-delivery-frontend.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_excited-to-share-my-latest-project-vingo-activity-7378393543196782593-z7lC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Uber Clone – Ride Booking Platform 🚖',
    description: 'Built with MERN Stack, Socket.IO, TomTom APIs, and GSAP featuring live ride requests, dynamic fare calculation, and interactive dashboards for drivers and riders with smooth real-time updates and animations.',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Socket.io', 'Maps API'],
    github: 'https://github.com/amitkr9109/UBER_CLONE',
    demo: 'https://uber-clone-frontend-b0h1.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_uber-clone-ride-booking-platform-activity-7376547565779005440-jqKA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Air BnB – Property Booking App 🏨',
    description: 'Built with MERN Stack, Razorpay, and NodeMailer featuring property CRUD operations, date-wise booking, guest reviews, secure payments, and an admin dashboard for managing users, bookings, and listings with real-time updates and smooth user experience',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/amitkr9109/AIR_BNB',
    demo: 'https://air-bnb-frontend.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_thrilled-to-present-my-latest-project-activity-7374840283437490176-7OuJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'AI Code Reviewer – Real time code analysis and collaboration platform 🤖💻',
    description: 'Built with MERN Stack, Socket.IO, and Gemini 2.5 Pro for live code editing, instant AI review, and one-to-one project collaboration.',
    tech: ['React', 'Node', 'Express', 'Socket.io', 'Gemini'],
    github: 'https://github.com/amitkr9109/Ai-code-reviewer',
    demo: 'https://ai-code-reviewer-frontend-wjx9.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_excited-to-share-my-latest-mern-stack-activity-7382014302964142080-B1Nx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'AI Chat Collaboration – Real time AI powered team workspace 🤖',
    description: 'Built with MERN Stack, Socket.IO, and WebContainers for live chat, code editing, file management, and instant AI assistance through @ai — enabling seamless collaboration and real-time project execution.',
    tech: ['React', 'Node', 'Express', 'AI', 'Webcontainer'],
    github: 'https://github.com/amitkr9109/Ai-chat-code',
    demo: 'https://ai-chat-code-frontend.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_uber-clone-ride-booking-platform-activity-7376547565779005440-jqKA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Food Reels – Short video platform for food lovers and restaurants 🍔🎥',
    description: 'Built with MERN Stack and ImageKit for uploading, viewing, and saving food reels with real-time likes, favorites, and store visits — a seamless blend of tech and taste.',
    tech: ['React', 'Node', 'Express', 'tailwind', 'Imagekit'],
    github: 'https://github.com/amitkr9109/FOOD_REELS',
    demo: 'https://food-reels-frontend-kf0r.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_uber-clone-ride-booking-platform-activity-7376547565779005440-jqKA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'Startech Awards Website – Dynamic and interactive frontend platform 🌐',
    description: 'Built with HTML, CSS, SCSS, JavaScript, GSAP, and Locomotive Scroll featuring smooth animations, responsive design, and modern interactive UI for an engaging user experience.',
    tech: ['HTML', 'CSS', 'SCSS', 'JavaScript','GSAP'],
    github: 'https://github.com/amitkr9109/Startech-Awards',
    demo: 'https://amitkr9109.github.io/Startech-Awards/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_frontenddevelopment-responsivedesign-webdesign-activity-7321953577432702977-FdtF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
  {
    title: 'K72 Agency Website – Creative agency platform with smooth GSAP animations 🌐',
    description: 'Built with React and GSAP featuring interactive scroll effects, animated project sections, and a fully responsive design for a seamless modern UI experience across all devices.',
    tech: ['React', 'GSAP'],
    github: 'https://github.com/amitkr9109/K72-Agency',
    demo: 'https://k72-agency.onrender.com/',
    linkedin: 'https://www.linkedin.com/posts/amit-kumar-3937a8282_thrilled-to-unveil-my-latest-project-activity-7384544901578919936-9-Io?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETRFh8BGB9VNPEDCk4balUC2tnGA_c5K5Y',
  },
]

const Projects = () => {

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
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects