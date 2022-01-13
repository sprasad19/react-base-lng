import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles({
  paper: {
    background: "#1976d2 !important",
    color: "white !important",
  },

  icons: {
    color: "white !important",
  },
});

function SideBar(props) {
  const styles = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List color="inherit">
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} color="primary">
            <ListItemIcon color="inherit">
              {index % 2 === 0 ? (
                <InboxIcon color="inherit" style={{ color: "white" }} />
              ) : (
                <MailIcon color="inherit" style={{ color: "white" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} color="inherit" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List color="inherit">
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text} color="inherit">
            <ListItemIcon>
              {index % 2 === 0 ? (
                <InboxIcon color="inherit" style={{ color: "white" }} />
              ) : (
                <MailIcon color="inherit" style={{ color: "white" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
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
          classes={{ paper: styles.paper }}
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
          classes={{ paper: styles.paper }}
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
    </>
  );
}

SideBar.propTypes = {
  window: PropTypes.func,
};

export default SideBar;
