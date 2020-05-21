Page({
  data:{
    name:'巴啦啦能量',
    age:18,
    students:[
      {id:110,name:'张三',age:23},
      {id:111,name:'李四',age:24},
      {id:112,name:'王五',age:25},
      {id:113,name:'马六',age:26},
    ],
    counter:0
  },
  handleBtnClick(){
    // 1.错误做法，界面不会刷新
    // this.data.counter+=1
    // console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter:this.data.counter+1
    })
  },
  handleSubtraction(){
    this.setData({
      counter:this.data.counter-1
    })
  }
})