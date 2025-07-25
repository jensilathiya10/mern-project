import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
    Paper,
    Alert,
    Link,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <Container sx={{ mt: 5, mb: 5 }}>
            {/* Hero Section */}
            <Typography variant="h3" align="center" gutterBottom>
                Get in Touch
            </Typography>
            <Typography variant="subtitle1" align="center" paragraph>
                We'd love to hear from you! Fill out the form or reach us directly.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 3 }}>
                {/* Left Side: Contact Info */}
                <Grid item size={{xs:12,md:5}}>
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Contact Information
                        </Typography>

                        <Box display="flex" alignItems="center" mt={2}>
                            <Phone sx={{ mr: 1 }} />
                            <Typography>+1 (123) 456-7890</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mt={2}>
                            <Email sx={{ mr: 1 }} />
                            <Typography>support@example.com</Typography>
                        </Box>

                        <Box display="flex" alignItems="center" mt={2}>
                            <LocationOn sx={{ mr: 1 }} />
                            <Typography>123 Tech Street, Berlin, Germany</Typography>
                        </Box>

                        <Box mt={3}>
                            <Typography variant="subtitle2">Follow us:</Typography>
                            <Box display="flex" gap={2} mt={1}>
                                <Link href="#" target="_blank" underline="hover">
                                    Facebook
                                </Link>
                                <Link href="#" target="_blank" underline="hover">
                                    Twitter
                                </Link>
                                <Link href="#" target="_blank" underline="hover">
                                    LinkedIn
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Right Side: Contact Form */}
                <Grid item size={{xs:12,md:7}}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        {submitted && (
                            <Alert severity="success" sx={{ mb: 2 }}>
                                ✅ Message sent successfully!
                            </Alert>
                        )}

                        <Box component="form" onSubmit={handleSubmit} noValidate>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                margin="normal"
                                value={formData.name}
                                onChange={handleChange}
                                error={Boolean(errors.name)}
                                helperText={errors.name}
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                margin="normal"
                                value={formData.email}
                                onChange={handleChange}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />

                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                margin="normal"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                error={Boolean(errors.message)}
                                helperText={errors.message}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Send Message
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Google Map Embed (optional) */}
            <Box sx={{ mt: 6 }}>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369.2155607281618!2d72.86392271328238!3d21.216634363324612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f125e655727%3A0xa4b6584d723a2445!2sD.S.%20Fashion!5e0!3m2!1sen!2sde!4v1753198349930!5m2!1sen!2sde"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </Container>
    );
};

export default Contact;
