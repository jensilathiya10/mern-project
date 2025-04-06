import React from 'react'

function CartEmpty() {
    return (
        <div className="empty-cart" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <h1>Your Cart is Empty</h1>
        </div>
    )
}

export default CartEmpty