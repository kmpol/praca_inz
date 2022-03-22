import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getShopConfig } from '../api'

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #161515;
`

const First = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
const Title = styled.p`
    font-size: 1.4rem;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const Description = styled.p`
color: white;
    display: flex;
    text-align: justify;
    margin: 8px;
    font-size: 1rem;
`

const Second = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const Third = styled.div`
    flex: 1;
`

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    display: flex;
`

const Footer = () => {

    const [config, setConfig] = useState()

    useEffect(() => {
        getShopConfig().then((res) => {
            // setConfig(res)
            setConfig(res.data)
            console.log(res.data)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
        <Container>
            <First>
                <Title>Kontakt z nami</Title>
                <Description>{config?.shop_address ? config.contact_email : "Loading..."}</Description>
                <Description>{config?.shop_address ? config.shop_address.name : "Loading..."}</Description>
                <Description>{config?.shop_address ? config.shop_address.line1 : "Loading..."}</Description>
                {config?.shop_address.line2 && "" && <Description>{config?.shop_address.line2}</Description>}
                <Description>{config?.shop_address ? config.shop_address.zip : "Loading..."} {config?.shop_address ? config.shop_address.city : "Loading..."}</Description>
                <Description>{config?.shop_address ? config.shop_address.country : "Loading..."}</Description>
                <Description>{config?.shop_address ? config.contact_phone_number : "Loading..."}</Description>
            </First>
            <Second>
                <Title>Adres do zwrotów i reklamacji</Title>
                <Description>{config?.return_address ? config.return_address.name : "Loading..."}</Description>
                <Description>{config?.return_address ? config.return_address.line1 : "Loading..."}</Description>
                {config?.shop_address.return_address && "" && <Description>{config?.return_address.line2}</Description>}
                <Description>{config?.return_address ? config.return_address.zip : "Loading..."} {config?.return_address ? config.shop_address.city : "Loading..."}</Description>
                <Description>{config?.return_address ? config.return_address.country : "Loading..."}</Description>
            </Second>
            <Third>
                <Title>Przydatne linki:</Title>
                <StyledLink to="/terms-of-use">Regulamin</StyledLink>
                <StyledLink to="privacy-policy">Polityka prywatności</StyledLink>
            </Third>
        </Container>
    )
}

export default Footer
