const loadTime = ()=>{
	let t = window.performance.timing;
	let timeObj = {};
	// 页面加载时间 
	timeObj.loadPage = (t.loadEventStart - t.navigationStart)+'ms';
	// 请求时间 
	timeObj.reqContent = (t.responseEnd- t.requestStart)+'ms';
	// dom树加载时间
	timeObj.loadDomTree = (t.domComplete - t.responseEnd)+'ms'
	return timeObj
}
export default loadTime