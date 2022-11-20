import * as React from "react";
import { Container } from '@mui/system';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes,Link, useNavigate } from "react-router-dom";
// import Message from "../screens/dashboard_screens/messages";
// import Feedback from "../screens/dashboard_screens/feedback";
// import Notification from "../screens/dashboard_screens/notification";
// import AllData from "../screens/dashboard_screens/data";
import StudentForm from "../screens/studentform";
import Course from "../screens/course";
import Result from "../screens/result";
import Quiz from "../screens/quiz";
import Students from "../screens/students";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
     

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

//     const [navItems, setNaveItems] = React.useState([{
//         path: "/",
//         name: "Home",
//         icon: () => <InboxIcon />
//     },
//     {
//         path: "/about",
//         name: "About",
//         icon: () => <InboxIcon />
//     },
//     {
//         path: "/services",
//         name: "Services",
//         icon: () => <InboxIcon />
//     },
//     {
//         path: "/contact",
//         name: "Contact",
//         icon: () => <InboxIcon />
//     },
//     {
//         path: "dashboard",
//         name: "Dashboard",
//         icon: () => <InboxIcon />
//     }
// ])
    const drawer = (

        <div>
            <Typography variant="h6" sx={{ my: 2 }}>
              
            </Typography>
            <Divider />
                    {/* <List sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {navItems.map((item, i) => (
                            <ListItem key={i} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(item.path)
                        }}>
                            <ListItemIcon>
                                {item.icon()}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                        ))}
                    </List> */}
                <Divider />
            <List>
                {[
                    {
                        route: "Students",
                        name: "Enrolled Students",
                        icon: () => <InboxIcon />
                    },
                    {
                        route: "quiz",
                        name: "Quiz",
                        icon: () => <InboxIcon />
                    },
                    {
                        route: "result",
                        name: "Result",
                        icon: () => <InboxIcon />
                    },
                     {
                        route: "course",
                        name: "course",
                        icon: () => <InboxIcon />
                    },
                ].map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(text.route)
                        }}>
                            <ListItemIcon>
                                {text.icon()}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    // const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, i) => (
                            <Link key={i} className="navLinks" to={item.path} sx={{ color: '#fff !important', margin: "0px 5px !important" }}>
                                {item.name}
                            </Link>
                        ))}
                    </Box> */}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Box>
                    <Routes>
                        <Route path="students" element={<Students />} />
                        <Route path="quiz" element={<Quiz />} />
                        <Route path="result" element={<Result />} />
                        <Route path="course" element={<Course />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;