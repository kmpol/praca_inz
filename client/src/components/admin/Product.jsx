import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { CheckBoxOutlined, IndeterminateCheckBoxSharp } from '@material-ui/icons'
import { disableOrEnableProductSale, getProduct } from '../../actions/products'

const Container = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    padding: 12px;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
`

const OfferContainer = styled.div`
    flex: 2;
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
    overflow: hidden;

`

const Image = styled.img`
    width: 100%;
    object-fit: fill;
`

const TitleContainer = styled.div`
    flex:2;
`

const Title = styled.h4`
    margin-left: 6px;
`

const AvailabilityContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PriceContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const DetailsContainer = styled.div`
    flex:1;

`

const ProductDetails = styled.p``

const SalesContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`

const SalesDetail = styled.p`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ActionContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ConfirmationModal = styled.p`

`

const StyledCheckBoxOutlined = styled(CheckBoxOutlined)`
    color: green;
    cursor: pointer;
    margin: 6px 12px;
`

const StyledIndeterminateCheckBoxSharp = styled(IndeterminateCheckBoxSharp)`
    color: red;
    cursor: pointer;
    margin: 6px 12px;
`

const EnableDisableSales = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${props => props.isActiveSale ? "red" : "green"};

    &:hover {
        font-weight: 600;
    }
`

const EditProduct = styled.p`
    color: #1c1b50;
    cursor: pointer;
`

const Product = ({ product, sales }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [showModal, setShowModal] = useState(false)

    const quantitySales = sales.map((sale) => sale.quantity).reduce((a, b) => a + b, 0)

    const onEnableDisableClick = () => {
        setShowModal(!showModal)
    }

    const onConfirmationSalesClick = async () => {
        dispatch(disableOrEnableProductSale(product._id, !product.isActiveSale))
        setShowModal(!showModal)
    }

    const onEditProductClick = () => {
        history.push(`/admin/dashboard/products/editProduct/${product._id}`)
    }

    // console.log('sales', sales)
    return (
        <Container>
            <OfferContainer>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <TitleContainer>
                    <Title>{product.name}</Title>
                </TitleContainer>
            </OfferContainer>
            <AvailabilityContainer>{product.itemsInStock}</AvailabilityContainer>
            <PriceContainer>{(product.price).toFixed(2)} USD</PriceContainer>
            <DetailsContainer>
                <ProductDetails><strong>gender:</strong> {product.gender}</ProductDetails>
                <ProductDetails><strong>category:</strong> {product.mainCategory}</ProductDetails>
                <ProductDetails><strong>size:</strong> {product.size}</ProductDetails>
                <ProductDetails><strong>color:</strong> {product.color}</ProductDetails>
            </DetailsContainer>
            <SalesContainer>
                <SalesDetail>{quantitySales.toFixed(0)} pc(s)</SalesDetail>
            </SalesContainer>
            <ActionContainer>
                {
                    showModal ? (
                        <ConfirmationContainer>
                            <ConfirmationModal>Are you sure?</ConfirmationModal>
                            <div>
                                <StyledCheckBoxOutlined fontSize={"large"} onClick={onConfirmationSalesClick} />
                                <StyledIndeterminateCheckBoxSharp fontSize={"large"} onClick={() => { setShowModal(!showModal) }} />
                            </div>
                        </ConfirmationContainer>

                    ) : (
                        <>
                            <EnableDisableSales onClick={() => onEnableDisableClick(product._id)} isActiveSale={product.isActiveSale}>{product.isActiveSale ? "Disable sales" : "Enable sales"}</EnableDisableSales>
                            <EditProduct onClick={onEditProductClick}>Edit</EditProduct>
                        </>
                    )
                }

            </ActionContainer>
        </Container>
    )
}

export default Product
