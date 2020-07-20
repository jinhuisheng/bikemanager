<template>
  <div style="width:80%;float:right">
    <h1>用户管理</h1>
    <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <router-link :to="{path:'userDetail/'+ scope.row.name}">
            <el-button type="text" size="small">查看</el-button>
          </router-link>
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next" @current-change="currentPage"
      :total="50">
    </el-pagination>
  </div>
</template>

<script type="es6">
import {getUsersUrl} from "../api/api";
import userDetail from "./userDetail";

export default {
    name: "users",
    data() {
        return {
            items: [],
            pagination: {
                current_page: 1,
                per_page: 10,
                total: 0,
                total_pages: 0
            }
        }
    },
    methods: {
        getIterms() {
            let obj = {
                params: {
                    page: this.pagination.current_page,
                    page_size: this.pagination.per_page
                }
            }
            getUsersUrl(obj).then(res => {
                this.items = res.data.data
                this.pagination = res.data.pagination
            })
        },
        currentPage(value) {
            this.pagination.current_page = value
            this.getIterms()
        },
        handleClick(row) {
            console.log(row);
            console.log(row.name)
            console.log(row.address)
        }
    },
    mounted() {
        this.getIterms()
    }

}
</script>

<style scoped>

</style>
