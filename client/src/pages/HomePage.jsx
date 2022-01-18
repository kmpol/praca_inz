import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/products'
import Footer from '../components/Footer'
import MainCategories from '../components/MainCategories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            <Navbar />
            <Slider />
            {/* Products -> HotProducts. ADMIN -> Set hot products */}
            <Products />
            <MainCategories />
            <Footer />
        </div>
    )
}

export default HomePage
