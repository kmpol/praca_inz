import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { updateSliderQueue, updateSliderStatus } from '../../actions/admin/slider'

const Container = styled.div`
    display: flex;
    margin: 10px;
    border: 1px solid black;
`

const Image = styled.img`
    width: 10%;
    min-width: 100px;
    min-height: 100px;
    max-height: 200px;
    object-fit: center;
    margin-left: 10px;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const Description = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 3;
`

const Queue = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const QueueContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const QueueInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    display: block;
    flex: 1;
`

const QueueButton = styled.button`
    flex: 1;
`

const OrderStatusContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
`

const OrderName = styled.h4`

`

const Select = styled.select`
    width: 50%;
`

const Option = styled.option``

const SliderItem = ({ slider, status }) => {
    const [queue, setQueue] = useState()
    const dispatch = useDispatch()

    const onUpdateQueue = (e) => {
        e.preventDefault()
        dispatch(updateSliderQueue(slider._id, queue))
        setQueue("")
    }
    const onStatusSelect = (e) => {
        const status = e.target.value
        dispatch(updateSliderStatus(status, slider._id))
    }
    console.log(slider)
    return (
        <Container>
            <Image src={slider.img} />
            <Title>{slider.title}</Title>
            <Description>{slider.description}</Description>
            <Queue>{slider.queue}</Queue>
            <QueueContainer>
                <QueueInput type={"number"} onChange={(e) => { setQueue(e.target.value) }} value={queue} />
                <QueueButton onClick={onUpdateQueue}>Update queue</QueueButton>
            </QueueContainer>
            <OrderStatusContainer>
                <OrderName>Is Active? {status ? "Yes" : "No"}</OrderName>
                <Select id="status" onChange={onStatusSelect} defaultValue={status}>
                    <Option value="true" >Yes</Option>
                    <Option value="false" >No</Option>
                </Select>
            </OrderStatusContainer>
        </Container>
    )
}

export default SliderItem
