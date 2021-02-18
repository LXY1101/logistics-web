<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="formUsers.user" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="类别">
          <el-select v-model="value" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="dialogFormVisible = true"
          >新增</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button
                type="primary"
                @click="dialogFormVisible = false"
              >确 定</el-button>
            </div>
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="Delete">批量删除</el-button>
        </el-form-item>
      </el-form>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="标题" />
        <el-table-column prop="address" label="状态" />
        <el-table-column prop="phone" label="类别" />
        <el-table-column prop="state" label="发布时间" />
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button>
            <el-button type="text" size="small">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {
      formUsers: {},
      tableData: [
        {
          id: '123847533339282934',
          name: 'admin',
          address: '1655526355@qq.com',
          phone: '12736555652',
          state: '已登录',
          time: '2019/12/3 19:12'
        },
        {
          id: '123818873141282934',
          name: 'user',
          address: '55188636355@qq.com',
          phone: '16452555652',
          state: '已登录',
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
  created() {},
  methods: {
    onSubmit() {},
    add() {},
    Delete() {},
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
