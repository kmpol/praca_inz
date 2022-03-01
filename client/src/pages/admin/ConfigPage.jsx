import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import { getShopConfig, updateShopConfig } from '../../actions/admin/shopConfig'

import Sidebar from '../../components/admin/Sidebar'
import EmailComponent from '../../components/admin/EmailComponent'
import PhoneComponent from '../../components/admin/PhoneComponent'
import AddressComponent from '../../components/admin/AddressComponent'
import AddressReturnComponent from '../../components/admin/AddressReturnComponent'

const Container = styled.div`
    display: flex;
    width: 100%;

`

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const ConfigPage = () => {
    const dispatch = useDispatch()

    const configShop = useSelector(state => state.shopConfig)

    useEffect(() => {
        dispatch(getShopConfig())
    }, [])

    console.log(configShop)

    return (
        <Container>
            <Sidebar />
            <ContentContainer>
                <EmailComponent email={configShop.contact_email} />
                <PhoneComponent phone={configShop.contact_phone_number} />
                <AddressComponent address={configShop.shop_address} />
                <AddressReturnComponent address={configShop.return_address} />
            </ContentContainer>
        </Container>
    )
}

export default ConfigPage