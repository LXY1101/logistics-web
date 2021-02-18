<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item label="编号">
          <el-input v-model="formUsers.user"></el-input>
        </el-form-item>
        <el-form-item label="物品名称">
          <el-input v-model="formUsers.user"></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formUsers.user"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="num" label="序号">
        </el-table-column>
        <el-table-column prop="id" label="编号">
        </el-table-column>
        <el-table-column prop="name" label="物品名称">
        </el-table-column>
        <el-table-column prop="address" label="物品单位">
        </el-table-column>
        <el-table-column prop="phone" label="规格">
        </el-table-column>
        <el-table-column prop="address" label="供应商">
        </el-table-column>
        <el-table-column prop="time" label="类别">
        </el-table-column>
        <el-table-column prop="state" label="库存数量">
        </el-table-column>
        <el-table-column prop="time" label="采购数量">
        </el-table-column>
        <el-table-column prop="time" label="总价">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'purchase',
  created() {
  },
  data() {
    return {
      formUsers: {},
      tableData: [
        {
          num: '1',
          id: '1238475',
          name: '茶叶',
          address: '罐',
          phone: '材料',
          state: '555',
          time: '2019/12/3 19:12'
        },
        {
          num: '2',
          id: '12381887',
          name: '大米',
          address: '袋',
          phone: '材料',
          state: '133',
          time: '2019/12/11 10:12'
        }

      ],
      multipleSelection: [],
      currentPage4: 4,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    onSubmit() {
    },
    add() {
    },
    Delete() {
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    deleteRow(index, rows) {
      rows.splice(index, 1)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>

</style>
