import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { forgotPassword } from '../actions/auth'

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
`


const ForgotPasswordPage = () => {
    const [error, setError] = useState("")
    const [userInfo, setUserInfo] = useState({
        email: ''
    })

    const dispatch = useDispatch()
    const history = useHistory()

    const onClickButton = (e) => {
        e.preventDefault()

        dispatch(forgotPassword(userInfo, history, setError))
    }
    return (
        <Container>
            <LoginContainer>
                <LoginText>Please provide an email!</LoginText>
                <Form>
                    <InputForm type="email" placeholder="email" onChange={(e) => { setUserInfo({ ...userInfo, email: e.target.value }) }} />
                </Form>
                {error && "Email not found"}
                <Button onClick={onClickButton}>Send email</Button>
            </LoginContainer>
        </Container>
    )
}

export default ForgotPasswordPage
