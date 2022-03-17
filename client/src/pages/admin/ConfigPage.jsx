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
import TermsOfUseComponent from '../../components/admin/TermsOfUseComponent'
import PrivacyPolicyComponent from '../../components/admin/PrivacyPolicyComponent'

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
    const [exists, setExists] = useState(true)
    const configShop = useSelector(state => state.shopConfig)

    useEffect(() => {
        dispatch(getShopConfig())
    }, [])

    useEffect(() => {
        if (Object.keys(configShop).length === 0) {
            setExists(false)
        } else {
            setExists(true)
        }
    }, [configShop])

    console.log(configShop)
    console.log(exists)

    return (
        <Container>
            <Sidebar />
            <ContentContainer>
                <EmailComponent email={configShop.contact_email} exists={exists} />
                <PhoneComponent phone={configShop.contact_phone_number} exists={exists} />
                <AddressComponent address={configShop.shop_address} exists={exists} />
                <AddressReturnComponent address={configShop.return_address} exists={exists} />
                <TermsOfUseComponent terms={configShop.terms_of_use} exists={exists} />
                <PrivacyPolicyComponent privacy={configShop.privacy_policy} exists={exists} />
            </ContentContainer>
        </Container>
    )
}

export default ConfigPage