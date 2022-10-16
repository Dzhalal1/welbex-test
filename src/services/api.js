function formatDate(str) {
    return str.split('-').reverse().join('.')
}

export class ApiService {
    getData(pagination = {page: 0, count: 0}) {
        const end = pagination.page * pagination.count
        const start = end - pagination.count
        const ravData = [
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
        const data = ravData.map((item) => {
            return {
                ...item,
                date: formatDate(item.date)
            }
        }).slice(start, end)
        return {data, total: ravData.length}
    }
}