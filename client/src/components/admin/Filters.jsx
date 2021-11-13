import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { setStatus, setSortBy } from '../../actions/admin/filters'

const Component = styled.div`
    width: 100%;
    display: flex;
`

const FilterContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const FilterTitle = styled.h2`
    display: flex;
    justify-content: center;
`

const Filter = styled.div`
    display: flex;
`

const FilterName = styled.h4`
    margin: 10px 26px;
`

const Select = styled.select``
const Option = styled.option``

const SortingContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const SortingTitle = styled.h2`
    display: flex;
    justify-content: center;
`

const Filters = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("Filters render")
        dispatch(setStatus(""))
        dispatch(setSortBy(""))
    }, [])

    const onFilterChange = (e) => {
        dispatch(setStatus(e.target.value))
    }

    const onSortByChange = (e) => {
        dispatch(setSortBy(e.target.value))
    }

    return (
        <Component>
            <FilterContainer>
                <FilterTitle>Filers</FilterTitle>
                <Filter>
                    <FilterName>Status:</FilterName>
                    <Select id="status" onChange={onFilterChange}>
                        <Option value="">All</Option>
                        <Option value="new">New</Option>
                        <Option value="inProgress">In Progress</Option>
                        <Option value="shipped">Shipped</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <SortingContainer>
                <SortingTitle>Sort</SortingTitle>
                <Filter>
                    <FilterName>Sort By:</FilterName>
                    <Select id="sortBy" onChange={onSortByChange}>
                        <Option value="dateDesc">Date (desc)</Option>
                        <Option value="dateAsc">Date (asc)</Option>
                        <Option value="amountDesc">Amount (desc)</Option>
                        <Option value="amountAsc">Amount (asc)</Option>
                    </Select>
                </Filter>
            </SortingContainer>
        </Component>
    )
}

export default Filters
