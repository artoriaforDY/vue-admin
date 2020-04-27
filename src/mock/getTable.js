let list = {
	status: 200,
	message: 'success',
	data: {
		total: 100,
		'list|10': [{
			id: '@id',
			name: '@name',
			createtime: /[19|20][0-9]{2}-(0[1-9]]|1[0-2]])-(0[1-9]|1[0-9]|2[0-8])/
		}]
	}
}

// export default {
// 	'get|/getTable/index': list
// }

export default {
	tableData: confit => {
		// confit中存放的是{url: "/list/index", type: "GET", body: null}
		// body是传过来的值
		console.log(confit)
		return Mock.mock({
			list
		})
	}
}