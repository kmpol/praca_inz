import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setGender } from '../actions/filters'

const Container = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    cursor: pointer;
`

const MainCategoryFirst = styled.div`
flex: 1;
`
const MainCategorySecond = styled.div`
flex: 1;

`

const Category = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const CategoryImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const CategoryInfo = styled.h3`
    position: absolute;
    text-decoration: none;
    font-weight: 700;
    font-size: 3rem;
    color: black;
`


const MainCategories = () => {
    const dispatch = useDispatch()

    const setFilterToWomen = (e) => {
        dispatch(setGender("women"))
    }

    const setFilterToMen = (e) => {
        dispatch(setGender("men"))
    }
    return (
        <Container>
            <MainCategoryFirst>
                <Link to="/products" onClick={setFilterToMen}>
                    <Category >
                        <CategoryImage src="https://media.gettyimages.com/photos/closeup-smiling-male-leader-wearing-eyeglasses-picture-id1179627340?s=2048x2048" />
                        <CategoryInfo>Men</CategoryInfo>
                    </Category>
                </Link>
            </MainCategoryFirst>
            <MainCategorySecond >
                <Link to="/products" onClick={setFilterToWomen}>
                    <Category>
                        <CategoryImage src="https://3nih9o367186ft57b1fkswsq-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg" />
                        <CategoryInfo>Women</CategoryInfo>
                    </Category>
                </Link>
            </MainCategorySecond>
        </Container>
    )
}

export default MainCategories
