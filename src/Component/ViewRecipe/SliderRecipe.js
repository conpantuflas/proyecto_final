import React,{useRef} from 'react';

import { ReactComponent as ArrowLeft } from "./image/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "./image/arrowRight.svg"

import img1 from "./image/albondigas.jpg"
import img2 from "./image/hamburgesas.jpg"
import img3 from "./image/lasaña.jpg"
import img4 from "./image/taquitos.jpg"

import styled from 'styled-components';




const SliderRecipe = () => {

    const slideshow = useRef(null)

    const siguiente = () => {
        if(slideshow.current.children.length > 0){

            const primerElemento = slideshow.current.children[0];
            slideshow.current.style.transition = `300ms ease-out all`;
            const tamañoSlider = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

            const transicion = ()=>{
                slideshow.current.style.transition = `nonel`;
                slideshow.current.style.transform = `translateX(0)`;
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion)
            }

            slideshow.current.addEventListener('transitionend', transicion);
        }
    } 
    
    const anterior = () => {
        console.log('anterior')
        if(slideshow.current.children.length > 0){
            const index = slideshow.current.children.length -1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)

            slideshow.current.style.transition = `none`;
            const tamañoSlider = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlider}px)`;

            setTimeout(()=>{
                slideshow.current.style.transition = `300ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            },30)
        }
    } 

    return (
          <ContenedorPrincipal>
            {/* slideshow */}
            <ContenedorSlideShow ref={slideshow}>
                <Slide>
                    <a
                    href="https://www.google.com"> 
                        <img src={img1} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a
                    href="https://www.google.com"> 
                        <img src={img2} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a
                    href="https://www.google.com"> 
                        <img src={img3} alt="" />
                    </a>
                </Slide>

                <Slide>
                    <a
                    href="https://www.google.com"> 
                        <img src={img4} alt="" />
                    </a>
                </Slide>
            </ContenedorSlideShow>

             {/* controles */}
            <Controls>
                <Boton izquierdo onClick={anterior}>
                    <ArrowLeft />
                </Boton>
                <Boton onClick={siguiente}>
                    <ArrowRight />
                </Boton>
            </Controls>

          </ContenedorPrincipal>
    );
}

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow: hidden;
  transition: .3s ease all;
  z-index: 9;

  img{
    width:400px;
    height:300px;
    object-fit: cover;
    margin-top:0;
    border-radius: 10px;
  }
`;

const ContenedorSlideShow = styled.div`
  display:flex;
  flex-wrap: nowrap;
`;

const Controls = styled.div`
 position: absolute;
 top: 50%;
 left: 50%;
 z-index: 15;
 pointer-events:none;
`;

const Boton = styled.button`
     pointer-events:all;
     background:none;
     border:none;
     width:30px;
     outline: none;
     position: absolute;
     transition: .9s ease all;
     cursor: pointer;
     &:hover{
        background: rgba(0,0,0,0.2);
        path{
            fill:#fff;
        }
     }

     path {
        filter :${props => props.izquierdo ? "drop-shadow(2px 0px 0px #fff)" : "drop-shadow(-2px 0px 0px #fff)" }
    }

    ${props => props.izquierdo ? 'right:166px' : 'left:166px'}

`;

export default SliderRecipe;
