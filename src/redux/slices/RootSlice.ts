import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        wallet_id: "Wallet ID",
        coin_name: "Coin Name",
        amount: "Amount",
        equity: "Equity",
    },
    reducers:{
        chooseWallet: (state, action) => { state.wallet_id = action.payload },
        chooseCoin: (state, action) => { state.coin_name = action.payload },
        chooseAmount: (state, action) => { state.amount = action.payload},
        chooseEquity: (state, action) => { state.equity = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseWallet, chooseCoin, chooseAmount, chooseEquity } = rootSlice.actions