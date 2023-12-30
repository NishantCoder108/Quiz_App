import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://twitter.com/NishantCoder">
                NishantCoder.com
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Footer;
