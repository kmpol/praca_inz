import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #eeeeee;
`

const First = styled.div`
    flex: 1;
`
const Title = styled.p`
    font-size: 32px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Description = styled.p`
    display: flex;
    text-align: justify;
    margin: 16px;
`

const Second = styled.div`
    flex: 1;
`

const Third = styled.div`
    flex: 1;
`

const Footer = () => {
    return (
        <Container>
            <First>
                <Title>myShop</Title>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, labore tempora? Suscipit voluptatum optio quod accusantium maiores quasi, dolorum expedita consequuntur fugiat beatae veritatis voluptatem odio vitae iusto sapiente modi dignissimos neque. Obcaecati, accusamus minus perferendis temporibus culpa dolores placeat.</Description>
            </First>
            <Second>
                <Title>myShop</Title>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, labore tempora? Suscipit voluptatum optio quod accusantium maiores quasi, dolorum expedita consequuntur fugiat beatae veritatis voluptatem odio vitae iusto sapiente modi dignissimos neque. Obcaecati, accusamus minus perferendis temporibus culpa dolores placeat.</Description>
            </Second>
            <Third>
                <Title>myShop</Title>
                <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, labore tempora? Suscipit voluptatum optio quod accusantium maiores quasi, dolorum expedita consequuntur fugiat beatae veritatis voluptatem odio vitae iusto sapiente modi dignissimos neque. Obcaecati, accusamus minus perferendis temporibus culpa dolores placeat.</Description>
            </Third>
        </Container>
    )
}

export default Footer
