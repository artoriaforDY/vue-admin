import Mock from "mockjs"
const Random = Mock.Random;
let list = {
	total: 100,
	'list|10': [{
		id: '@id',
		name: '@name',
		'birth': '@date',
		'createtime': '@date @time',
		'address': '@cword(10,50)',
		'sex|1-2': 1,
		'age|20-40': 23,
	}]
}

export default {
	'get|/getTable/index': list
}
