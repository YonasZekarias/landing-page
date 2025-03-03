import { Box, Button, TextField, Typography,Link } from "@mui/material";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import { Link as RouterLink } from "react-router-dom";

function Signup() {
    const [error, setError] = useState(null);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (e.target.password.value !== e.target.confirmPassword.value) {
            setError("Passwords do not match");
            return;
        }
        else {
            console.log("Submitted");
        }
    };
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", py: 5 }}>
            <Box maxWidth={400} border={1} borderRadius={3} p={3} mx="auto" mt={3} boxShadow={3} borderColor={"rgba(255, 255, 255, 0.2)"}>
                {/* Signup form */}
                <form onSubmit={handleOnSubmit}>
                    <Typography variant="h3" component="h6" fontWeight={700} gutterBottom sx={{mt: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "black", fontSize: "2.5rem" }}>
                        Sign Up
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ color: "black", opacity: 0.9, mb: 3, maxWidth: "80%", }}>
                        to create your snippets account.
                    </Typography>
                    {error && <Alert variant="filled" margin="normal" sx={{ my: 2 }} severity="error">{error}</Alert>}
                    <TextField required label="Username" type="text" id="username" name="username" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField required label="Email" type="email" id="email" name="email" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField required label="Password" type="password" id="password" name="password" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField required label="Confirm Password" type="password" id="confirmPassword" name="confirmPassword" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Button variant="contained" type="submit" fullWidth margin='normal' sx={{ mb: 2 }}>Sign Up</Button>
                        <Typography variant="outlined" sx={{ display: "block" }}>Have Account? <Link underline="hover" color="black" component={RouterLink} to="/login"> Login</Link></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default Signup;
