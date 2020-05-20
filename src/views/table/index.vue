<template>
	<div>
		<el-table :data="tableData.list" style="width: 100%">
			<el-table-column prop="name" label="姓名" width="180"></el-table-column>
			<el-table-column label="性别" width="100" align="center">
				<template slot-scope="scope">
					{{scope.row.sex==1 ? '男' : '女'}}
				</template>
			</el-table-column>
			<el-table-column prop="age" label="年龄" width="100" align="center"></el-table-column>
			<el-table-column prop="birth" label="出生日期" width="180"></el-table-column>
			<el-table-column prop="address" label="地址"></el-table-column>
		</el-table>
		<div class="pageBox">
			<my-pagination :total="tableData.total" :currentPage='currentPage' @page-change="changePage" @size-change="changeSize"></my-pagination>
		</div>
	</div>
</template>
<script>

export default {
	components: {
	},
	data() {
		return {
			tableData: {},
			currentPage:1
		};
	},
	created() {
		this.getTableList();
	},
	methods: {
		changeSize(){
			this.currentPage = 1
			// this.getTableList();
		},
		changePage(){
			this.getTableList();
		},
		getTableList() {
			this.$axios
				.get('/getTable/index')
				.then(res => {
					if(res.data){
					console.log('res:', res.data);
						this.tableData = res.data
					}
				})
				.catch(error => {
					console.log('error:', error);
				});
		}
	}
};
</script>
<style scoped lang="less">
	.pageBox{
		padding: 20px; text-align: right;
	}
</style>
