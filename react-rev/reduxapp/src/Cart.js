import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartData } from './cartSlice'
import Cartcard from './components/Cartcard'

function Cart() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])
    const { cartProducts, status } = useSelector((state) => state.cart)
    console.log(status)
    console.log(cartProducts.cartdata)

    if (status != "success") {
        return <h1>loading</h1>
    }
    return (
        <div >
            <div className="cart" style={{display:"flex",flexWrap:"wrap"}}>
                {
                    cartProducts.cartdata.map((product) => (
                        <Cartcard product={product.product} />
                    ))
                }
            </div>

        </div>

    )
}

export default Cart