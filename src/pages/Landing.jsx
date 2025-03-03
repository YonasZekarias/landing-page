import { Box, Container,CssBaseline ,Typography,Button, List, ListItem,ListItemText} from "@mui/material";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Container component="main" maxWidth="md" sx={{ flexGrow: 1 }}>
        <CssBaseline />

        {/* Hero Section */}
        <Box sx={{ my: 6, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            fontWeight={700}
            gutterBottom
            sx={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Welcome to Snippets App
          </Typography>
          <Typography variant="h5" component="p" sx={{ opacity: 0.9, mb: 3, maxWidth: "80%", margin: "auto" }}>
            Your one-stop solution for managing and sharing code snippets efficiently.
          </Typography>

          {/* CTA Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
            component={Link}
            to="/login"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderRadius: "30px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            my: 6,
            bgcolor: "rgba(255, 255, 255, 0.1)",
            p: 4,
            borderRadius: 3,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        >
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
      <Box sx={{ py: 2, bgcolor: "rgba(0, 0, 0, 0.7)", textAlign: "center" }}>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Snippets App. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default LandingPage;