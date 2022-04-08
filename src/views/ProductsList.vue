<template>
	<div>
		
		<div class="row">
			<div class="col col-sm-4 mb-3 mt-3"
				v-for="product in products"
				:key="product.id"
			>
				<div class="card">
					<div class="card-body">
						<h3>{{ product.title }}</h3>
						<img :src="product.img" alt="img" width="150" height="150" class="d-block mx-auto">
						<div>{{ product.price }} $</div>
						<router-link :to="`/product/${product.id}`">Описание</router-link>
						<hr>
						<button v-if="inCart(product.id)" class="btn btn-danger" @click="removeFromCart(product.id)">
							Удалить
						</button>
						<button v-else class="btn btn-success" @click="addToCart(product.id)">
							Добавить в корзину
						</button>
					</div>
				</div>
			
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	

	export default {
		computed: {
			...mapGetters('products', { products: 'all' }),
			...mapGetters('cart', { inCart: 'has',})
		},
		methods: {
			...mapActions('cart', { addToCart: 'add', removeFromCart: 'remove' })
		}
	}
</script>

<style scoped>
	.row{
		padding-left: 15px;
	}
</style>