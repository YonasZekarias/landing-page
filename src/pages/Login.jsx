import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
function Login() {
    const handleOnSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", mt: 'auto', pt: 5 }}>
            <Box maxWidth={400} my='auto' border={1} borderRadius={3} p={3} mx="auto" mt={3} boxShadow={3} borderColor={"rgba(255, 255, 255, 0.2)"}>
                {/* Login form */}
                <form onSubmit={handleOnSubmit}>
                    <Typography variant="h3" component="h6" fontWeight={700} gutterBottom sx={{
                        mt: 3, textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", color: "black", fontSize: "2.5rem"
                    }}>
                        Login
                    </Typography>
                    <Typography
                        variant="h6" component="p"
                        sx={{ opacity: 0.9, mb: 3, maxWidth: "80%", color: "black", fontSize: "1.25rem" }}>
                        to access your snippets.
                    </Typography>
                    <TextField required label="Username" type="text" id="username" name="username" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <TextField required label="Password" type="password" id="password" name="password" fullWidth margin="normal" sx={{ mb: 2 }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Button variant="contained" type="submit" fullWidth margin='normal' sx={{ mb: 2 }}>Login</Button>
                        <Typography variant="outlined" sx={{ display: "block" }}>New user? <Link underline="hover" color="black" component={RouterLink} to="/signup" >Sign Up</Link></Typography>
                    </Box>
                </form>
            </Box>
        </Box>
    );
}

export default Login;
