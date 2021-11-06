import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { loginUser } from '../actions/auth'

const Container = styled.div`
    padding: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoginContainer = styled.div`
    background-color: #ececec;
    border-radius: 3px;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
`

const LoginText = styled.p`
    margin: 24px 0;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const InputForm = styled.input`
    padding: 6px 12px;
    margin: 10px 0;
    border-radius: 3px;
    border: none;
`

const Button = styled.button`
    background-color: #59b63c;
    border: none;
    padding: 10px 24px;
    margin-top: 12px;
    width: 100%;
    cursor: pointer;
    border-radius: 3px;
    color: black;

    &:hover{
        background-color: #48a52b;
    }

    &:disabled{
        cursor: not-allowed;
        background-color: gray;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 20px 0 0 33px;
    width: 100%;

    &:hover{
    color: #726e6e;

    }
`

const LoginPage = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')
    const [isFetching, setIsFetching] = useState(false)

    const history = useHistory()
    const dispatch = useDispatch()

    const onClickButton = (e) => {
        e.preventDefault()
        dispatch(loginUser(userInfo, history, setError, setIsFetching))
        cleanUp()
    }

    const cleanUp = () => {
        setTimeout(() => {
            setError("")
            setIsFetching(false)
        }, 2000)
    }

    return (
        <Container>
            <LoginContainer>
                <LoginText>Login!</LoginText>
                <Form>
                    <InputForm type="text" placeholder="email" onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
                    <InputForm type="password" placeholder="password" onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} />
                </Form>
                {error && <p>Unable to login</p>}
                <StyledLink to="/forgotpassword">Don't remember password?</StyledLink>
                <Button disabled={isFetching} onClick={onClickButton}>Login</Button>
            </LoginContainer>
        </Container>
    )
}

export default LoginPage
