function formatDate(str) {
    return str.split('-').reverse().join('.')
}

const state = () => ({})

// getters
const getters = {}


// actions
const actions = {
    async getTable() {
        return [
            {
                date: '2022-10-11',
                title: 'blue',
                count: 5,
                distance: 25,
            },
            {
                date: '2022-10-12',
                title: 'red',
                count: 4,
                distance: 32,
            },
            {
                date: '2022-10-15',
                title: 'green',
                count: 5,
                distance: 87,
            },
        ].map((item) => {
            return {
                ...item,
                date: formatDate(item.date)
            }
        })
    }
}

// mutations
const mutations = {}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}