import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useHistory, Link } from 'react-router-dom'
import { resetPassword } from '../actions/auth'

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


const ResetPasswordPage = ({ match }) => {
    const [error, setError] = useState(false)
    const [errorMatchPasswords, setErrorMatchPasswords] = useState(false)

    const [userInfo, setUserInfo] = useState({
        password: ''
    })
    const [repeatPassword, setRepeatPassword] = useState("")

    const dispatch = useDispatch()
    const history = useHistory()

    const onClickButton = (e) => {
        e.preventDefault()
        if (checkPasswords()) {
            setErrorMatchPasswords(false)
            dispatch(resetPassword(userInfo, match.params.resetToken, history, setError))
        }
        setErrorMatchPasswords(true)

    }

    const checkPasswords = () => {
        return userInfo.password === repeatPassword
    }
    console.log(userInfo.password, repeatPassword)
    return (
        <Container>
            <LoginContainer>
                <LoginText>Please provide a new password!</LoginText>
                <Form>
                    <InputForm type="password" placeholder="password" onChange={(e) => { setUserInfo({ ...userInfo, password: e.target.value }) }} />
                    <InputForm type="password" placeholder="repeat password" onChange={(e) => { setRepeatPassword(e.target.value) }} />
                </Form>
                {error && "Something went wrong..."}
                {errorMatchPasswords && "Passwords must be the same"}
                <Button onClick={onClickButton}>Set a new password</Button>
            </LoginContainer>
        </Container>
    )
}

export default ResetPasswordPage
