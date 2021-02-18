<template>
  <div class="app-container">
    <div class="middle-container">
      <!--<div class="title">发布活动</div>-->
      <div class="publish">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动地点">
            <el-input v-model="form.region"></el-input>
          </el-form-item>
          <el-form-item label="举办单位/组织">
            <el-input v-model="form.organization"></el-input>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动说明">
            <el-input v-model="form.ff"></el-input>
          </el-form-item>
          <el-form-item label="活动内容">
            <el-input v-model="form.hh"></el-input>
          </el-form-item>
          <el-form-item label="报名人数">
            <el-input v-model="form.uu"></el-input>
          </el-form-item>
          <el-form-item label="添加图片">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :plain="true" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        organization: '',
        ff: '',
        hh: '',
        uu: ''
      },
      imageUrl: ''
    }
  },

  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    onSubmit() {
      this.$message('创建成功')
    }
  }
}
</script>

<style scoped>
  .el-form {
    margin-left: 10%;
  }
</style>
