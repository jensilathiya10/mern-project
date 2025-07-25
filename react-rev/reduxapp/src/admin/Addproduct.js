import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions, Autocomplete, Checkbox, ListSubheader,
  List,
  ListItem,
  IconButton,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const ProductForm = () => {

  const [categories, setCategories] = useState([])
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, [newCategory])

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/brands')
      .then((res) => setBrands(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    modelsfor: [],
    hasModels: 'no',
  });
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => {
    setOpen(false);
    setNewCategory({ name: '', description: '' });
  };
  const handleAddCategory = () => {
    axios.post('http://localhost:8000/categories/add', newCategory)
      .then(res => console.log('Saved!'))
      .catch(err => console.error(err));
    handleDialogClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log(formData.modelsfor)
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('category', formData.category);
    data.append('hasModels', formData.hasModels);
    data.append('hasMultipleImages', formData.hasMultipleImages);
    formData.modelsfor.forEach((model) => data.append('modelsfor', model))

    await images.forEach((img) => data.append('images', img));
    console.log(data)
    try {
      const response = await axios.post('http://localhost:8000/products', data);

      console.log('Product uploaded successfully:', response);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };
  const modelOptions = brands.flatMap((b) =>
    b.models.map((model) => ({ brand: b.brand, model }))
  );
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Add New Product
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>

          <Grid container spacing={2}>
            {/* Title */}
            <Grid size={{ xs: 12, md: 6 }} item >
              <TextField
                fullWidth
                label="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>

            {/* Price */}
            <Grid size={{ xs: 12, md: 6 }} item >
              <TextField
                fullWidth
                label="Price"
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
              />
            </Grid>

            {/* Image Upload (multiple) */}
            <Grid size={{ xs: 12, md: 6 }} item >
              <FormControl fullWidth>
                <FormLabel>Upload Images</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                {images.length > 0 && (
                  <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                    {images.map((file, index) => (
                      <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index}`}
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: 'cover',
                          borderRadius: 8,
                          border: '1px solid #ccc',
                        }}
                      />
                    ))}
                  </Box>
                )}
              </FormControl>
            </Grid>



            {/* Category Dropdown */}
            <Grid size={{ xs: 12, md: 6 }} item >
              <FormControl fullWidth>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  name="category"
                  value={formData.category}
                  label="Category"
                  onChange={handleChange}
                >
                  {categories.map((cat) => (
                    <MenuItem value={cat.name}>{cat.name}</MenuItem>

                  ))}
                </Select>
              </FormControl>
              <Button onClick={handleDialogOpen} sx={{ mt: 1 }} variant="outlined">
                + Add Category
              </Button>
            </Grid>

            <Dialog open={open} onClose={handleDialogClose}>
              <DialogTitle>Add New Category</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Category Name"
                  fullWidth
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                />
                <TextField
                  margin="dense"
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  value={newCategory.description}
                  onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose}>Cancel</Button>
                <Button onClick={handleAddCategory} variant="contained">Add</Button>
              </DialogActions>
            </Dialog>

            {/* Description - full width */}
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={3}
              />
            </Grid>

            {/* Radio: Has Models */}
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Are there any models?</FormLabel>
                <RadioGroup
                  row
                  name="hasModels"
                  value={formData.hasModels}
                  onChange={handleChange}
                >
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/* Models input if hasModels === "yes" */}
            {formData.hasModels === 'yes' && (
              <Grid item size={{ xs: 12 }}>
                <FormControl fullWidth>
                  <Autocomplete
                    multiple
                    disableCloseOnSelect
                    options={modelOptions}
                    groupBy={(option) => option.brand}
                    getOptionLabel={(option) => option.model}
                    value={formData.modelsfor.map((m) =>
                      modelOptions.find((opt) => opt.model === m)
                    )}
                    onChange={(e, value) =>
                      setFormData((prev) => ({
                        ...prev,
                        modelsfor: value.map((v) => v.model),
                      }))
                    }
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox
                          style={{ marginRight: 8 }}
                          checked={selected}
                          tabIndex={-1}
                          disableRipple
                        />
                        {option.model}
                      </li>
                    )}
                    renderGroup={(params) => {
                      const group = params.group;
                      const isOpen = expandedGroups[group] || false;

                      return (
                        <div key={group}>
                          <ListSubheader
                            component="div"
                            disableSticky
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <IconButton
                              size="small"
                              onClick={() => toggleGroup(group)}
                              sx={{ mr: 1 }}
                            >
                              {isOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                            {group}
                          </ListSubheader>
                          <Collapse in={isOpen}>
                            <List dense disablePadding>
                              {params.children}
                            </List>
                          </Collapse>
                        </div>
                      );
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Select Models" placeholder="Models" />
                    )}
                    sx={{ width: 400 }}
                  />
                </FormControl>
              </Grid>
            )}

            {/* Submit button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProductForm;
