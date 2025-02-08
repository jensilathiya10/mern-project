import React from "react";
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from "@mui/material";

const Bill = ({ product }) => {
    // const items = [
    //     { name: "Laptop", price: 999.99, quantity: 1 },
    //     { name: "Mouse", price: 25.49, quantity: 2 },
    //     { name: "Keyboard", price: 49.99, quantity: 1 },
    //     { name: "Monitor", price: 199.99, quantity: 1 },
    //   ];
    let total = 0
    console.log(product)
    product.cartdata.map((product) => {
        total += product.product.price * product.quantity
    })
    return (
        <Container
            maxWidth="sm"
            sx={{
                mt: 4,
                p: 3,
                borderRadius: 2,
                boxShadow: 3,
                bgcolor: "background.paper",
            }}
        >
            {/* Receipt Header */}
            <Typography variant="h5" align="center" gutterBottom>
                Total Items in Cart
            </Typography>
            <Divider sx={{ mb: 2 }} />

            {/* Customer Details */}


            <Divider sx={{ mb: 2 }} />

            {/* Items Table */}
            <Typography variant="h6" gutterBottom>
                Items
            </Typography>
            <TableContainer component={Paper} sx={{ mb: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.cartdata.map((product) => (
                            <TableRow >
                                <TableCell>{product.product.title}</TableCell>
                                <TableCell align="right">{product.product.price} €</TableCell>
                                <TableCell align="right">{product.quantity}</TableCell>
                                <TableCell align="right">
                                    ${(product.product.price * product.quantity)}
                                </TableCell>
                            </TableRow>
                        ))}
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
            <Typography variant="body2" align="center" color="text.secondary">
                Thank you for your purchase!
            </Typography>
        </Container>
    );
};

export default Bill;
