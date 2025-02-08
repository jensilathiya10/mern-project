import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData } from './cartSlice'
import Cartcard from './components/Cartcard'
import Bill from './components/Bill'


function Cart() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])
    const { cartProducts, status } = useSelector((state) => state.cart)
    console.log(status)
    console.log(cartProducts.cartdata)


    if (status == "success") {
        cartProducts.cartdata.map((product) => {
            console.log(product)
        })
    }

    if (status != "success") {
        return <h1>loading</h1>
    }
    return (
        <div >
            <div className="box" style={{display:"flex"}}>
                <div className="cart" style={{ display: "flex", flexWrap: "wrap",flexGrow:1 ,maxWidth:"60vw" }}>
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