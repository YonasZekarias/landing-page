import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const navButtonStyles = {
    mx: 1,
    fontSize: "1rem",
    "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
};
function Navbar() {
    const location = useLocation();
    return (
        <AppBar
            position="static"
            sx={{
                bgcolor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(6px)",
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ flexGrow: 1, color: "inherit", textDecoration: "none" }}
                >
                    Snippets App
                </Typography>
                {location.pathname !== "/login" && (
                    <Button component={Link} to="/login" color="inherit" sx={navButtonStyles}>
                        Login
                    </Button>
                )}
                {location.pathname !== "/signup" && (
                    <Button component={Link} to="/signup" color="inherit" sx={navButtonStyles}>
                        Sign Up
                    </Button>
                )}

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
