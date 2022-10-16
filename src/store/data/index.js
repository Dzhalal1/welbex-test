import {ApiService} from "@/services/api";

const state = () => ({})

// getters
const getters = {}

// actions
const actions = {
    async getTable(ctx, pagination) {
        return new ApiService().getData(pagination)
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