<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formUsers.user" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="name" label="图片" >
        </el-table-column>
        <el-table-column prop="level" label="活动项目">
        </el-table-column>
        <el-table-column prop="kind" label="访问数">
        </el-table-column>
        <el-table-column prop="address" label="创建时间">
        </el-table-column>
        <el-table-column prop="state" label="状态" sortable column-key="state">
        </el-table-column>
        <el-table-column prop="other" label="备注">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
            <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
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
    created() {},
    data(){
      return{
        formUsers:{},
        tableData: [],
        currentPage4: 4
      }
    },
    methods:{
      onSubmit(){},
      add(){},
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleEdit(index, row) {
        console.log(index, row);
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
