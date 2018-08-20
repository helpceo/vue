<script>
import http from '../../plugins/axios'
// import Vuex from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  beforeCreate() {
    http.get('/user?id=1').then((res)=>{
      console.log(res.data)
    })
  },
  created(){
    this.userItem({name: '笑脸'})
    console.log(_.isBoolean(true))
    console.log(process.env.VUE_APP_HOAT)
  },
  methods:{
  ...Vuex.mapActions('home', [
      'userItem'
    ])
}
}
</script>
<template src = "./index.html"></template>
<style src = "./index.scss" lang="scss"></style>
