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
    min-height: 12vh;
`

const FormButton = styled.button``

const PrivacyPolicyComponent = ({ privacy, exists }) => {
    const dispatch = useDispatch()

    const [privacyState, setPrivacyState] = useState(privacy)

    const onEmailClick = (e) => {
        e.preventDefault()
        if (exists) {
            dispatch(updateShopConfig({ privacy_policy: privacyState }))

        } else {
            dispatch(createShopConfig({ privacy_policy: privacyState }))
        }
    }

    const onTermsChange = (e) => {
        setPrivacyState(e.target.value)
    }

    return (
        <Form>
            Shop privacy policy:
            <FormInput name='terms' type="text" defaultValue={privacy} onChange={onTermsChange} placeholder="name" />
            <FormButton onClick={onEmailClick}>Save privacy policy</FormButton>
        </Form>
    )
}

export default PrivacyPolicyComponent