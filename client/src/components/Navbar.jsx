import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

import { logoutUser } from '../actions/auth'
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

const BadgeStyled = styled(Badge)`
        
`

const Navbar = () => {
    const cartFromStorage = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : {
            products: [],
            quantity: 0,
            total: 0
        }

    const dispatch = useDispatch()
    const history = useHistory()

    const [profile, setProfile] = useState(JSON.parse(localStorage?.getItem('profile')))
    const cartRedux = useSelector(state => state.cart)
    const cart = cartFromStorage

    const badgeContent = () => {
        if (cart.products.length > cartRedux.products.length) {
            return cart.products.length
        } else {
            return cartRedux.products.length
        }
    }

    const onLogoutClick = (e) => {
        dispatch(logoutUser(history))
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

    console.log('NAVBAR, CART LOCASTORAGE', cart)
    console.log('NAVBAR, CART REDUX', cartRedux)

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
                <LinkWrap>
                    <StyledLink to="/cart">
                        <BadgeStyled badgeContent={badgeContent()} color={'primary'}>
                            <ShoppingCartOutlined />
                        </BadgeStyled>
                    </StyledLink>
                </LinkWrap>

                {
                    profile ? (
                        <>
                            <StyledLink to="/account/orders">Hello, {profile?.user?.name}</StyledLink>
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
