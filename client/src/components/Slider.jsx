import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSliders } from '../actions/sldier'
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
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    height: auto;
    object-fit: cover;
    max-width: 100%;
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
    const dispatch = useDispatch()
    const [sliderIndex, setSliderIndex] = useState(0)

    const handleArrowClick = (direction) => {
        if (direction === 'left') {
            setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : sliders.length - 1)
        } else {
            setSliderIndex(sliderIndex === sliders.length - 1 ? 0 : sliderIndex + 1)
        }
    }

    useEffect(() => {
        dispatch(getSliders())
    }, [])

    const sliders = useSelector(state => state.slider)
    console.log('SLIDERS', sliders)
    return (
        <Container>
            <ArrowContainer direction="left" onClick={() => { handleArrowClick("left") }}>
                <ArrowLeftOutlined />
            </ArrowContainer>
            <SlideContainer index={sliderIndex}>
                {
                    sliders.filter((slider) => slider.isActive).sort((a, b) => a.queue >= b.queue ? 1 : -1).map((item) => (
                        <Slide key={item._id}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <InfoTitle>{item.title}</InfoTitle>
                                <Info>{item.description}</Info>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </SlideContainer>
            <ArrowContainer direction="right" onClick={() => { handleArrowClick("right") }}>
                <ArrowRightOutlined />
            </ArrowContainer>
        </Container>
    )
}

export default Slider
