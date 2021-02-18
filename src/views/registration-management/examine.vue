<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formUsers.user" placeholder="输入学生姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          column-key="date">
        </el-table-column>
        <el-table-column
          prop="state"
          label="状态"
          sortable
          column-key="state">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="address"
          label="学院"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="class"
          label="专业班级"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系方式"
          show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection(scope.rows)">打印</el-button>
        <el-button type="danger" @click="Delete(scope.rows)">删除</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formUsers:{},
        tableData: [{
          state: '已报名',
          date: '2016-05-03',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-02',
          state: '未报名',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-04',
          state: '已报名',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-01',
          state: '已报名',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-05',
          state: '已报名',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {

          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      onSubmit(){},
      print(){},
      Delete(){},
    }
  }
</script>

<style scoped>

</style>
