<template>
  <div class="todo-footer" v-show="todos.length">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="testCheck"/>
    </label>
    <span>
      <span>已完成{{complete}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" @click="delAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos'],
    computed:{
      complete(){
        return this.todos.reduce((pre,current)=> pre+(current.done?1:0),0);
      },
      testCheck:{
        get(){
         
          return this.complete===this.todos.length && this.todos.length>0;
        },
        set(value){
           this.$emit('allCheck',value)
        }
      }
      
    },
    data(){
      return {
        isCheck:false
      }
    },
    methods:{
      delAll(){
        if(confirm("确定全部清空吗?")) {this.$emit('delAllCheck')};
      }
    }

}
</script>

<style scoped>
  .todo-footer {height: 40px;line-height: 40px;padding-left: 6px;margin-top: 5px;}
  .todo-footer label {display: inline-block;margin-right: 20px;cursor: pointer;}
  .todo-footer label input {position: relative;top: -1px;vertical-align: middle;
    margin-right: 5px;}
  .todo-footer button {float: right;margin-top: 5px;}
</style>