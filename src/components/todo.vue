<template>
 <div>
    <input 
      @keydown.enter="addTask"
      class="edit"
      type="text"
      v-model="task.content"
      placeholder="编写任务">
    <div class="list">
      <div class="unit" v-for="(item,index) in list" :key="index">
          <input @click="changeState(index)"
                 :checked="item.finished"
                 type="checkbox">
          <span :class="{'finish':item.finished}">{{item.content}}</span>
           <button @click="removeTask(index)" class="del">删除</button>
      </div>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    props: {},
    data() {
      return {
         //默认
        task:{
              content:'',//内容为空
          finished:false,//未完成
          deleted:false//未删除
          },
            //任务列表
          list:[]
      };
    },
    methods:{
      addTask(){
          //将task存入list数组
        this.list.push(this.task);
            //存入list[]后，重置task
            this.task = {
              content:'',//内容为空
              finished:false,//未完成
              deleted:false//未删除
            }
        },
        //点击修改任务状态
        changeState:function(index){
          let curState =  this.list[index].finished;
          this.list[index].finished = !curState;
        },
        removeTask:function(index){
          //使用splice操作删除数组指定项
          this.list.splice(index,1);
        }
      }
  };
</script>

<style scoped>
.edit{
    display:block ;
    width:80%;
    height: 35px;
    line-height: 35px;
    margin: 30px auto;
    box-sizing: border-box;
    padding-left: 4px;
    border-radius: 4px;
    border:1px solid #ccc;
    outline: 0;
    box-shadow: 0 0 5px #ccc;
 }
  .list{
    margin: 0 auto;
    width:80%;
 }
 .unit{
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid #efefef;
    text-align: left;
    font-size: 30px;
 }
 input[type='checkbox'] {
   width: 20px;
   height: 20px;
 }
 .unit:last-child{
    border-bottom: 0;
 }
  .finish{
    text-decoration: line-through;
    color: #ccc;
 }
 .del{
    background: red;
    text-decoration: none;
    position: absolute;
    right:0;
    font-size: 12px;
    border: 0;
    outline: 0;
    padding: 2px 5px;
    border-radius: 5px;
    color: #fff;
 }
 
</style>
