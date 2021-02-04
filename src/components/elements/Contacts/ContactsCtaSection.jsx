import React, {
useRef,
useState,
Suspense,
useEffect
} from "react"
import * as THREE from "three"
import {
Canvas,
useLoader
} from 'react-three-fiber'
import {
softShadows,
MeshDistortMaterial
} from 'drei'
import { useSpring, animated } from 'react-spring/three'
import WauGradient from '../../../assets/wau-sphere-texture-sp1.svg'
import styled from 'styled-components'
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, StaticQuery, graphql } from 'gatsby'
import tw from 'twin.macro'
import GridMaxWidthContainer from "../../../components/elements/Atoms/GridMaxWidthContainer"
import ContactsTextBlock from "../../../components/elements/Atoms/ContactsTextBlock"
import Button from '../Atoms/Button'

softShadows()
  
const { TextureLoader } = THREE

const AnimatedCanvas = animated(Canvas)
const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)

const StyledContactsCtaCanvas = styled(AnimatedCanvas)`
    z-index: 0;
    // height: 100% !important;
    // min-height: 700px !important;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    width: 100%;
    
    @media (min-width: 768px) {
        width: 45% !important;
    }
`
const Sphere = ({ ctaSectionRef, position, url }) => {
    const contactsCtaSphereRef = useRef(null)
    const meshRef = useRef(null)
    const [hovered, setHover] = useState(false)
    const texture = useLoader(TextureLoader, WauGradient)
    const [ introFinished, setIntroFinished ] = useState(false)
  
    useEffect(() => {
      if(contactsCtaSphereRef.current && typeof window !== `undefined` && typeof document !== `undefined`) {
        gsap.registerPlugin(ScrollTrigger)
        
        // console.log("contactsCtaSphereRef", contactsCtaSphereRef)
        // console.log("ctaSectionRef", ctaSectionRef)
        let sphereTL = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 85%",
            end: "top 10%",
            scrub: 1,
            snap: true,
            // markers: true,
            // onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
            onUpdate: ({progress, direction, isActive}) => progress === 1 ? setIntroFinished(true) : setIntroFinished(false)
          }
        })
      
        ScrollTrigger.defaults({
            immediateRender: false,
            ease: Power1.inOut
        })
      
        sphereTL
        .from(contactsCtaSphereRef.current.position, {
          duration: 2,
          y: 10
        }, ctaSectionRef.current)
      }
    }, [ctaSectionRef, contactsCtaSphereRef, ScrollTrigger])
  
    useEffect(() => {
      if(introFinished) {
        console.log("Animation finished!")
      }
    }, [introFinished])
  
    const introSpring = useSpring({
      scale: [1, 1, 1],
      speed: 10,
      factor: 20,
      rotation: [0, 0, 0],
      // from: {
      //   scale: [40, 40, 6],
      //   speed: 1,
      //   rotation: [0, 0, 0]
      // },
      config: {
        mass: 1,
        friction: 40,
        velocity: 0
      }
    })
  
    return (
      <animated.mesh
        castShadow
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        // scale={introSpring.scale}
        position={position}
        ref={contactsCtaSphereRef}
        // rotation={introSpring.rotation}
        >
        {/* geomtery */}
        <sphereBufferGeometry attach='geometry' args={[1, 400, 400]}/>
        {/* meterial */}
        {/* https://github.com/pmndrs/drei#shaders */}
        <AnimatedMeshDistortMaterial
          attach='material'
          // color={"#403C90"}
          // drei arguments for MeshWobbleMaterial
          ref={meshRef}
          factor={introSpring.factor}
          map={texture}
          // speed={introSpring.speed}
          speed={hovered ? 2 : 2}
          />
      </animated.mesh>
    )
  }

const ContentCtaCanvas = ({
    ctaSectionRef,
    ...otherProps
}) => {
    const contactsCtaCanvasRef = useRef()

    return (
        <StyledContactsCtaCanvas
            id="canvas-contacts-cta"
            // enable shadows
            shadowMap
            colorManagement
            camera={{ position: [0, 0, 10], fov: 50 }}
            ref={contactsCtaCanvasRef}
            {...otherProps}
        >
            {/* lighting can be defined globally */}
            {/* directionalLight can cast shadows */}
            <directionalLight 
                // to cast shadow
                castShadow
                position={[0, 10, 0]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={100}
                shadow-camera-left={-10}
                shadow-camera-top={20}
                shadow-camera-right={20}
                shadow-camera-bottom={-10}
            />
            {/* poinLight can be positioned as sources of light */}
            <pointLight position={[-10, 0, 20]} intensity={1} />
            <pointLight position={[0, -10, 20]} intensity={1} />
            {/* <pointLight position={[0, 0, 2]} intensity={10} color='#00ACA9' /> */}
            {/* ambient light doesn't cast shadows */}
            <ambientLight intensity={0.7} color='#00ACA9' />
            
            {/* Suspence from React to wait for texture loading */}
            <Suspense fallback={null}>
                <Sphere
                    position={[0, 1, 0]}
                    url={WauGradient}
                    ctaSectionRef={ctaSectionRef}
                />
            </Suspense>

            {/* plane that receives casted shadow */}
            <group>
                <animated.mesh
                    // enable receiving shadows
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1.5, 0]}
                    >
                    <planeBufferGeometry attach='geometry' args={[100, 100]} />
                    
                    <shadowMaterial attach='material' opacity={0.1} />
                </animated.mesh>
            </group>
        </StyledContactsCtaCanvas>
    )
}

export default ({
    className,
    ...props
}) => {
    const ctaSectionRef = useRef(null)

    return (
        <section
            tw="relative w-full py-32 lg:py-64 flex justify-center"
            className={`lightGradientBg ${className}`}
            ref={ctaSectionRef}
            {...props}
        >
            <ContentCtaCanvas
                className="canvas"
                ctaSectionRef={ctaSectionRef}
                tw="absolute w-1/4 left-0 top-0 h-full"
            />
            <GridMaxWidthContainer tw="z-10">
                <ContactsTextBlock
                    title="Raccontaci i tuoi progetti"
                    content="WAU è la soluzione per chi cerca un partner capace di accompagnare e guidare le proprie idee, fino alla realizzazione finale. Che si tratti di un piccolo incarico o di una grande committenza, seguiamo ogni lavoro con la stessa attenzione."
                    link="/contatti"
                    cta="Contattaci"
                    tw="col-span-full md:col-span-8 md:col-start-7 lg:col-span-7 lg:col-start-5"
                />
            </GridMaxWidthContainer>
        </section>
    )
}