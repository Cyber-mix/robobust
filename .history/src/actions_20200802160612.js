import { CHANGE_SEARCH_FIELD } from './constants'

export const setSearchField = (text) => ({
    tpye: 'CHANGE_SEARCH_FIELD',
    payload: text
})