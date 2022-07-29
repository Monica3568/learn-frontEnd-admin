<template>
  <div class="app-container" />
</template>

<script>
import teacher from '@/api/edu/teacher'
export default {
  data() { // 定义变量和初始值
    return {
      list: null,
      total: 0,
      page: 1,
      limit: 10,
      teacherQuery: {}
    }
  },
  created() { // 页面渲染之前执行，一般调用methods定义的方法
    this.getList()
  },
  methods: { // 创建具体的方法，掉用teacher.js的方法
    getList() {
      teacher.getTeacherListPage(this.page, this.limit, this.teacherQuery)
        .then(response => {
          console.log(response)
        }) // 请求成功
        .catch(error => {
          console.log(error)
        }) // 请求失败
    }
  }
}
</script>
