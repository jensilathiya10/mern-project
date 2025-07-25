import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
    }, [])
    // console.log(products)
    const onEdit = () => {

    }
    const onDelete = () => {

    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                    <TableRow>
                        <TableCell><strong>Image</strong></TableCell>
                        <TableCell><strong>Title</strong></TableCell>
                        <TableCell><strong>Description</strong></TableCell>
                        <TableCell><strong>Price</strong></TableCell>
                        <TableCell><strong>Category</strong></TableCell>
                        <TableCell><strong>Models</strong></TableCell>
                        <TableCell><strong>Has Models</strong></TableCell>
                        <TableCell align="center"><strong>Edit</strong></TableCell>
                        <TableCell align="center"><strong>Delete</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products?.map((product) => (
                        <TableRow key={product._id}>
                            <TableCell>
                                {product.image?.[0] && (
                                    <img
                                        src={`http://localhost:8000/${product.image[0].replace(/\\/g, '/')}`}
                                        alt={product.title}
                                        width="50"
                                        height="50"
                                        style={{ objectFit: "cover", borderRadius: 4 }}
                                    />
                                )}
                            </TableCell>
                            <TableCell>{product.title}</TableCell>
                            <TableCell>{product.description}</TableCell>
                            <TableCell>${product.price}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.modelsfor.join(", ")}</TableCell>
                            <TableCell>{product.hasModels}</TableCell>
                            <TableCell align="center">
                                <Tooltip title="Edit">
                                    <IconButton onClick={() => onEdit(product)}>
                                        <EditIcon color="primary" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => onDelete(product._id)}>
                                        <DeleteIcon color="error" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Products;
