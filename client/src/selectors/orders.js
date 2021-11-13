export default (orders, { status, sortBy }) => {
    return orders.filter((order) => {
        const statusMatch = status ? order.status.toLowerCase() === status.toLowerCase() : true

        return statusMatch
    }).sort((a, b) => {
        if (sortBy === 'dateAsc') {
            return a.createdAt < b.createdAt ? -1 : 1
        } else if (sortBy === 'dateDesc') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amountDesc') {
            return a.payment.amount < b.payment.amount ? 1 : -1
        } else if (sortBy === 'amountAsc') {
            return a.payment.amount < b.payment.amount ? -1 : 1
        } else {
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })
}
