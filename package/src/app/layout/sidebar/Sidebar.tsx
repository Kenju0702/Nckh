import { useState } from "react";
import { useMediaQuery, Box, Drawer, IconButton } from "@mui/material";
import SidebarItems from "./SidebarItems";
import { Upgrade } from "./Updrade";
import { Sidebar, Logo } from 'react-mui-sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSidebar } from "@/app/contentApi/SidebarContext";

interface ItemType {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
}

const MSidebar = ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sidebarWidth = isCollapsed ? "70px" : "270px";

  // Custom CSS for short scrollbar
  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '7px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#eff2f7',
      borderRadius: '12px',
    },
  };

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              boxSizing: "border-box",
              ...scrollbarStyles,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
            }}
          >
            <Sidebar
              width={sidebarWidth}
              collapsewidth="80px"
              open={isSidebarOpen}
              themeColor="#5d87ff"
              themeSecondaryColor="#49beff"
              showProfile={false}
            >
              <IconButton
                onClick={toggleCollapse}
                sx={{ margin: 1 }}
              >
                {isCollapsed ? <ChevronLeftIcon /> : <MenuIcon />}
              </IconButton>
              <Box sx={{ margin: isCollapsed?'6px':null }}> 
                <Logo img="/images/logos/dark-logo.svg" />
              </Box>
              <Box>
                <SidebarItems isCollapsed={isCollapsed} toggleMobileSidebar={undefined} />
                {!isCollapsed ? <Upgrade /> : null}
              </Box>
            </Sidebar>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          boxShadow: (theme) => theme.shadows[8],
          ...scrollbarStyles,
        },
      }}
    >
      <Box px={3}>
        <Sidebar
          width={sidebarWidth}
          collapsewidth="80px"
          isCollapse={isCollapsed}
          mode="light"
          direction="ltr"
          themeColor="#5d87ff"
          themeSecondaryColor="#49beff"
          showProfile={false}
        >
          <IconButton
            onClick={toggleCollapse}
            sx={{ margin: 1 }}
          >
            {isCollapsed ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
          
          <SidebarItems isCollapsed={isCollapsed} toggleMobileSidebar={onSidebarClose} />
          <Upgrade />
        </Sidebar>
      </Box>
    </Drawer>
  );
};

export default MSidebar;
