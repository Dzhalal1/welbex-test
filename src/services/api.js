function formatDate(str) {
    return str.split('-').reverse().join('.')
}

export class ApiService {
    rawData = [
        {
            date: '2022-10-11',
            title: 'blue',
            count: 5,
            distance: 25,
        },
        {
            date: '2022-10-12',
            title: 'red',
            count: 1,
            distance: 32,
        },
        {
            date: '2022-10-15',
            title: 'green',
            count: 6,
            distance: 78,
        }, {
            date: '2022-10-15',
            title: 'green',
            count: 4,
            distance: 67,
        }, {
            date: '2022-10-15',
            title: 'teal',
            count: 2,
            distance: 59,
        }, {
            date: '2022-10-15',
            title: 'darken',
            count: 5,
            distance: 87,
        }, {
            date: '2022-10-15',
            title: 'green',
            count: 5,
            distance: 87,
        }, {
            date: '2022-10-15',
            title: 'white',
            count: 7,
            distance: 99,
        }, {
            date: '2022-10-18',
            title: 'black',
            count: 8,
            distance: 53,
        }, {
            date: '2022-10-09',
            title: 'pink',
            count: 4,
            distance: 67,
        }, {
            date: '2022-10-19',
            title: 'yellow',
            count: 3,
            distance: 55,
        },
    ]
    filterConditions = [
        {title: 'Больше', value: 1},
        {title: 'Меньше', value: 2},
        {title: 'Равно', value: 3},
        {title: 'Содержит', value: 4}
    ]

    getData(pagination = {page: 0, count: 0}, filter = {column: null, value: null, condition: null}, sortProps = {}) {
        let end = pagination.page * pagination.count
        const start = end - pagination.count
        const filteredData = this.getFilterData(filter, sortProps)
        end = end > filteredData.length ? filteredData.length : end
        const data = filteredData.map((item) => {
            return {
                ...item,
                date: formatDate(item.date)
            }
        }).slice(start, end)
        return {data, total: filteredData.length}
    }

    getSortedData({column, direction}) {
        if (column && !isNaN(direction))
            return this.rawData.sort((prev, next) => {
                if (prev[column] > next[column]) {
                    return 1 * direction
                }
                if (prev[column] < next[column]) {
                    return -1 * direction
                }
                return 0
            })
        return this.rawData
    }

    getFilterData({condition, value, column}, sortProps) {
        console.log(sortProps)
        const data = this.getSortedData(sortProps)
        if (!condition || !value || !column)
            return data
        let filterFunc = (item) => true || item
        if (condition === 1)
            filterFunc = (item) => item[column] > value
        if (condition === 2)
            filterFunc = (item) => item[column] < value
        if (condition === 3)
            filterFunc = (item) => String(item[column]) === value
        if (condition === 4)
            filterFunc = (item) => String(item[column]).includes(value)
        return data.filter(filterFunc)
    }
}