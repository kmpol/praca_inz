import React from 'react'
import styled from 'styled-components'
import ReturnItem from './ReturnItem'


const Wrapper = styled.div`
    display:flex;
    flex-direction: column;

`

const ReturnList = ({ returns }) => {
    console.log(returns)
    return (
        <Wrapper>
            {
                returns.length === 0 ? (
                    "No returns..."
                ) : (
                    returns[0].map((_return) => <ReturnItem item={_return} />)
                )
            }
        </Wrapper>
    )
}

export default ReturnList