import { createStore } from 'vuex';

export interface State {
   datas: string[]
}

export default createStore<State>({
  state: {
    datas:[]
  },
  getters: {
  },
  mutations: {
    Add_Data(state, data : string){
      state.datas.push(data);
    },

    Delete_Data(state, data: string){
      state.datas = state.datas.filter(d=> d !== data);
    }
  },
  actions: {
    openHoki({commit}, data: string){
       commit('Add_Data', data);
    },

    deleteData({commit}, data: string){
      commit('Delete_Data', data);
    }
  },

  
  modules: {
  }
})
