import React, { Component } from 'react';
import store from './store'
import { changeInputAction , addItem , deleteItem} from './store/actionCreator'
import TodoListUI from './TodoListUi'
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state=store.getState()
        this.changeInputValue=this.changeInputValue.bind(this)
        this.storeChange=this.storeChange.bind(this)
       
        this.clickBtn=this.clickBtn.bind(this)
        store.subscribe(this.storeChange)

        this.deletItem=this.deletItem.bind(this)
    }
    render() { 
        return ( 
            <TodoListUI
            inputValue={this.state.inputValue}
            list={this.state.list}
            changeInputValue={this.changeInputValue}
            clickBtn={this.clickBtn}
            deletItem={this.deletItem}
            />
         );

    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
            console.log(res)
        })
    }
    changeInputValue(e){
        const action =changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    clickBtn(){
       
        const action = addItem()
        store.dispatch(action)
    }
    deletItem(index){
        const action = deleteItem(index)
        store.dispatch(action)
    }
}
export default TodoList;