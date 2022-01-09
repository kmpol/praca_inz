import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { createSlider } from '../../actions/admin/slider'
import SliderForm from '../../components/admin/SliderForm'
import Sidebar from '../../components/admin/Sidebar'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const AddSliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const CreateSliderPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onSaveClickAdd = (slider) => {
        dispatch(createSlider(slider, history))
    }

    return (
        <Container>
            <Sidebar />
            <AddSliderContainer>
                <SliderForm sliderProp={undefined} onSaveClick={onSaveClickAdd} />
            </AddSliderContainer>
        </Container>
    )
}

export default CreateSliderPage
