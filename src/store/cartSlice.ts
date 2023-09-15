import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartfetchProducts } from '../api/cartAPI';

export const fetchCartProducts = createAsyncThunk(
    'cart/fetchProducts',
    async () => {
      const response = await CartfetchProducts();
      return response; 
    }
  );

export const addToCart = createAction<{
    productID: number, 
    count: number,
    optionID: string 
}>("cart/add");

interface CartItem {
    productID: number;
    count: number;
    optionID: string;
}

interface CartState {
    products: CartItem[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// 초기 장바구니 상태 정의
const initialState: CartState = {
    products: [],
    status: 'idle',
    error: null
};


// 장바구니에 대한 슬라이스 생성
const cartSlice = createSlice({
  name: 'cart',  
  initialState,  
  reducers: { 
      // 상품 수량 증가
      increaseQuantity: (state, action: PayloadAction<number>) => {
          const currentQuantity = state.products[action.payload].count || 0;
          state.products[action.payload].count = currentQuantity + 1;
      },
      // 상품 수량 감소 (최소 1로 유지)
      decreaseQuantity: (state, action: PayloadAction<number>) => {
          const currentQuantity = state.products[action.payload].count || 0;
          state.products[action.payload].count = Math.max(1, currentQuantity - 1);
      },
      // 상품 삭제
      removeProduct: (state, action: PayloadAction<number>) => {
          state.products.splice(action.payload, 1);
      },
  },
 
  extraReducers: (builder) => {
    builder
    .addCase(fetchCartProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload; 
      })
      .addCase(fetchCartProducts.rejected, (state, action) => {
        state.status = 'failed';
        // state.error = action.error.message;
      })
    .addCase(addToCart, (state, action) => {
        const existingProduct = state.products.find(
            product => product.productID === action.payload.productID && product.optionID === action.payload.optionID
        );
      
        if (existingProduct) {
            existingProduct.count += action.payload.count;
        } else {
            state.products.push({
                productID: action.payload.productID,
                count: action.payload.count,
                optionID: action.payload.optionID
            });
        }
      });
  }
});

export const { increaseQuantity, decreaseQuantity, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;