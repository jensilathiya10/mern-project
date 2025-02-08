import React from "react";
import { Container, Typography, Box, Grid, Card, CardContent, Avatar } from "@mui/material";

const About = () => {
  return (
    <Container>
      {/* Main Heading */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Delivering Excellence, Innovation, and Quality hello theree
        </Typography>
      </Box>

      {/* Company Overview */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1">
          Welcome to My Website! We are a company dedicated to providing high-quality products and exceptional services to our customers. 
          With years of experience, we strive to bring innovative solutions that make a difference.
        </Typography>
      </Box>

      {/* Our Mission & Values */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          Our mission is to enhance customer satisfaction through cutting-edge products and top-tier customer support. 
          We uphold values such as integrity, innovation, and excellence in all our endeavors.
        </Typography>
      </Box>

      {/* Meet the Team */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {/* Team Member 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar sx={{ width: 80, height: 80, margin: "auto" }} src="https://via.placeholder.com/80" />
                <Typography variant="h6" sx={{ mt: 2 }}>John Doe</Typography>
                <Typography variant="body2" color="textSecondary">CEO & Founder</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar sx={{ width: 80, height: 80, margin: "auto" }} src="https://via.placeholder.com/80" />
                <Typography variant="h6" sx={{ mt: 2 }}>Jane Smith</Typography>
                <Typography variant="body2" color="textSecondary">CTO</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Member 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar sx={{ width: 80, height: 80, margin: "auto" }} src="https://via.placeholder.com/80" />
                <Typography variant="h6" sx={{ mt: 2 }}>Michael Lee</Typography>
                <Typography variant="body2" color="textSecondary">Lead Developer</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Message */}
      <Box sx={{ mt: 6, textAlign: "center", paddingBottom: 4 }}>
        <Typography variant="body1">
          Thank you for visiting our website! We are always here to help and look forward to serving you.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
