import { CHANGE_INPUT , ADD_ITEM , DELETE_ITEM} from './actionType'



const defaultState = {
    inputValue : 'Write Something',
    list:[
        '2222',
        '3333'
    ]
}
export default (state = defaultState , action) => {
    if(action.type === CHANGE_INPUT){
        let newState =JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type === ADD_ITEM){
        let newState =JSON.parse(JSON.stringify(state))
        //console.log(newState.inputValue)
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type === DELETE_ITEM){
        let newState =JSON.parse(JSON.stringify(state))
        //console.log(newState.inputValue)
        newState.list.splice(action.index,1)
        newState.inputValue=''
        return newState
    }
    return state
}