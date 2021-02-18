<template>
  <div class="app-container">
    <div class="middle-container">
      <el-form :inline="true" :model="formUsers" class="demo-form-inline">
        <el-form-item label="菜单名称">
          <el-input v-model="formUsers.user" placeholder="请输入菜单名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
      <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="name" label="菜单名称" >
        </el-table-column>
        <el-table-column prop="level" label="层级">
        </el-table-column>
        <el-table-column prop="kind" label="类型">
        </el-table-column>
        <el-table-column prop="address" label="请求地址">
        </el-table-column>
        <el-table-column prop="state" label="状态">
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
    </div>
  </div>
</template>

<script>
    export default {
      name: "menu",
      created() {},
      data(){
        return{
          formUsers:{},
          tableData: []
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
      }

    }
</script>

<style scoped>

</style>
