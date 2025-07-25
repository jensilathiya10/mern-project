import React from "react";
import { Container, Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, CardActions } from "@mui/material";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { addQuantity, fetchCartData, removeCartData } from "../cartSlice";

const Bill = ({ product }) => {


    let total = 0
    // console.log(product)
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        console.log(product)
        dispatch(removeCartData({ product: product.product._id, model: product.model }))
            .then(() => dispatch(fetchCartData()))
    }
    const handleAdd = (product) => {
        dispatch(addQuantity({ product: product.product._id, quantity: 1, model: product.model }))
            .then(() => dispatch(fetchCartData()))
    }
    product.cartdata.map((product) => {
        total += product.product.price * product.quantity
        return total
    })
    return (
        
        <Container
            maxWidth="sm"
            sx={{
                // mt: 4,
                mr: 2,
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "background.paper",
                position: "sticky",
                
            }}
        >

            <Typography variant="h5" align="center" gutterBottom>
                Subtotal
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <TableContainer component={Paper} sx={{ mb: 2 ,maxHeight:'45vh',
                overflowY:"scroll",scrollbarWidth:"none"}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Item Name</b></TableCell>
                            <TableCell align="center"><b>Price</b></TableCell>
                            <TableCell align="center"><b>Quantity</b></TableCell>
                            <TableCell align="right"><b>Subtotal</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {/* <Box sx={{maxHeight:"40vh",overflow:"scroll", width:"100%"}}> */}
                        {product.cartdata.map((product) => (
                            <TableRow >
                                <TableCell sx={{display:"flex" }}>
                                    <img src={`http://localhost:8000/${product.product.image[0].replace(/\\/g, '/')}`} width={20} height={30} style={{ marginRight: "10px", verticalAlign: "middle" }} alt="" />
                                    <span style={{width:'100%'}}>{product.product.title}</span>
                                </TableCell>
                                <TableCell align="right" >{product.product.price} €</TableCell>
                                <TableCell align="center">
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <IconButton
                                            onClick={() => handleRemove(product)}
                                            color="secondary"
                                        // disabled={product.quantity <= 0} // Disable if quantity is 1
                                        >
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography variant="body1" sx={{ mx: 1 }}>
                                            {product.quantity}
                                        </Typography>
                                        <IconButton
                                            onClick={() => handleAdd(product)}
                                            color="primary">
                                            <AddIcon />
                                        </IconButton>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">
                                    ${(product.product.price * product.quantity)}
                                </TableCell>
                            </TableRow>
                        ))}
                        {/* </Box> */}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Total Amount */}
            <Box sx={{ textAlign: "right", mb: 2 }}>
                <Typography variant="h6">
                    <strong>Total:</strong> {total.toFixed(2)} €
                </Typography>
            </Box>

            {/* Footer */}
            <Divider sx={{ mb: 2 }} />
            <CardActions>
                <Button size="small" variant="contained" color="primary" fullWidth>
                    Checkout
                </Button>
            </CardActions>
        </Container>
    );
};

export default Bill;
