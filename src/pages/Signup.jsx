import { Box, Button, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

function Signup() {
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <Navbar />
            <Typography variant="h3" component="h6" fontWeight={700} gutterBottom sx={{ mx: "auto", mt: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "black", fontSize: "2.5rem" }}>
                Sign Up
            </Typography>
            <Typography variant="h5" component="p" sx={{ color: "black", opacity: 0.9, mb: 3, maxWidth: "80%", mx: "auto" }}>
                Please sign up to access your snippets.
            </Typography>
            <Box maxWidth={400} border={1} borderRadius={3} p={3} mx="auto" mt={3} boxShadow={3} borderColor={"rgba(255, 255, 255, 0.2)"}>
                {/* Signup form */}
                <form>
                    <TextField label="Email" type="email" id="email" name="email" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField label="Password" type="password" id="password" name="password" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField label="Confirm Password" type="password" id="confirmPassword" name="confirmPassword" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <Button variant="contained" type="submit" sx={{ mx: "auto", display: "block" }}>Sign Up</Button>
                </form>
            </Box>
        </Box>
    );
}

export default Signup;
