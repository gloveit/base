<template>
    <div id="model">
        <a-input placeholder="手机号" 
        type="number"
        :value="person.phone"
        @change="getPhone"
        />
        <a-input placeholder="邮箱" 
        type="email"
        :value="person.email"
         @change="getEmail"
        />
        <a-input placeholder="地址" 
        :value="address"
         @input="getAddress"
        />
    </div>
</template>

<script>
export default {
    name: 'Model',
    model: {
        prop: "person",
        event: "change"
    },
    props: {
        person:Object,
        address:String
    },
    methods:{
       getPhone(e){
           this.$emit("change",{...this.person,phone:e.target.value})
       },
       getEmail (e){
           this.$emit("change",{...this.person,email:e.target.value})
       },
       getAddress (e) {
           this.$emit("update:address",e.target.value)
       }
    }
}
</script>

