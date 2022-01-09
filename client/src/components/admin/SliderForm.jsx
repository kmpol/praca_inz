import React, { useState } from 'react'
import styled from 'styled-components'
import FileBase from 'react-file-base64'

const Container = styled.div`
    background-color: #dbdbdb;
    display: flex;
    margin: 0 10vw;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const ProductsInput = styled.input`
    padding: 10px;
    font-size: 16px;
    width: 50%;
    margin-bottom: 12px;
`

const Button = styled.button`
    width: 50%;
    background-color: #2da04a;
    border: none;
    height: 32px;
    cursor: pointer;
`


const SliderForm = ({ sliderProp, onSaveClick }) => {
    const [slider, setSlider] = useState({
        title: sliderProp?.name ? sliderProp.name : '',
        description: sliderProp?.description ? sliderProp.description : '',
        img: ''
    })

    const onSaveClickButton = (e) => {
        e.preventDefault()
        onSaveClick(slider)
    }

    // SPRAWDZIC CZY DZIALA WYSLANIE DO MONGODB XD

    console.log(slider)

    return (
        <Container>
            Add slider:
            <Form>
                <ProductsInput type="text" placeholder="Slider title.." onChange={(e) => setSlider({ ...slider, title: e.target.value })} value={slider.name} />
                <ProductsInput type="text" placeholder="Slider description.." onChange={(e) => setSlider({ ...slider, description: e.target.value })} value={slider.description} />

                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setSlider({ ...slider, img: base64 })}
                />

                <Button onClick={onSaveClickButton}>Save!</Button>
            </Form>
        </Container>
    )
}

export default SliderForm
