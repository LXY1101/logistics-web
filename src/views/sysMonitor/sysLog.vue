<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formUsers.user" placeholder="用户名/用户操作"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
                @selection-change="handleSelectionChange"  border>
        <el-table-column prop="id" label="ID" >
        </el-table-column>
        <el-table-column prop="name" label="用户名">
        </el-table-column>
        <el-table-column prop="address" label="用户操作">
        </el-table-column>
        <el-table-column prop="address" label="请求方法">
        </el-table-column>
        <el-table-column prop="address" label="请求参数">
        </el-table-column>
        <el-table-column prop="address" label="执行时长（毫秒）">
        </el-table-column>
        <el-table-column prop="address" label="IP地址">
        </el-table-column>
        <el-table-column prop="address" label="创建时间">
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
        name: "sysLog",
      created() {},
      data(){
        return{
          formUsers:{},
          tableData:[],
          multipleSelection: [],
          currentPage4: 4
        }
      },
      methods:{
        onSubmit(){},
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
