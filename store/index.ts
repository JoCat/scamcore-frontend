import { GetterTree, MutationTree } from 'vuex'
export type RootState = ReturnType<typeof state>

export const state = () => ({
  lang: 'ru'
})

export const mutations: MutationTree<RootState> = {
  setLang: (state, lang: string) => (state.lang = lang),
}

export const getters: GetterTree<RootState, RootState> = {
  lang: state => state.lang,
}
