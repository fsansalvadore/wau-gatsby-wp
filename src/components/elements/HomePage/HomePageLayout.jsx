import React, {
  useRef,
  useState,
  Suspense,
  useEffect
} from "react"
import Layout from "../../../components/LayoutComponent"
import { Helmet } from 'react-helmet'

import * as THREE from "three"
import {
  Canvas,
  useLoader,
} from 'react-three-fiber'
import {
  softShadows,
  MeshDistortMaterial
} from 'drei'
import { useSpring, animated } from 'react-spring/three'
import WauGradient from '../../../assets/wau-sphere-texture-sp1.svg'
import WauVideo from '../../../assets/Wau-Architetti--SOCIAL-.mp4'
import WauLogo from '../../../assets/WAU-Logo.svg'
import styled from 'styled-components'
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'gatsby'
import TextLoop from "react-text-loop";
import tw from 'twin.macro'
import GridMaxWidthContainer from "../../../components/elements/Atoms/GridMaxWidthContainer"
import SectionTextBlock from "../../../components/elements/Atoms/SectionTextBlock"
import Accordion from "../../../components/elements/Atoms/Accordion"
import Button from '../Atoms/Button'

softShadows()

const { TextureLoader } = THREE

const AnimatedCanvas = animated(Canvas)
const AnimatedMeshDistortMaterial = animated(MeshDistortMaterial)
  
const Sphere = ({ indexRef, position, url }) => {
  const sphereRef = useRef(null)
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const texture = useLoader(TextureLoader, WauGradient)
  const [ introFinished, setIntroFinished ] = useState(false)

  useEffect(() => {
    if(sphereRef.current && typeof window !== `undefined` && typeof document !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      
      let sphereTL = gsap.timeline({
        scrollTrigger: {
          trigger: indexRef.current,
          start: "200px 10%",
          end: "center 20%",
          scrub: 1,
          onUpdate: ({progress, direction, isActive}) => progress === 1 ? setIntroFinished(true) : setIntroFinished(false)
        }
      })
    
      ScrollTrigger.defaults({
          immediateRender: false,
          ease: Power1.inOut
      })
    
      sphereTL
      .to(sphereRef.current.position, {
        duration: 1,
        z: 8
      }, indexRef.current)
      .to(sphereRef.current.scale, {
        duration: 1,
        x: 2.3,
        y: 2,
        z: 1
      }, indexRef.current)
    }
  }, [indexRef, sphereRef, ScrollTrigger])

  useEffect(() => {
    if(introFinished) {
      document.querySelector("#continue-cta").style.display = "none"
    } else {
      document.querySelector("#continue-cta").style.display = "block"
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
      ref={sphereRef}
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

const IntroCanvas = ({
  indexRef,
  ...otherProps
}) => {
  const canvasRef = useRef()

  // const planeAnim = useSpring({
  //   position: [0, -3, 0],
  //   from: {
  //     position: [0, -40, 0]
  //   },
  //   delay: 300,
  //   config: {
  //     mass: 1,
  //     tension: 240,
  //     friction: 40,
  //     velocity: 0
  //   }
  // })

  return (
      <StyledIntroCanvas
        id="canvas-root"
        // enable shadows
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 10], fov: 50 }}
        ref={canvasRef}
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
            position={[0, 0, 0]}
            url={WauGradient}
            indexRef={indexRef}
            />
        </Suspense>

        {/* plane that receives casted shadow */}
        <group>
          <animated.mesh
            // enable receiving shadows
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            
            <shadowMaterial attach='material' opacity={0.1} />
          </animated.mesh>
        </group>
      </StyledIntroCanvas>
  )
}

const StyledIntroCanvas = styled(AnimatedCanvas)`
    z-index: -3;
    width: 100% !important;
    height: 100vh !important;
    min-height: 700px !important;
    position: fixed !important;
`
  
// Sphere in "vision" section
const VisionSphere = ({ visionSectionRef, position, url }) => {
  const visionSphereRef = useRef(null)
  const meshRef = useRef(null)
  const [hovered, setHover] = useState(false)
  const texture = useLoader(TextureLoader, WauGradient)

  useEffect(() => {
    if(visionSphereRef.current && typeof window !== `undefined` && typeof document !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      
      let sphereTL = gsap.timeline({
        scrollTrigger: {
          trigger: visionSectionRef.current,
          start: "top 40%",
          end: "bottom 10%",
          scrub: 1.4,
          // markers: true,
        }
      })
    
      ScrollTrigger.defaults({
          immediateRender: false,
          ease: Power1.inOut
      })
    
      sphereTL
      .fromTo(visionSphereRef.current.position,
      { y: 8 },
      { y: -8, duration: 1 },
      visionSectionRef.current)
    }
  }, [visionSectionRef, visionSphereRef, ScrollTrigger])

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
      scale={[2, 2, 2]}
      position={position}
      ref={visionSphereRef}
      // rotation={introSpring.rotation}
      >
      {/* geomtery */}
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]}/>
      {/* meterial */}
      {/* https://github.com/pmndrs/drei#shaders */}
      <AnimatedMeshDistortMaterial
        attach='material'
        // drei arguments for MeshWobbleMaterial
        ref={meshRef}
        factor={introSpring.factor}
        map={texture}
        speed={hovered ? 2 : 2}
        />
    </animated.mesh>
  )
}

