<template>
  <div>
		<p>购物商城</p>
		<div v-for="item in products" :key="item.id">
			<p>
				<span>商品名称:</span>
				<span>{{item.title}}</span>
				<span>商品价格:</span>
				<span>{{item.price}}</span>
				<span>商品数量:</span>
				<span>{{item.inventory}}</span>
				<input type="number" value="0">
				<button @click="handleAddShop(item)">添加到购物车</button>
			</p>
		</div>
		<h2>购物车</h2>
		<div>
        {{ca}}
		</div>
		<button>购买</button>
		<p>{{cartN}}</p>
	</div>
</template>

<script>
import products from '../../api/shop.js'
import {mapState, mapGetters} from 'vuex'
export default {
  data() {
    return {
			products:''
		}
	},
	computed:{
		...mapGetters({
			ca:'cart/ca'
		}),
		// ca(){
		// 	console.log(this.$store.getters['cart/ca'])
		// 	return this.$store.getters['cart/ca']
		// },
		...mapState({
			cartN:(state)=>state.cart.cartName
		})
		// cartN(){
		// 	console.log(this.$store.state.cart.cartName)
		// 	return this.$store.cartName
		// }
	},
  methods:{
		handleAddShop (data) {
			this.$store.dispatch('cart/handleCarts',data)
		}
	},
	beforeMount () {
		this.products = products;
	},
	mounted () {
	}
};
</script>

