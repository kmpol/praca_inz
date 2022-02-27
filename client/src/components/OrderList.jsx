import React from 'react'
import styled from 'styled-components'

import Order from './Order'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;

`

const OrderList = ({ orders }) => {
    return (
        <Wrapper>
            {
                orders.length === 0 ? (
                    "No orders"
                ) : (
                    orders.map((order) => <Order item={order} />)
                )
            }
        </Wrapper>
    )
}

export default OrderList