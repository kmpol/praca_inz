import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { getShopConfig, updateShopConfig, createShopConfig } from '../../actions/admin/shopConfig'

import Sidebar from './Sidebar'

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 1vh;

`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 3px;
`

const FormInput = styled.input`
    margin: 1vh 0;
`

const FormButton = styled.button``



const EmailComponent = ({ phone, exists }) => {
    const dispatch = useDispatch()
    const [phoneState, setPhoneState] = useState(phone)

    const onPhoneChange = (e) => {
        setPhoneState(e.target.value)
    }

    console.log(phoneState)
    console.log('phone', exists)

    const onEmailClick = (e) => {
        e.preventDefault()
        if (exists) {
            dispatch(updateShopConfig({ contact_phone_number: phoneState }))

        } else {
            dispatch(createShopConfig({ contact_phone_number: phoneState }))
        }
    }

    return (
        <Container>
            <Form>
                Phone:
                <FormInput type="text" defaultValue={phone} onChange={onPhoneChange} placeholder="shop phone number" />
                <FormButton onClick={onEmailClick}>Save Phone</FormButton>
            </Form>
        </Container>
    )
}

export default EmailComponent