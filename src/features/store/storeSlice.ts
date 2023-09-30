import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { SingleCardType, StoreInitialState } from '../../interfaces/Cart';

const initialState: StoreInitialState = {
	name: '',
	quantity: 0,
	price: 0,
	cartOpen: false,
	data: [
		{
			id: 1,
			name: 'Monitor',
			thumbnail:
				'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
			price: 100,
			totalOrder: 0,
		},
		{
			id: 2,
			name: 'Keyboard',
			thumbnail:
				'https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80',
			price: 20,
			totalOrder: 0,
		},
		{
			id: 3,
			name: 'Mouse',
			thumbnail:
				'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
			price: 10,
			totalOrder: 0,
		},
		{
			id: 4,
			name: 'SSD',
			thumbnail:
				'https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
			price: 57,
			totalOrder: 0,
		},
	],
	carts: [],
};

const storeSlice = createSlice({
	name: 'store',
	initialState,
	reducers: {
		incrementQuantity(state) {
			state.quantity = state.quantity + 1;
		},
		decrementQuantity(state) {
			state.quantity = state.quantity - 1;
		},
		cartStatus(state) {
			state.cartOpen = !state.cartOpen;
		},
		addToCart(state, action: PayloadAction<SingleCardType>) {
			state.carts.push(action.payload);
			state.quantity += 1;
		},

		incrementCart(state, action: PayloadAction<SingleCardType>) {
			state.carts = state.carts.map((c) => {
				if (c.id === action.payload.id && c?.totalOrder) {
					return {
						...c,
						totalOrder: c.totalOrder + 1,
					};
				}

				return c;
			});

			state.quantity += 1;
		},
		decrementCart(state, action: PayloadAction<SingleCardType>) {
			state.carts = state.carts.map((c) => {
				if (c.id === action.payload.id && c?.totalOrder) {
					return {
						...c,
						totalOrder: c.totalOrder - 1,
					};
				}

				return c;
			});

			state.quantity -= 1;
		},

		removeCart(state, action: PayloadAction<number>) {
			const cart = state.carts.find((c) => c.id === action.payload);

			if (cart?.id) state.quantity -= cart?.totalOrder;

			state.carts = state.carts.filter((cart) => cart.id !== action.payload);
		},
	},
});

export default storeSlice.reducer;

export const {
	incrementQuantity,
	decrementQuantity,
	cartStatus,
	addToCart,
	incrementCart,
	decrementCart,
	removeCart,
} = storeSlice.actions;

export const storeSelector = (state: RootState) => state.store;
