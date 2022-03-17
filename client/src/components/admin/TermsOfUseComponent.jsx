import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { updateShopConfig, createShopConfig } from '../../actions/admin/shopConfig'

const Container = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 5vh;

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

const FormInput = styled.textarea`
    margin: 1vh 0;
    min-height: 24vh;
`

const FormButton = styled.button``

const TermsOfUseComponent = ({ terms, exists }) => {
    const dispatch = useDispatch()

    const [termsState, setTermsState] = useState(terms)

    const onEmailClick = (e) => {
        e.preventDefault()
        if (exists) {
            dispatch(updateShopConfig({ terms_of_use: termsState }))

        } else {
            dispatch(createShopConfig({ terms_of_use: termsState }))
        }
    }

    const onTermsChange = (e) => {
        setTermsState(e.target.value)
    }

    return (
        <Form>
            Shop terms of use:
            <FormInput name='terms' type="text" defaultValue={termsState} onChange={onTermsChange} placeholder="name" />
            <FormButton onClick={onEmailClick}>Save terms of use</FormButton>
        </Form>
    )
}

export default TermsOfUseComponent