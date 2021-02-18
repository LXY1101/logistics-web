<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formUsers.user" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </el-form-item>
        <el-form-item>
          <el-button type="danger" @click="Delete">批量删除</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange"  border>
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="id" label="ID" >
        </el-table-column>
        <el-table-column prop="name" label="用户名">
        </el-table-column>
        <el-table-column prop="address" label="邮箱">
        </el-table-column>
        <el-table-column prop="phone" label="手机号">
        </el-table-column>
        <el-table-column prop="state" label="状态">
        </el-table-column>
        <el-table-column prop="time" label="创建时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small">修改</el-button>
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
      name: "user",
      created() {},
      data(){
        return{
          formUsers:{},
          tableData:[
            {
              id:'123847533339282934',
              name:'admin',
              address:'1655526355@qq.com',
              phone:'12736555652',
              state:'已登录',
              time:'2019/12/3 19:12'
            },
            {
              id:'123818873141282934',
              name:'user',
              address:'55188636355@qq.com',
              phone:'16452555652',
              state:'已登录',
              time:'2019/12/11 10:12'
            },

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
      methods:{
        onSubmit(){},
        add(){},
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

</style>
