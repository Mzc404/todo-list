<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addTodo="addTodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :delTodo="delTodo"/>
        <MyFooter :todos="todos" @allCheck="allCheck" @delAllCheck="delAllCheck"/>
    	</div>
    </div>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data(){
    return{
      todos:JSON.parse(localStorage.getItem('todos'))||[]
    }
      
  },
  methods:{
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    checkTodo(todoId){
      this.todos.forEach(todo => {
        if(todo.id===todoId){
          todo.done=!todo.done
        }
      });
    },
    delTodo(todoId){
      this.todos=this.todos.filter((todo)=>{
        return todo.id!==todoId
      })
    },
    allCheck(checkStatus){
      this.todos.forEach(todo => {
        todo.done=checkStatus
      });
    },
    delAllCheck(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  watch:{
    todos :{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
}
</script>

<style>
 body {background: #fff;}
    .btn {display: inline-block;padding: 4px 12px;margin-bottom: 0;font-size: 14px;
      line-height: 20px;text-align: center;vertical-align: middle;cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;}
    .btn-danger {color: #fff;background-color: #da4f49;border: 1px solid #bd362f;}
    .btn-danger:hover {color: #fff;background-color: #bd362f;}
    .btn:focus {outline: none;}
    .todo-container {width: 600px;margin: 0 auto;}
    .todo-container .todo-wrap {padding: 10px;border: 1px solid #ddd;border-radius: 5px;
  }
</style>
