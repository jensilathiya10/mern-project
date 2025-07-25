import React, { useEffect, useState } from "react";
import {
    Box,
    TextField,
    IconButton,
    Button,
    Typography,
    Paper,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import axios from "axios";

const MobileBrands = () => {

    const [brandList, setBrandList] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    useEffect(() => {
        axios.get("http://localhost:8000/brands")
            .then((res) => setBrandList(res.data))
            .catch((err) => console.log(err))
    }, [isUpdating])
    // console.log(brandList)
    const [brandName, setBrandName] = useState("");
    const [models, setModels] = useState([""]);
    const [updatedBrand, setUpdatedBrand] = useState([]);

    const handleModelChange = (index, value) => {
        const updatedModels = [...models];
        updatedModels[index] = value;
        setModels(updatedModels);
    };


    const handleAddModel = () => {
        setModels([...models, ""]);
    };

    const handleRemoveModel = (index) => {
        const updatedModels = models.filter((_, i) => i !== index);
        setModels(updatedModels);
    };

    const HandleEdit = (b, idx) => {
        setIsUpdating(true);
        setBrandName(b.brand);
        setModels(b.models);
        setUpdatedBrand(b);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!brandName.trim() || models.some((m) => !m.trim())) {
            alert("Please fill all fields.");
            return;
        }

        const brandData = {
            brand: brandName.trim(),
            models: models.map((m) => m.trim()),
        };

        if (isUpdating) {
            console.log(brandData)
            try {
                axios.patch(`http://localhost:8000/brands/update/${updatedBrand._id}`, brandData)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
            setIsUpdating(false)    


        }
        else {
            try {
                axios.post(`http://localhost:8000/brands/add`, brandData)
                    .then((res) => console.log(res.data))
                    .catch((err) => console.log(err))
            } catch (error) {

            }
        }
        setBrandName("");
        setModels([""]);
    };

    return (
        <Box sx={{ maxWidth: 500, mx: "auto", p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Add New Brand
            </Typography>
            <form>
                <TextField
                    label="Brand Name"
                    fullWidth
                    margin="normal"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    required
                />

                {models.map((model, index) => (
                    <Box key={index} display="flex" alignItems="center" mb={1}>
                        <TextField
                            label={`Model ${index + 1}`}
                            value={model}
                            onChange={(e) => handleModelChange(index, e.target.value)}
                            fullWidth
                            required
                        />
                        {models.length > 1 && (
                            <IconButton onClick={() => handleRemoveModel(index)} color="error">
                                <Delete />
                            </IconButton>
                        )}
                    </Box>
                ))}

                <Box display="flex" justifyContent="space-between" mt={2}>
                    <Button
                        variant="outlined"
                        startIcon={<Add />}
                        onClick={handleAddModel}
                    >
                        Add Model
                    </Button>
                    {isUpdating && <Button type="button" onClick={handleSubmit} variant="contained" color="primary">
                        Update Brand
                    </Button>}
                    <Button type="button" disabled={isUpdating} onClick={handleSubmit} variant="contained" color="primary">
                        Save Brand
                    </Button>
                </Box>
            </form>

            {/* Preview of saved brands (optional) */}
            {brandList.length > 0 && (
                <Box mt={4}>
                    <Typography variant="h6">Saved Brands</Typography>
                    {brandList.map((b, idx) => (
                        <Paper key={idx} sx={{ p: 2, mt: 1, display: "flex", justifyContent: "space-between" }}>
                            <Box>
                                <Typography variant="subtitle1">{b.brand}</Typography>
                                <ul style={{ margin: 0, paddingLeft: 16 }}>
                                    {b.models.map((model, i) => (
                                        <li key={i}>{model}</li>
                                    ))}
                                </ul>
                            </Box>
                            <Button type="button" sx={{ height: 30 }} onClick={() => HandleEdit(b, idx)} variant="contained" color="primary">
                                Edit
                            </Button>
                        </Paper>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default MobileBrands;
