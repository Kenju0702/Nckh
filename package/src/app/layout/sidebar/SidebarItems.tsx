import React from "react";
import Menuitems from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup/NavGroup";

interface SidebarItemsProps {
  isCollapsed: boolean;
  toggleMobileSidebar?: (event: React.MouseEvent<HTMLElement>) => void; // Có thể là undefined
}

const SidebarItems: React.FC<SidebarItemsProps> = ({ isCollapsed, toggleMobileSidebar }) => {
  const pathname = usePathname();
  const pathDirect = pathname;

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          if (item.navlabel) {
            // Kiểm tra isCollapsed để ẩn tiêu đề nhóm
            return isCollapsed ? null : <NavGroup item={item} key={item.subheader} />;
          } else {
            return (
              <NavItem
                item={item}
                key={item.id}
                pathDirect={pathDirect}
                onClick={toggleMobileSidebar ?? (() => {})} // Cung cấp giá trị mặc định
                isCollapsed={isCollapsed}
              />
            );
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;

