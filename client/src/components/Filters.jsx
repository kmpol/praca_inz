import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { setGender, setSize, setColor, setMainCategory } from '../actions/filters'

const Container = styled.div`
    display: flex;
    width: 100%;
`

const FilterName = styled.h3`

`

const Filter = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`


const GenderFilter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MainCategoryFilter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const SizeFilter = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ColorFilter = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Select = styled.select``

const Option = styled.option``

const Filters = () => {
    const dispatch = useDispatch()
    const filters = useSelector(state => state.filters)
    const categoriesArray = useSelector(state => state.products).map((item) => item.mainCategory)
    const categories = [...new Set(categoriesArray)]

    useEffect(() => {
        filters.gender && selectElement("gender", filters.gender)
        filters.size && selectElement("size", filters.size)
        filters.color && selectElement("color", filters.color)
    }, [filters])

    const onGenderSelect = (e) => {
        const gender = e.target.value
        dispatch(setGender(gender))
    }

    const onCategoryChange = (e) => {
        const mainCategory = e.target.value
        console.log(mainCategory)
        dispatch(setMainCategory(mainCategory))
    }

    const onSizeSelect = (e) => {
        const size = e.target.value
        dispatch(setSize(size))
    }

    const onColorSelect = (e) => {
        const color = e.target.value
        dispatch(setColor(color))
    }


    function selectElement(id, value) {
        let element = document.getElementById(id);
        element.value = value;
    }

    return (
        <Container>
            <Filter>
                <GenderFilter>
                    <FilterName>Gender:</FilterName>
                    <Select id="gender" onChange={onGenderSelect}>
                        <Option value="">All</Option>
                        <Option value="men">Men</Option>
                        <Option value="women">Women</Option>
                    </Select>
                </GenderFilter>
                <MainCategoryFilter>
                    <FilterName>Main Category:</FilterName>
                    <Select id="mainCategory" onChange={onCategoryChange}>
                        <Option value="">All</Option>
                        {categories.map((category) => <Option key={category} value={category}>{category}</Option>)}
                    </Select>
                </MainCategoryFilter>
                <SizeFilter>
                    <FilterName>Size:</FilterName>
                    <Select id="size" onChange={onSizeSelect}>
                        <Option value="">All</Option>
                        <Option value="M">M</Option>
                        <Option value="L">L</Option>
                        <Option value="XL">XL</Option>
                    </Select>
                </SizeFilter>
                <ColorFilter>
                    <FilterName>Color:</FilterName>
                    <Select id="color" onChange={onColorSelect}>
                        <Option value="">All</Option>
                        <Option value="black">Black</Option>
                        <Option value="white">White</Option>
                        <Option value="green">Green</Option>
                        <Option value="yellow">Yellow</Option>
                    </Select>
                </ColorFilter>
            </Filter>
        </Container>
    )
}

export default Filters
