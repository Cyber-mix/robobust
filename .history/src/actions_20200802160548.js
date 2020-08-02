import { CHANGE_SEARCH_FIELD } from './ca'

export const setSearchField = (text) => ({
    tpye: 'CHANGE_SEARCH_FIELD',
    payload: text
})