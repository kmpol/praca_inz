import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { createShopConfig, getShopConfig, updateShopConfig } from '../../actions/admin/shopConfig'

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



const EmailComponent = ({ address, exists }) => {
    const dispatch = useDispatch()
    const [addressState, setAddressState] = useState({ ...address })

    const onAddressChange = (e) => {
        setAddressState({
            ...addressState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        setAddressState({ ...address })
    }, [address])

    console.log(addressState)

    const onEmailClick = (e) => {
        e.preventDefault()
        if (exists) {
            dispatch(updateShopConfig({ return_address: addressState }))

        } else {
            dispatch(createShopConfig({ return_address: addressState }))
        }
    }

    return (
        <Container>

            <Form>
                Shop returns address:
                <FormInput name='name' type="text" defaultValue={address?.name} onChange={onAddressChange} placeholder="name" />
                <FormInput name='line1' type="text" defaultValue={address?.line1} onChange={onAddressChange} placeholder="address line1" />
                <FormInput name='line2' type="text" defaultValue={address?.line2} onChange={onAddressChange} placeholder="address line2" />
                <FormInput name='zip' type="text" defaultValue={address?.zip} onChange={onAddressChange} placeholder="zip-code" />
                <FormInput name='city' type="text" defaultValue={address?.city} onChange={onAddressChange} placeholder="city" />
                <FormInput name='country' type="text" defaultValue={address?.country} onChange={onAddressChange} placeholder="country" />
                <FormButton onClick={onEmailClick}>Save Address</FormButton>
            </Form>
        </Container>
    )
}

export default EmailComponent