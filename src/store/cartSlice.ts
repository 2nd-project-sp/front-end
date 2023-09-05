// redux-toolkit 라이브러리에서 필요한 함수와 타입들 임포트
import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
// 상품에 관한 인터페이스 임포트
import { ProductInterface } from '../models/product';

// 장바구니에 상품 추가 액션 생성
export const addToCart = createAction<ProductInterface>("cart/add");

// 장바구니 상태에 대한 인터페이스 정의
interface CartState {
    products: ProductInterface[];
}

// 초기 장바구니 상태 정의
const initialState: CartState = {
    products: [],
};

// 장바구니에 대한 슬라이스 생성
const cartSlice = createSlice({
  name: 'cart',  // 슬라이스 이름
  initialState,  // 초기 상태
  reducers: {  // 리듀서 함수들
      // 상품 목록 설정
      setProducts: (state, action: PayloadAction<ProductInterface[]>) => {
          state.products = action.payload;
      },
      // 상품 수량 증가
      increaseQuantity: (state, action: PayloadAction<number>) => {
          const currentQuantity = Number(state.products[action.payload].quantity) || 0;
          state.products[action.payload].quantity = currentQuantity + 1;
      },
      // 상품 수량 감소 (최소 1로 유지)
      decreaseQuantity: (state, action: PayloadAction<number>) => {
          const currentQuantity = Number(state.products[action.payload].quantity) || 0;
          state.products[action.payload].quantity = Math.max(1, currentQuantity - 1);
      },
      // 상품 삭제
      removeProduct: (state, action: PayloadAction<number>) => {
          state.products.splice(action.payload, 1);
      },
  },
  // 추가적인 리듀서 정의
  extraReducers: (builder) => {
      // addToCart 액션 발생 시 상품 추가
      builder.addCase(addToCart, (state, action) => {
          state.products.push(action.payload);
      });
  }
    
});

// 슬라이스로부터 액션 생성자들 내보내기
export const { setProducts, increaseQuantity, decreaseQuantity, removeProduct } = cartSlice.actions;

// 리듀서 내보내기
export default cartSlice.reducer;