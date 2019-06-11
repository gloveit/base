<template>
	<div>
		<spike :start-time="startTime" :end-time="endTime"></spike>
	</div>
</template>

<script>
import moment from "moment";
import spike from './spike'
export default {
	name:"index",
	components:{
		spike
	},
	data() {
    return {
      startTime: moment("2019-05-31 11:42:00"),
      endTime: moment("2019-05-31 11:45:00")
    };
  }
}
</script>


