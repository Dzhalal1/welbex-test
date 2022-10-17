import {ApiService} from "@/services/api";

const state = () => ({})

// getters
const getters = {}

// actions
const actions = {
    async getTable(ctx, {pagination, filter, sortProps}) {
        return new ApiService().getData(pagination, filter, sortProps)
    },
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