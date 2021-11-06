import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createUser } from '../actions/auth'
import styled from 'styled-components'

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

    &:disabled{
        cursor: not-allowed;
        background-color: gray;
    }
`

const RegisterPage = () => {

    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(false)

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const onRegisterClick = (e) => {
        e.preventDefault()
        dispatch(createUser(userInfo, history, setIsFetching, setError))
        setTimeout(() => {
            setError(false)
            setIsFetching(false)
        }, 2000)
    }

    return (
        < Container >
            <LoginContainer>
                <LoginText>Register!</LoginText>
                <Form>
                    <InputForm required type="text" placeholder="name" onChange={(e) => { setUserInfo({ ...userInfo, name: e.target.value }) }} />
                    <InputForm required type="text" placeholder="email" onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
                    <InputForm required type="password" placeholder="password" onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} />
                    <InputForm required type="password" placeholder="repeat password" onChange={(e) => { setUserInfo({ ...userInfo, repeatPassword: e.target.value }) }} />
                </Form>
                {error && "Somethig went wrong..."}
                <Button disabled={isFetching} onClick={onRegisterClick}>Register!</Button>
            </LoginContainer>
        </Container >
    )
}

export default RegisterPage
