export default (products, { gender, size, color }) => {
    return products.filter((product) => {
        const genderMatch = gender ? product.gender.toLowerCase() === gender.toLowerCase() : true
        const sizeMatch = size ? product.size.toLowerCase() === size.toLowerCase() : true
        const colorMatch = color ? product.color.toLowerCase() === color.toLowerCase() : true

        return genderMatch && sizeMatch & colorMatch
    })
}
