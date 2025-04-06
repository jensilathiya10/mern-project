import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData } from './cartSlice'
import Cartcard from './components/Cartcard'
import Bill from './components/Bill'
import CartEmpty from './components/CartEmpty'

function Cart() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])
    const { cartProducts, status } = useSelector((state) => state.cart)
    
    
    if (status != "success") {
        console.log(cartProducts.length)
        return <h1>loading</h1>
    }

    if(status == "success" && cartProducts.cartdata.length == 0){
        return <CartEmpty/>
    }   
    return (
        <div >
            <div className="box" style={{display:"flex"}}>
                <div className="cart" style={{ display: "flex", flexWrap: "wrap",flexGrow:1 ,maxWidth:"60vw",maxHeight:"90vh",overflowY:"auto",scrollbarWidth: "none" }}>
                    {
                        cartProducts.cartdata.map((product) => (
                            <Cartcard product={product} />
                        ))
                    }
                </div>
                <div className="subtotal" style={{ display: "flex", flexWrap: "wrap",height:"fit-content" }}>
                    <Bill product={cartProducts} />
                </div>
            </div>
        </div>

    )
}

export default Cart