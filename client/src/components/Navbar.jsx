import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { logoutUser } from '../actions/auth'
import styled from 'styled-components'
import { setGender } from '../actions/filters'

const Container = styled.div`
    height: 64px;
    display: flex;
`

const MainCategoriesContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start;
`

const Logo = styled.p`
    font-size: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`

const LinkWrap = styled.span`
    display: flex;
    text-decoration: none;
    color: black;
    padding: 0px 15px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

const Greeting = styled.p`
    margin-right: 15px;
`

const Navbar = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const [profile, setProfile] = useState(JSON.parse(localStorage?.getItem('profile')))

    const onLogoutClick = (e) => {
        dispatch(logoutUser())
        setProfile(null)
    }

    const onLinkClickMen = () => {
        dispatch(setGender("men"))
    }

    const onLinkClickWomen = () => {
        dispatch(setGender("women"))
    }

    const onLogoClick = () => {
        history.push('/')
    }

    return (
        <Container>
            <MainCategoriesContainer>
                <LinkWrap>
                    <StyledLink to="/products" onClick={onLinkClickMen}>Men</StyledLink>
                </LinkWrap>
                <LinkWrap>
                    <StyledLink to="/products" onClick={onLinkClickWomen}>Women</StyledLink>
                </LinkWrap>
            </MainCategoriesContainer>
            <Logo onClick={onLogoClick}>myShop</Logo>
            <ButtonContainer>
                {
                    profile ? (
                        <>
                            <Greeting>Hello, {profile?.user?.name}</Greeting>
                            <LinkWrap>
                                <StyledLink to="#" onClick={onLogoutClick}>Logout</StyledLink>
                            </LinkWrap>
                        </>
                    ) : (
                        <>
                            <LinkWrap>
                                <StyledLink to="/login">Login</StyledLink>
                            </LinkWrap>
                            <LinkWrap>
                                <StyledLink to="/register" >Sing Up</StyledLink>
                            </LinkWrap>
                        </>
                    )
                }

            </ButtonContainer>
        </Container >
    )
}

export default Navbar
