import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

function Login() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Typography variant="h3" component="h6" fontWeight={700} gutterBottom sx={{
                mx: "auto", mt: 3,textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "black", fontSize: "2.5rem"}}>
                Login
            </Typography>
            <Typography
                variant="h6" component="p"
                sx={{ opacity: 0.9, mb: 3, maxWidth: "80%", mx: "auto", color: "black", fontSize: "1.25rem" }}>
                Please login to access your snippets.
            </Typography>
        </Box>
    );
}

export default Login;
