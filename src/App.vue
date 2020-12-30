<template>
  <div id="app">

    <!-- <router-view/> -->
    <button @click="add({number: 5})">+</button>
    <button @click="Asyncadd">异步增加</button>
    <p>{{count}}</p>
    <button @click="sub({number: 3})">-</button>
    <div v-for="el in goodslist">
    <p>{{el.id}}</p>
    <p>{{el.goodsname}}</p>
    </div>
    <p>双倍：{{dbCount}}</p>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// mapstate是把仓库里面的数据映射到当前的计算属性身上
//mapMutations代表 把仓库里面同步的方法映射到对象的methods上面
//mapActions代表把仓库里面的同步的方法映射到对象methods上面
//mapGetters代表把仓库里面的getters数据映射到计算属性身上
export default {
  data: function(){
    return {
      number: 1,
    }
  },

  computed: {
    dbNumber: function( ){
      return this.number*2
    },
    //mapState含义是把仓库里面的数据映射到计算属性。参数可以是一个数组【】把仓库里面需要返回的state的key值写在数组里面即可，或者是一个对象{key(为当前的key取得别名)： value（仓库里面的key值）}
    ...mapState(['count']),
    ...mapState(['goodslist']),

    ...mapGetters(['dbCount'])
    
  },
  created() {

    console.log(this.$store, "111");
  },
  computde: [],
  methods: {

    // add(){

    //   this.$store.commit('add', {number: 3})//commit的参数一：这个标识符（用户自定义，要见名知意）就是mutations下面的一个方法
    //   //参数二： 代表提交给管理员的数据，一般把这个数据叫做payload（中文意思是：载荷）
    // },
    // sub(){
    //   this.$store.commit('sub', {number: 5})
    // },
    // Asyncadd(){
    //   this.$store.dispatch("Asyncadd")
    // }

    ...mapMutations(['add', 'sub']),
    ...mapActions(['Asyncadd'])
  }

}

</script>

<style lang="less">

</style>
