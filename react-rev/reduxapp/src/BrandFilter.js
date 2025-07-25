import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
  Collapse,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchProductsbyModel } from "./productSlice";

const BrandFilter = () => {

  const dispatch = useDispatch();
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    try {
      axios.get("http://localhost:8000/brands")
        .then((res) => {
          console.log("response", res.data);
          setBrandData(res.data);
        })
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }


  }, [])
  const [selectedFilters, setSelectedFilters] = useState({});
  const [openBrands, setOpenBrands] = useState({});

  const toggleBrand = (brand) => {
    const allModels = brandData.find((b) => b.brand === brand)?.models || [];
    const updatedFilters = { ...selectedFilters };


    if (selectedFilters[brand]?.length === allModels.length) {
      delete updatedFilters[brand];
    } else {
      updatedFilters[brand] = [...allModels];
    }
    setSelectedFilters(updatedFilters);
    const selectedModels = Object.values(updatedFilters).flat();
    dispatch(fetchProductsbyModel({selectedModels:selectedModels.join(",")}));
  };

  const toggleModel = (brand, model) => {
    const updatedFilters = { ...selectedFilters };
    if (!updatedFilters[brand]) updatedFilters[brand] = [];

    if (updatedFilters[brand].includes(model)) {
      updatedFilters[brand] = updatedFilters[brand].filter((m) => m !== model);
      if (updatedFilters[brand].length === 0) delete updatedFilters[brand];
    } else {
      updatedFilters[brand].push(model);
    }

    setSelectedFilters(updatedFilters);
    const selectedModels = Object.values(updatedFilters).flat();
    dispatch(fetchProductsbyModel({selectedModels:selectedModels.join(",")}));
  };

  const isBrandChecked = (brand) => {
    const allModels = brandData.find((b) => b.brand === brand)?.models || [];
    return selectedFilters[brand]?.length === allModels.length;
  };

  const isModelChecked = (brand, model) =>
    selectedFilters[brand]?.includes(model) ?? false;

  const toggleOpen = (brand) => {
    setOpenBrands((prev) => ({ ...prev, [brand]: !prev[brand] }));
  };

  return (
    <div style={{ width: 250, padding: 10, backgroundColor: "#fff" }}>
      <Typography variant="h6" sx={{ backgroundColor: "#E5E0D8", padding: 1 }} gutterBottom>
        Filter by Brand
      </Typography>
      <List style={{ padding: 10 }}>
        {brandData.map(({ brand, models }) => (
          <div key={brand}>
            <ListItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isBrandChecked(brand)}
                    onChange={() => toggleBrand(brand)}
                  />
                }
                label={brand}
              />
              <IconButton onClick={() => toggleOpen(brand)} size="small">
                {openBrands[brand] ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </ListItem>

            <Collapse in={openBrands[brand]} timeout="auto" unmountOnExit>
              <FormGroup style={{ paddingLeft: 32 }}>
                {models.map((model) => (
                  <FormControlLabel
                    key={model}
                    control={
                      <Checkbox
                        checked={isModelChecked(brand, model)}
                        onChange={() => toggleModel(brand, model)}
                      />
                    }
                    label={model}
                  />
                ))}
              </FormGroup>
            </Collapse>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  );
};

export default BrandFilter;
