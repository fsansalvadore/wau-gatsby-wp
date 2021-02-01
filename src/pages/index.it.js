import React, {
  useRef,
  useState,
  Suspense,
  useEffect
} from "react"
// import '../styles/home.css'
// import '../styles/locomotive-scroll.css'
import Layout from "../components/LayoutComponent"
import { Helmet } from 'react-helmet'

import * as THREE from "three"
import {
  Canvas,
  useLoader,
  // useFrame,
  // useThree
} from 'react-three-fiber'
import {
  softShadows,
  MeshDistortMaterial
} from 'drei'
import { useSpring, animated } from 'react-spring/three'
import WauGradient from '../assets/wau-sphere-texture-sp1.svg'
import WauVideo from '../assets/Wau-Architetti--SOCIAL-.mp4'
// import WauGif from '../assets/wau-architetti.gif'
import WauLogo from '../assets/WAU-Logo.svg'
import styled from 'styled-components'
import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from 'locomotive-scroll';
import { Link } from 'gatsby'
import TextLoop from "react-text-loop";
import tw from 'twin.macro'

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
      
      
      console.log("sphereRef", sphereRef)
      console.log("indexRef", indexRef)
      let sphereTL = gsap.timeline({
        scrollTrigger: {
          trigger: indexRef.current,
          start: "200px 10%",
          end: "center 20%",
          scrub: 1,
          // snap: true,
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
  }, [indexRef.current])

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
    from: {
      scale: [40, 40, 6],
      speed: 1,
      rotation: [0, 0, 0]
    },
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
      scale={introSpring.scale}
      position={position}
      ref={sphereRef}
      rotation={introSpring.rotation}
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

  const planeAnim = useSpring({
    position: [0, -3, 0],
    from: {
      position: [0, -40, 0]
    },
    delay: 300,
    config: {
      mass: 1,
      tension: 240,
      friction: 40,
      velocity: 0
    }
  })

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
            position={planeAnim.position}
            >
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            
            <shadowMaterial attach='material' opacity={0.1} />
          </animated.mesh>
        </group>
      </StyledIntroCanvas>

  )
}

const StyledIntroCanvas = styled(AnimatedCanvas)`
    z-index: 2;
    width: 100% !important;
    height: 100vh !important;
    min-height: 700px !important;
    position: fixed !important;
`

