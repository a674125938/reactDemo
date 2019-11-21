import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM} from './actionType'

export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItem = ()=>({
    type:ADD_ITEM
   
})
export const deletItem = (index)=>({
    type:DELETE_ITEM,
    index
})