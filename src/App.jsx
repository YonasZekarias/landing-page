import React from "react";
import {
  Container,
  CssBaseline,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function App() {
  return <LandingPage />;
}

export default App;

function LandingPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to right,rgb(120, 125, 130), #42a5f5)", // Professional gradient
        color: "white", // White text for contrast
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ bgcolor: "primary" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Snippets App
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Sign Up</Button>
        </Toolbar>
      </AppBar>

      <Container component="main" maxWidth="md" sx={{ flexGrow: 1 }}>
        <CssBaseline />

        {/* Hero Section */}
        <Box sx={{ my: 6, textAlign: "center" }}>
          <Typography variant="h2" component="h1" fontWeight={700} gutterBottom>
            Welcome to Snippets App
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9, mb: 3 }}>
            Your one-stop solution for managing and sharing code snippets efficiently.
          </Typography>

          {/* CTA Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: "1.1rem" }}>
              Get Started
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box sx={{ my: 6, bgcolor: "rgba(255, 255, 255, 0.1)", p: 4, borderRadius: 3 }}>
          <Typography variant="h4" component="h2" fontWeight={600} gutterBottom textAlign="center">
            Features
          </Typography>
          <List sx={{ maxWidth: 500, margin: "auto" }}>
            {[
              "Organize your code snippets easily",
              "Search and filter snippets in seconds",
              "Share snippets securely with your team",
            ].map((feature, index) => (
              <ListItem key={index} sx={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 2, bgcolor: "rgba(0, 0, 0, 0.8)", textAlign: "center" }}>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Snippets App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
