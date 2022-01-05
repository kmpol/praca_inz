export default (products, { gender, size, color, mainCategory }) => {
    return products.filter((product) => {
        const genderMatch = gender ? product.gender.toLowerCase() === gender.toLowerCase() : true
        const sizeMatch = size ? product.size.toLowerCase() === size.toLowerCase() : true
        const colorMatch = color ? product.color.toLowerCase() === color.toLowerCase() : true
        const isActiveSaleMatch = product.isActiveSale
        const mainCategoryMatch = mainCategory ? product.mainCategory.toLowerCase() === mainCategory.toLowerCase() : true

        return genderMatch && sizeMatch & colorMatch & mainCategoryMatch && isActiveSaleMatch
    })
}
