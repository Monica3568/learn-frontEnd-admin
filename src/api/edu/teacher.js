import request from '@/utils/request'

export default {

  // 1 讲师列表(条件查询带分页)
  getTeacherListPage(page, limit, teacherQuery) {
    return request({
      url: `/eduservice/teacher/pageTeacherCondition/${page}/${limit}`,
      method: 'post',
      // 后端使用requestBody获取数据，前端需要传json
      data: teacherQuery
    })
  },

  removeById(teacherId) {
        return request({
            url: `/eduservice/teacher/deleteById/${teacherId}`,
            method: 'delete'
        })
    },
  save(teacher) {
      return request({
          url: `/eduservice/teacher/add`,
          method: 'post',
          data: teacher
      })
  }
}
