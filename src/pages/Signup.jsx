import { Box, Button, TextField, Typography, Link } from "@mui/material";
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
        } else {
            console.log("Submitted");
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f8" }}>
            <Box sx={{ width: 360, p: 4, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}>
                <form onSubmit={handleOnSubmit}>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ textAlign: "center", color: "#333" }}>Sign Up</Typography>
                    <Typography variant="body1" sx={{ color: "#666", textAlign: "center", mb: 2 }}>Create your snippets account.</Typography>
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    <TextField required label="Username" name="username" fullWidth margin="dense" />
                    <TextField required label="Email" type="email" name="email" fullWidth margin="dense" />
                    <TextField required label="Password" type="password" name="password" fullWidth margin="dense" />
                    <TextField required label="Confirm Password" type="password" name="confirmPassword" fullWidth margin="dense" />
                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, py: 1.2, fontWeight: "bold", bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}>Sign Up</Button>
                    <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "#444" }}>
                        Already have an account? 
                        <Link component={RouterLink} to="/login" sx={{ ml: 0.5, fontWeight: "bold", color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Login</Link>
                    </Typography>
                </form>
            </Box>
        </Box>
    );
}

export default Signup;
