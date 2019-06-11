/**
 * 获取行数据
 * @rowData 行数据
 */
const getTableRowData = (data) =>{
  console.log(data);
  // if(data === '' ||data === undefined || data === null){
  //   console.log("参数data为空:"+data);
  //   return false
  // }else{
  //   return data
  // }
  return data
}

/**
 * form数据回填
 * @formId 表单Id
 * @reId form表单绑定的ref
 */
const bindTableRow = (formId,reId,data) =>{
  // let data = getTableRowData()
  // console.log(data);
  // if(formId === '' ||formId === undefined || formId === null){
  //   console.log("参数formId为空:"+formId);
  //   return false
  // }
	// if(reId === '' ||reId === undefined || reId === null){
  //   console.log("参数reId为空:"+reId);
  //   return false
  // }
  console.log(data)
  return data
}

/**
 * @rowData 选中行数据
 * @callback 回调函数
 */
const rowSelect = (rowData,callback) => {
	return {
		on: {
			click: ()=>{
				if(rowData instanceof Object !== true){
          console.log("参数rowData为空:"+rowData);
          return false
				}
				if(callback instanceof Function !== true ){
					console.log("参数callback为空")
        }
        console.log(rowData);
        bindTableRow("formId","reId",rowData)
			}
		}
	}
}

export {bindTableRow , rowSelect}
// Vue.prototype.$rowSelect = rowSelect;
//export导出时可以导出多个，import时采用{}引入。export default只能导出一个，引入时不考虑名称，可以自定义
// export const rowSelect = (rowData) => {
// 	return {
// 		on: {
// 			click: ()=>{
// 					console.log(rowData)
// 			}
// 		}
// 	}
// }
