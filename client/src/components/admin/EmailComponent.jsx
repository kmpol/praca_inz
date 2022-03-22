import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { createShopConfig, getShopConfig, updateShopConfig } from '../../actions/admin/shopConfig'

import Sidebar from '../../components/admin/Sidebar'

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



const EmailComponent = ({ email, exists }) => {
    const dispatch = useDispatch()
    const [emailState, setEmailState] = useState(email)

    const onEmailChange = (e) => {
        setEmailState(e.target.value)
    }

    console.log(emailState)

    const onEmailClick = (e) => {
        e.preventDefault()
        if (exists) {
            dispatch(updateShopConfig({ contact_email: emailState }))
        } else {
            dispatch(createShopConfig({ contact_email: emailState }))
        }
    }

    return (
        <Container>
            <Form>
                email:
                <FormInput type="text" defaultValue={email} onChange={onEmailChange} placeholder="shop email" />
                <FormButton onClick={onEmailClick}>Save Email</FormButton>
            </Form>
        </Container>
    )
}

export default EmailComponent