const StyledIntroContainer = styled.div`
    width: 100%;
    position: relative !important;
    height: 400vh !important;
    display: flex;
    justify-content: center;

    .after-sphere {
      position: relative;
      display: block;
      z-index: 10;
      overflow-y: scroll;
      width: 100vw;
      height: auto;
    }
    
    h1 {
        z-index: 10;
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
      top: 75vh;
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

    .intro-text {
      position: fixed;
      width: 100vw;
      height: 100vh;
      min-height: 700px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      img {
        height: 40px;
        position: absolute;
        right: calc(50% + 150px);
      }
      
      h1.intro-title {
        position: absolute;
        font-size: 48px;
        font-weight: 300;
        text-transform: uppercase;
        left: calc(50% + 140px);
        z-index: 1;
        display: flex;
        line-height: 100%;

        .intro-words-container {
          position: relative;
          overflow: hidden;
          margin-left: 20px;
          vertical-align: text-bottom;
          display: inline-block;
          height: 50px;
          width: 600px;

          .intro-word {
            position: absolute;
            top: 0;
            left: 0;
          }
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
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;

      .video {
        pointer-events: none;
      }
    }

    .intro-text-container {
      position: fixed;
      left: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      top: 0;
      bottom: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;

      p {
        max-width: 320px;
        text-align: center;
        color: white;
        font-size: 16px;
        line-height: 110%;
        text-transform: uppercase;
      }
    }

    @media screen and (min-width: 600px) {
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

// const isSafari = () => {
//   const ua = navigator.userAgent.toLowerCase();
//   return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
// };

const IndexPage = () => {
  const indexRef = useRef(null)
  const videoRef = useRef(null)
  const introTextRef = useRef(null)
  const wordsRef = useRef(null)
  // const [ shouldUseImage, setShouldUseImage ] = useState(false);
  const [ introWords, setIntroWords ] = useState(null)
  // const [ wordsArr, setWordsArr ] = useState("")

  // Words animation
  useEffect(() => {
    setIntroWords(["architettura", "multidisciplinare", "design", "passione", "creatività"])
    
  }, [setIntroWords])
  
  useEffect(() => {
    if(introWords) {
      let words = document.querySelectorAll('.intro-words-container span.intro-word')
    
      let main = gsap.timeline({repeat: -1});
  
      for (let i = 0; i < words.length; i++) {
        let delay = i - 1;
        let wordTL = gsap.timeline();
        if(i !== 0) {
          wordTL.from(words[i], { duration: 1, yPercent: -100, opacity: 0, ease: 'power2.out' });
        } else { // Handle the first one specially
          delay += 1;
          gsap.set(words[0], {opacity: 1, yPercent: 0});
        }
        
        if(i !== words.length - 1) {
          wordTL.to(words[i], { duration: 1.5, yPercent: 100, opacity: 0, ease: 'power2.out' });
        }
        main.add(wordTL, delay + 3)
      }

    }
  }, [introWords])
  
  // // Set image if mobile
  // useEffect(() => {
  //   // check if user agent is safari and we have the ref to the container <div />
  //   if (isSafari() && videoRef.current) {
  //     // obtain reference to the video element
  //     const player = videoRef.current.children[0];

  //     // if the reference to video player has been obtained
  //     if (player) {
  //       // set the video attributes using javascript as per the
  //       // webkit Policy
  //       player.controls = false;
  //       player.playsinline = true;
  //       player.muted = true;
  //       player.setAttribute("muted", ""); // leave no stones unturned :)
  //       player.autoplay = true;

  //       // Let's wait for an event loop tick and be async.
  //       setTimeout(() => {
  //         // player.play() might return a promise but it's not guaranteed crossbrowser.
  //         const promise = player.play();
  //         // let's play safe to ensure that if we do have a promise
  //         if (promise.then) {
  //           promise
  //             .then(() => {})
  //             .catch(() => {
  //               // if promise fails, hide the video and fallback to <img> tag
  //               // videoParentRef.current.style.display = "none";
  //               setShouldUseImage(true);
  //             });
  //         }
  //       }, 0);
  //     }
  //   }
  // }, []);

  // // Video scroll animation
  // useEffect(() => {
  //   if(typeof window !== `undefined` && typeof document !== `undefined`) {
  //     gsap.registerPlugin(ScrollTrigger)
      
      
  //     // console.log("sphereRef", videoRef)
  //     // console.log("indexRef", indexRef)
  //     let videoTL = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: indexRef.current,
  //         start: "200px 10%",
  //         end: "center 20%",
  //         scrub: 2,
  //         // markers: true,
  //         // onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
  //         onUpdate: ({progress, direction, isActive}) => progress > 0.3
  //         ? document.querySelector("a.main-cta").classList.add("off")
  //         : document.querySelector("a.main-cta").classList.remove("off")
  //       }
  //     })
    
  //     ScrollTrigger.defaults({
  //         immediateRender: false,
  //         ease: Power1.inOut
  //     })
    
  //     videoTL
  //     .to(videoRef.current, {
  //       duration: 2,
  //       scale: 2
  //     }, indexRef.current)
  //     .to(videoRef.current,  {
  //       opacity: 1
  //     }, 0.2)
  //     .to(videoRef.current,  {
  //       duration: 0.5,
  //       opacity: 0
  //     }, "1.2")
  //   }
  // }, [])

  // Intro Text scroll animation
  useEffect(() => {
    if(typeof window !== `undefined` && typeof document !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger)
      
      
      // console.log("sphereRef", videoRef)
      // console.log("indexRef", indexRef)
      let introTextTL = gsap.timeline({
        scrollTrigger: {
          trigger: indexRef.current,
          start: "200px 10%",
          end: "center 20%",
          scrub: 2,
          // markers: true,
          // onUpdate: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
          onUpdate: ({progress, direction, isActive}) => progress > 0.3
          ? document.querySelector("a.main-cta").classList.add("off")
          : document.querySelector("a.main-cta").classList.remove("off")
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
      }, "1.5")
    }
  }, [])

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
            <Link to="/progetti" className="main-cta">Esplora i Progetti</Link>
            {/* {
              shouldUseImage ? (
                <div
                className="video-container"
                ref={videoRef} >
                  <img src={WauGif} alt="Muted Video" />
                </div>
              ) : ( */}
              <div className="intro-text-container" ref={introTextRef}><p>WAU interviene nello spazio quotidiano realizzando rivoluzioni leggere.</p></div>
              <div
                className="video-container"
                ref={videoRef}
                dangerouslySetInnerHTML={{
                  __html:`
                    <video
                    class="video"
                    width="900"
                    height="500"
                    controls={false}
                    loop
                    autoplay
                    muted
                    >
                    <source src="${WauVideo}" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  `
                }}/>
                {/* ) */}
                {/* } */}
            <IntroCanvas
              className="canvas"
              indexRef={indexRef}
            />
            <div className="intro-text">
              <img
                className="logo"
                src={WauLogo}
                alt=""
                />
              <h1
                className="intro-title"
                >
                  <span tw="mr-4">è</span> 
                  {
                    introWords &&
                    <TextLoop
                      children={introWords ? introWords : []}
                      interval={1500}
                      mask
                    />
                      
                  }
                  {/* <span className="hidden">WAU</span> è <span className="intro-words-container" ref={wordsRef}>
                    {
                      introWords &&
                      introWords.map((word, index) => 
                        <span key={index} className="intro-word">{word}</span>
                      )
                    }
                    {
                      introWords &&
                      <span className="intro-word">{introWords[0]}</span>
                    }
                  </span> */}
              </h1>
            </div>
        </StyledIntroContainer>
        <div
          className="after-sphere smooth-scroll"
          >
          <NextContainer
            className="next-container"
            >
            <h1>Sezione</h1>
          </NextContainer>
          <NextContainer
            className="next-container yellow"
            >
            <h1>Sezione</h1>
          </NextContainer>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
