export const setGender = (gender) => ({
    type: "SET_GENDER_FILTER",
    gender
})

export const setSize = (size) => ({
    type: "SET_SIZE_FILTER",
    size
})

export const setColor = (color) => ({
    type: "SET_COLOR_FILTER",
    color
})

export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
})

export const sortByDate = () => ({
    type: "SORT_BY_DATE"
})
