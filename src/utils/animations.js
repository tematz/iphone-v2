import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)


export const animateWithGsap = (target, animationProps, scrollProps) => {
    gsap.to(target, { ...animationProps, scrollTrigger: { trigger: target, toggleActions: 'restart reverse restart reverse', start: 'top 85%', ...scrollProps } })
}

export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationsProps) => {
    timeline.to(rotationRef.current.rotation, { y: rotationState, duration: 1, ease: 'powew2.inOut' })
    timeline.to(firstTarget, { ...animationsProps, ease: 'power2.inOut' }, '<')
    timeline.to(secondTarget, { ...animationsProps, ease: 'power2.inOut' }, '<')
}