import Button from "./Button"
import Inputs from "./Inputs"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseWallet, chooseCoin, chooseAmount, chooseEquity } from "../redux/slices/RootSlice"

interface CoinFormProps {
    id?: string[]
}
const CoinForm = (props:CoinFormProps) => {
    
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {
            dispatch(chooseWallet(data.wallet_id));
            dispatch(chooseCoin(data.coin_name));
            dispatch(chooseAmount(data.amount));
            dispatch(chooseEquity(data.equity));

            server_calls.create(store.getState())
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    
    return (
    
        
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>    
                <div>
                    <label htmlFor="wallet_id">Wallet ID</label>
                    <Inputs {...register('wallet_id')}name='wallet_id' placeholder='Wallet ID'/>
                </div>
                <div>
                    <label htmlFor="coin_name">Coin Name</label>
                    <Inputs {...register('coin_name')}name='coin_name' placeholder='Coin Name'/>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <Inputs {...register('amount')}name='amount' placeholder='Amount'/>
                </div>
                <div>
                    <label htmlFor="equity">Equity</label>
                    <Inputs {...register('equity')}name='equity' placeholder='Equity'/>
                </div>
                <div className="flex p-1">
                    <Button
                        classname="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CoinForm
