import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

function Login() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f4f6f8" }}>
            <Box sx={{ width: 360, p: 4, borderRadius: 2, boxShadow: 3, bgcolor: "white" }}>
                <form onSubmit={handleOnSubmit}>
                    <Typography variant="h4" fontWeight={700} gutterBottom sx={{ textAlign: "center", color: "#333" }}>Login</Typography>
                    <Typography variant="body1" sx={{ color: "#666", textAlign: "center", mb: 2 }}>Access your snippets.</Typography>
                    <TextField required label="Username" name="username" fullWidth margin="dense" />
                    <TextField required label="Password" type="password" name="password" fullWidth margin="dense" />
                    <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, py: 1.2, fontWeight: "bold", bgcolor: "#1976d2", "&:hover": { bgcolor: "#1565c0" } }}>Login</Button>
                    <Typography variant="body2" sx={{ textAlign: "center", mt: 2, color: "#444" }}>
                        New user?
                        <Link component={RouterLink} to="/signup" sx={{ ml: 0.5, fontWeight: "bold", color: "#1976d2", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>Sign Up</Link>
                    </Typography>
                </form>
            </Box>
        </Box>
    );
}

export default Login;