const VisionSectionCanvas = ({
  visionSectionRef,
  ...otherProps
}) => {
  const visionCanvasRef = useRef()

  return (
      <StyledVisionSectionCanvas
        id="canvas-root"
        // enable shadows
        shadowMap
        colorManagement
        camera={{ position: [0, 0, 10], fov: 50 }}
        ref={visionCanvasRef}
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
          <VisionSphere
            position={[0, 0, 0]}
            url={WauGradient}
            visionSectionRef={visionSectionRef}
            />
        </Suspense>
      </StyledVisionSectionCanvas>
  )
}

const StyledVisionSectionCanvas = styled(AnimatedCanvas)`
    // z-index: -3;
    height: 100% !important;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    // position: fixed !important;
    width: 100%;
    
    @media (min-width: 768px) {
        width: 60% !important;
    }
`

const StyledIntroContainer = styled.div`
    width: 100%;
    position: relative !important;
    height: 400vh !important;
    min-height: 2800px;
    display: flex;
    justify-content: center;

    .after-sphere {
      position: realtive;
      z-index: 50 !important;
      background: var(--white);

    }
    
    p#continue-cta {
      ${tw`fixed font-light left-0 right-0 mx-auto text-center`}
      bottom: 5%;
      color: var(--black);
      z-index: 4;

      &.white {
        color: var(--white) !important;
      }
    }
    
    .canvas {
      top: 0;
    }

    .hidden {
      display: none;
    }

    a.main-cta {
      color: #111;
      text-decoration: none;
      padding: 10px 30px;
      border: 1px solid #111;
      position: fixed;
      top: auto;
      bottom: 13%;
      transition: bottom 0.3s ease;
      will-change: bottom;
      opacity: 0.8;
      z-index: 50;
      transition: opacity 0.3s ease !important;
      // animation: fadeIn 0.3s ease 2s both;
      animation: zIndexIn 0.3s ease 2s both;

      &.off {
        opacity: 0 !important;
        pointer-events: none;
      }

      &:hover {
        opacity: 1;
      }
    }

    @media screen and (min-width: 1024px) {
      a.main-cta {
        // top: 75vh;
        bottom: 25%;
      }
      p#continue-cta {
        bottom: 13%;
      }
    }

    .vision-section {
      z-index: -1;
    }

    .intro-text {
      min-height: 700px;
      z-index: -10;
      
      img {
        height: 40px;
        top: 30%;
        ${tw`absolute right-0 left-0 mx-auto mb-32`}
      }
      
      h1.intro-title {
        ${tw`absolute right-0 font-light text-4xl md:text-5xl left-0 mx-auto text-center`}
        top: 65%;
        letter-spacing: -0.05rem;
        line-height: 100%;
      }

      @media (min-width: 1024px) {
        img {
          right: calc(50% + 150px);
          ${tw`top-auto left-auto m-0`}
        }
        
        h1.intro-title {
          ${tw`text-left top-auto`}
          left: calc(50% + 140px);
          line-height: 100%;
        }
      }
    }

    .video-container {
      position: fixed;
      // left: 0;
      right: 0;
      width: 100vw;
      height: 100vh;
      min-width: 100%;
      min-height: 100%;
      // top: 0;
      bottom: 0;
      z-index: -1;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;

      video.video {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
      }

      p {
        ${tw`absolute left-0 right-0 bottom-32 z-20 mx-auto text-white text-center uppercase`}
      }
    }

    .intro-text-container {
      z-index: -2;

      p {
        max-width: 180px;
        text-align: center;
        color: white;
        font-size: 16px;
        line-height: 110%;
        letter-spacing: -0.02rem;
        text-transform: uppercase;
      }
    }

    @media screen and (min-width: 600px) {
      .intro-text-container p {
        max-width: 320px;
      }
      .video-container {
        .video {
          width: 100vw;
          height: 105vh;
        }
      }
    }
`

