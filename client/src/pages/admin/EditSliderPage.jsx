import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useLocation, useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../components/admin/Sidebar'
import { getSlider, updateSlider } from '../../actions/sldier'
import SliderForm from '../../components/admin/SliderForm'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const EditSliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const EditSliderPage = () => {
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const id = location.pathname.replace('/admin/dashboard/sliders/editSlider/', '')

    useEffect(() => {
        dispatch(getSlider(id))
    }, [])

    const onSaveClickUpdate = (slider) => {
        dispatch(updateSlider(id, slider, history))
    }

    const slider = useSelector(state => state.slider)
    console.log(slider)
    return (
        <Container>
            <Sidebar />
            <EditSliderContainer>
                {
                    slider?.title ? (
                        <SliderForm sliderProp={slider} onSaveClick={onSaveClickUpdate} />
                    ) : (
                        "Loading..."
                    )
                }
            </EditSliderContainer>
        </Container>
    )
}

export default EditSliderPage
