import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getShopConfig } from '../api';

import Navbar from '../components/Navbar'

const TermsPage = () => {

    const [terms, setTerms] = useState('')

    useEffect(() => {
        getShopConfig().then((res) => {
            setTerms(res.data.terms_of_use)
        }).catch((e) => {
            console.log(e)
        })
    }, [])

    var theArray = terms.split(/\n+/);
    console.log(theArray)

    return (
        <>
            <Navbar />
            REGULAMIN:
            {
                theArray.map((item) => <p>{item}</p>)
            }
        </>
    )
}

export default TermsPage