const NextContainer = styled.div`
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;

    &.yellow {
      background-color: yellow;
    }
`

const ScrollProgressToggleOut = () => {
  console.log("ScrollProgressToggleOut")
  if(typeof window !== `undefined` && typeof document !== `undefined`) {
    if(document.querySelector("a.main-cta")) {
      document.querySelector("a.main-cta").classList.add("off")
      document.querySelector("#continue-cta").classList.add("white")
    }
  }
}
const ScrollProgressToggleIn = () => {
  console.log("ScrollProgressToggleIn")
  if(typeof window !== `undefined` && typeof document !== `undefined`) {
    if(document.querySelector("a.main-cta")) {
      document.querySelector("a.main-cta").classList.remove("off")
      document.querySelector("#continue-cta").classList.remove("white")
    }
  }
}

const HomePageLayout = ({ lang, data, ...otherProps }) => {
  const indexRef = useRef(null)
  const videoRef = useRef(null)
  const visionSectionRef = useRef(null)
  const introTextRef = useRef(null)
  const [ introWords, setIntroWords ] = useState(null)
  const [ articles, setArticles ] = useState(null)
  const [ expertises, setExpertises ] = useState(null)

  console.log("hp data", data)
  useEffect(() => {
    if(data && data.wordpress.articles) {
      setArticles(data.wordpress.articles.nodes)
    }
    if(data && data.wordpress.expertises) {
      setExpertises(data.wordpress.expertises.nodes)
    }
  }, [setArticles, setExpertises, data])

  // Words animation
  useEffect(() => {
    setIntroWords(["architettura", "multidisciplinare", "design", "passione", "creatività"])
    if(videoRef.current) {
      videoRef.current.querySelector("video").play()
    }
  }, [setIntroWords])

  let introTextTL
  // Intro Text scroll animation
  useEffect(() => {
    if(typeof window !== `undefined` && typeof document !== `undefined`) {

      introTextTL = gsap.timeline({
        scrollTrigger: {
          trigger: indexRef.current,
          start: "200px 10%",
          end: "center 20%",
          scrub: 2,
          // markers: true,
          onUpdate: ({progress, direction, isActive}) => (
            progress > 0.3 ? ScrollProgressToggleOut() : ScrollProgressToggleIn()
          ),
        }
      })
    
      ScrollTrigger.defaults({
          immediateRender: false,
          ease: Power1.inOut
      })
    
      introTextTL
      .to(introTextRef.current, {
        duration: 2,
        scale: 3
      }, indexRef.current)
      .to(introTextRef.current,  {
        opacity: 1
      }, 0.4)
      .to(introTextRef.current,  {
        duration: 0.5,
        opacity: 0
      }, "1.2")
      .to(videoRef.current,  {
        duration: 0.5,
        opacity: 1
      }, "1.2")
    }
  }, [introTextTL, ScrollTrigger, gsap.timeline])

  // useEffect(() => {
  //   gsap.delayedCall(0.01, () => ScrollTrigger.getAll().forEach(t => console.log("start", t.start, "end", t.end)));
  // }, [gsap])

  return (
    <Layout>
      <Helmet>
        <title>WAU Architetti • Home Page</title>
      </Helmet>
      <div
        ref={indexRef}
      >
        <StyledIntroContainer
          className="intro-container"
          >
            <Link to={lang === "it" ? "/progetti" : "/en/projects"} className="main-cta">{lang === "it" ? "Esplora i Progetti" : "Explore projects"}</Link>
              <p id="continue-cta">{lang === "it" ? "Scorri per continuare" : "Scroll to continue"}</p>
              <div
                className="intro-text-container"
                ref={introTextRef}
                tw="fixed left-0 right-0 top-0 bottom-0 w-full h-screen flex items-center justify-center opacity-0"
                >
                <p>Lorem ipsum dolor sit amet</p>
              </div>
                <div
                className="video-container"
                ref={videoRef}>
                  {/* <p>Continua a scorrere</p> */}
                  <video
                    className="video"
                    width="900"
                    height="500"
                    controls={false}
                    loop
                    autoPlay
                    muted
                    >
                    <source src={`${WauVideo}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* ) */}
                {/* } */}
            <IntroCanvas
              className="canvas"
              indexRef={indexRef}
            />
            <div className="intro-text" tw="fixed w-screen h-screen flex flex-col md:flex-row items-center justify-center">
              <img
                className="logo"
                src={WauLogo}
                alt="WAU Architetti logo"
                />
              <h1
                className="intro-title"
                tw="absolute uppercase flex flex-col md:flex-row items-center justify-center lg:justify-start"
                >
                  <span tw="md:mr-4">è</span> 
                  {
                    introWords &&
                    <TextLoop
                      children={introWords ? introWords : []}
                      interval={1500}
                      mask
                    />   
                  }
              </h1>
            </div>
        </StyledIntroContainer>
        <div
          className="after-sphere smooth-scroll"
          >
          <section className="gradientBg" tw="w-full py-32 lg:py-64 flex justify-center bg-blue-400">
            <GridMaxWidthContainer>
              <SectionTextBlock 
                label="Expertise"
                title="Lorem ipsum dolor sit amet, consectetur."
                link="/expertise"
                cta="Scopri le espertise"
                tw="col-span-full md:col-span-6"
              />
              {
                expertises &&
                <Accordion
                  list={ expertises }
                  tw="col-span-12 md:col-span-6 md:col-start-7"
                />
              }
            </GridMaxWidthContainer>
          </section>
          <section
            tw="relative w-full py-32 lg:py-64 flex justify-center"
            className="vision-section lightGradientBg"
            ref={visionSectionRef}
          >
            <VisionSectionCanvas
              className="canvas"
              visionSectionRef={visionSectionRef}
              tw="absolute w-1/4 left-0 top-0 h-full"
            />
            <GridMaxWidthContainer>
              <SectionTextBlock
                label="Vision"
                title="Ri(e)voluzioni dello spazio quotidiano"
                content="Abbiamo l’obiettivo di creare ambienti migliori per la vita e il lavoro dei nostri clienti, mettendo in circolo nuova energia."
                link="/studio"
                cta="Scopri lo studio"
                tw="col-span-full md:col-span-6 md:col-start-7"
              />
            </GridMaxWidthContainer>
          </section>
          <section tw="w-full z-30 py-32 lg:py-64 flex justify-center items-center bg-white">
            <GridMaxWidthContainer>
              <div tw="col-span-full md:col-span-8 md:col-start-3">
                <h4 tw="font-mono font-light mb-8 md:mb-16">{lang === "it" ? "Ultime novità" : "Latest news"}</h4>
                <ul tw="border-0 border-b border-solid border-gray-200">
                  {
                    articles && articles.length > 0 &&
                    articles.map((article, index) => (
                      <li key={`latest-news-${index}`} tw="border-0 border-t border-solid border-gray-200">
                        <Link to={lang === "it" ? `/notizie/${article.slug}` : `/news/${article.slug}`} tw="block py-5 opacity-60 hover:opacity-100">
                          <div tw="w-full flex justify-between items-center">
                            <div>
                              <ul tw="font-mono mb-2 text-xs block ml-0">
                                {
                                    article.categories && article.categories.nodes.map(category => (
                                        <li key={`art-cat-${Math.floor(Math.random() * (100 - 999) + 100)}`} tw="inline mr-2">
                                            / {category.name}
                                        </li>
                                    ))
                                }
                              </ul>
                              <p tw="text-2xl md:text-3xl font-bold">{article.title}</p>
                            </div>
                            <div className="arrow-icon">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 8.00018C0 9.58243 0.469192 11.1291 1.34824 12.4447C2.22729 13.7603 3.47672 14.7857 4.93853 15.3912C6.40034 15.9967 8.00887 16.1551 9.56072 15.8465C11.1126 15.5378 12.538 14.7759 13.6569 13.657C14.7757 12.5382 15.5376 11.1128 15.8463 9.5609C16.155 8.00906 15.9965 6.40052 15.391 4.93871C14.7855 3.47691 13.7602 2.22748 12.4446 1.34843C11.129 0.469375 9.58225 0.000183105 8 0.000183105C6.94942 0.000183105 5.90914 0.207109 4.93853 0.609147C3.96793 1.01118 3.08601 1.60046 2.34315 2.34333C0.842854 3.84362 0 5.87845 0 8.00018ZM9.488 5.04818L11.776 7.44818C11.8099 7.48289 11.837 7.52358 11.856 7.56818C11.89 7.60582 11.917 7.64915 11.936 7.69618C11.9783 7.79194 12.0002 7.89548 12.0002 8.00018C12.0002 8.10488 11.9783 8.20842 11.936 8.30418C11.8979 8.40238 11.8408 8.4921 11.768 8.56818L9.368 10.9682C9.21735 11.1188 9.01304 11.2035 8.8 11.2035C8.58696 11.2035 8.38264 11.1188 8.232 10.9682C8.08136 10.8175 7.99672 10.6132 7.99672 10.4002C7.99672 10.1871 8.08136 9.98282 8.232 9.83218L9.272 8.80018H4.8C4.58783 8.80018 4.38434 8.71589 4.23431 8.56587C4.08428 8.41584 4 8.21235 4 8.00018C4 7.78801 4.08428 7.58452 4.23431 7.4345C4.38434 7.28447 4.58783 7.20018 4.8 7.20018H9.328L8.328 6.15218C8.1816 5.99836 8.1023 5.79267 8.10755 5.58038C8.1128 5.36809 8.20217 5.16658 8.356 5.02018C8.50982 4.87378 8.71551 4.79449 8.9278 4.79974C9.14009 4.80499 9.3416 4.89436 9.488 5.04818Z" fill="#14181A"/>
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))
                  }
                </ul>

                <Button to={lang === "it" ? "/notizie" : "/news"} tw="mt-8 md:mt-16 inline-block">
                    {lang === "it" ? "Explora le notizie" : "Read all news"}
                </Button>
              </div>
            </GridMaxWidthContainer>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default HomePageLayout
  