import React from "react";
import { Container,Button, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, CardActions } from "@mui/material";

const Bill = ({ product }) => {

    let total = 0
    // console.log(product)
    product.cartdata.map((product) => {
        total += product.product.price * product.quantity
        return total
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
                position: "sticky"
            }}
        >

            <Typography variant="h5" align="center" gutterBottom>
                Subtotal
            </Typography>
            <Divider sx={{ mb: 2 }} />
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
            <CardActions>
                <Button size="small" variant="contained" color="primary" fullWidth>
                    Checkout
                </Button>
            </CardActions>
        </Container>
    );
};

export default Bill;
