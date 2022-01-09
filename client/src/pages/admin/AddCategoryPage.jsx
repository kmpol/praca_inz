import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import Sidebar from '../../components/admin/Sidebar'

import CategoryForm from '../../components/admin/CategoryForm'
import { addCategory } from '../../actions/admin/categories'
import { useState } from 'react'


const Container = styled.div`
    display: flex;
    width: 100%;
`

const AddCategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20vw;
    width: 100%;
`

const AddCategoryPage = () => {
    const [isDuplicated, setIsDuplicated] = useState(false)
    const dispatch = useDispatch()

    const onSaveClickAdd = (category) => {
        dispatch(addCategory(category, setIsDuplicated))
    }
    return (
        <Container>
            <Sidebar />
            <AddCategoryContainer>
                <CategoryForm categoryProp={undefined} onSaveClick={onSaveClickAdd} />
                {isDuplicated && "Duplicated category!"}
            </AddCategoryContainer>
        </Container>

    )
}

export default AddCategoryPage
