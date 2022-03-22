import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getShopConfig } from '../api';

import Navbar from '../components/Navbar'

const PrivacyPage = () => {

    const [privacy, setPrivacy] = useState('')

    useEffect(() => {
        getShopConfig().then((res) => {
            setPrivacy(res.data.privacy_policy)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    var theArray = privacy.split(/\n+/);
    console.log(theArray)

    return (
        <>
            <Navbar />
            Polityka prywatności:
            {
                theArray.map((item) => <p>{item}</p>)
            }
        </>
    )
}

export default PrivacyPage