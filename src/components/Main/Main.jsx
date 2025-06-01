import Particles from "react-particles"
import "./main.css"
import {Hero} from "../Hero/Hero"
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Portfolio } from "../Portfolio/Portfolio";
import { loadFull } from "tsparticles";
import phoneIcon from "../../assets/iphone.png";
import androidIcon from "../../assets/android.png"
import iosIcon from "../../assets/apple.png"
import { useCallback } from "react";

export function Main(){

  
const particlesInit = useCallback(main => {
  loadFull(main);
}, [])

  return(

    <div className="container">
      <Particles
      init={particlesInit}
      id="tsparticles"
      options={{
        "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
        "detectRetina": true,
        "fpsLimit": 60,
        "interactivity": {
          "events": {
            "onClick": {
              "enable": true,
              "mode": "push"
            },
            "onDiv": {
              "elementId": "repulse-div",
              "enable": false,
              "mode": "repulse"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble",
              "parallax": {
                "enable": false,
                "force": 60,
                "smooth": 10
              }
            },
            "resize": true
          },
          "modes": {
            "bubble": {
              "distance": 400,
              "duration": 2,
              "opacity": 0.8,
              "size": 2,
            },
            "connect": {
              "distance": 80,
              "lineLinked": {
                "opacity": 0.5
              },
              "radius": 60
            },
            "grab": {
              "distance": 400,
              "lineLinked": {
                "opacity": 1
              }
            },
            "push": {
              "quantity": 2
            },
            "remove": {
              "quantity": 2
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "lineLinked": {
            "blink": false,
            "color": "#000",
            "consent": false,
            "distance": 150,
            "enable": false,
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "attract": {
              "enable": false,
              "rotate": {
                "x": 600,
                "y": 1200
              }
            },
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "out",
            "random": false,
            "speed": 2,
            "straight": false
          },
          "number": {
            "density": {
              "enable": true,
              "area": 800
            },
            "limit": 20,
            "value": 15,
          },
          "opacity": {
            "animation": {
              "enable": true,
              "minimumValue": 0.2,
              "speed": 1,
              "sync": false
            },
            "random": true,
            "value": 1
          },
          "rotate": {
            "animation": {
              "enable": true,
              "speed": 5,
              "sync": false
            },
            "direction": "random",
            "random": true,
            "value": 0
          },
          "shape": {
            "character": {
              "fill": false,
              "font": "Verdana",
              "style": "",
              "value": "*",
              "weight": "400"
            },
            "image": [
              {
                "src": phoneIcon,
                "width": 15,
                "height": 15
              },
              {
                "src": androidIcon,
                "width": 20,
                "height": 20
              },
              {
                "src": iosIcon,
                "width": 25,
                "height": 25
              }
            ],
            "polygon": {
              "sides": 5
            },
            "stroke": {
              "color": "#000000",
              "width": 0
            },
            "type": "image"
          },
          "size": {
            "animation": {
              "enable": false,
              "minimumValue": 0.1,
              "speed": 40,
              "sync": false
            },
            "random": false,
            "value": 16
          }
        },
        "polygon": {
          "draw": {
            "enable": false,
            "lineColor": "#ffffff",
            "lineWidth": 0.5
          },
          "move": {
            "radius": 10
          },
          "scale": 1,
          "url": ""
        },
        "background": {
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
        }
      }}
    />
      <Hero></Hero>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      </div>
  );
}