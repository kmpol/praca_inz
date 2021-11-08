import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-height: 1080px;
    max-width: 1920px;
    display: flex;
    position: relative;
    overflow: hidden;
`

const ArrowContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && "15px"};
    right: ${props => props.direction === 'right' && "15px"};
    cursor: pointer;
    z-index: 2;
    opacity: 0.5;
`

const SlideContainer = styled.div`
    display: flex;
    transition: ease 1s;
    transform: translateX(${props => props.index * -100}vw);
`

const Slide = styled.div`
    width: 100vw;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
    width: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`

const InfoContainer = styled.div`
    flex: 1;
    width: 100%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InfoTitle = styled.h3`
    padding: 24px;
    font-size: 4rem;
`

const Info = styled.p`
    padding: 24px;
`

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setSliderIndex(sliderIndex - 1)
        } else if (direction === 'right') {
            setSliderIndex(sliderIndex + 1)

        }
    }
    return (
        <Container>
            <ArrowContainer direction="left" onClick={() => { handleArrowClick("left") }}>
                <ArrowLeftOutlined />
            </ArrowContainer>
            <SlideContainer index={sliderIndex}>
                <Slide>
                    <ImageContainer>
                        <Image src="https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=2048x2048" />
                    </ImageContainer>
                    <InfoContainer>
                        <InfoTitle>Lorem ipsum dolor sit amet.</InfoTitle>
                        <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi ratione explicabo repellendus neque consequuntur.</Info>
                    </InfoContainer>
                </Slide>
                <Slide>
                    <ImageContainer>
                        <Image src="https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=2048x2048" />
                    </ImageContainer>
                    <InfoContainer>
                        <InfoTitle>Lorem ipsum dolor sit amet.</InfoTitle>
                        <Info>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat modi ratione explicabo repellendus neque consequuntur.</Info>
                    </InfoContainer>
                </Slide>
            </SlideContainer>
            <ArrowContainer direction="right" onClick={() => { handleArrowClick("right") }}>
                <ArrowRightOutlined />
            </ArrowContainer>
        </Container>
    )
}

export default Slider
