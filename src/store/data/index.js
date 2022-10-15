const state = () => ({})

// getters
const getters = {}

function formatDate(str) {
    return str.split('-').reverse().join('.')
}

// actions
const actions = {
    async getTable() {
        return [
            {
                date: '2022-10-15',
                title: '',
                count: 0,
                distance: 0,
            },
            {
                date: '2022-10-15',
                title: '',
                count: 0,
                distance: 0,
            },
            {
                date: '2022-10-15',
                title: '',
                count: 0,
                distance: 0,
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