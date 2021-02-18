<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formUsers.user" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="Delete">批量删除</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange"  border>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date">
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
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click="dialogFormVisible = true">修改</el-button>

            <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item  class="input" label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="input" label="学院" :label-width="formLabelWidth">
                  <el-input  v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="input" label="专业班级" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="input" label="联系方式" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              </div>
            </el-dialog>
          </template>
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
    name: "query",
    created() {},
    data(){
      return{
        formUsers:{},
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }, {
          date: '2016-05-05',
          name: '王小虎',
          address: '数学与统计学院',
          class: '17信管1班',
          phone: '13455432665'
        }],
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
    methods:{
      onSubmit(){},
      Delete(){},
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>
.input{
  width: 80%!important;
  margin-bottom: 10px!important;
}
</style>
