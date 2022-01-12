import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getSliders } from '../../actions/admin/slider'
import SliderItem from './SliderItem'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const SliderList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSliders())
    }, [])

    const sliders = useSelector(state => state.sliders)

    console.log(sliders)
    return (
        <Container>
            {
                sliders.length > 0 ? (
                    sliders.sort((a, b) => a.queue >= b.queue ? 1 : -1).map((slider) => <SliderItem key={slider._id} slider={slider} status={slider.isActive} />)

                ) : (
                    "Loading..."
                )
            }
        </Container>
    )
}

export default SliderList
