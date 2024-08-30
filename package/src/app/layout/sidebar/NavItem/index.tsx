import React from "react";
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Link from "next/link";

type NavGroup = {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface ItemType {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  hideMenu?: any;
  level?: number | any;
  pathDirect: string;
  isCollapsed: boolean; // Thêm thuộc tính isCollapsed
}

const NavItem = ({ item, level, pathDirect, onClick, isCollapsed }: ItemType) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  // const ListItemStyled = styled(ListItem)(() => ({
  //   padding: 0,
  //   ".MuiButtonBase-root": {
  //     whiteSpace: "nowrap",
  //     marginBottom: "2px",
  //     padding: "8px 10px",
  //     borderRadius: "8px",
  //     backgroundColor: level > 1 ? "transparent !important" : "inherit",
  //     color: theme.palette.text.secondary,
  //     paddingLeft: "10px",
  //     "&:hover": {
  //       backgroundColor: theme.palette.primary.light,
  //       color: theme.palette.primary.main,
  //     },
   
  //     "&.Mui-selected": {
  //       color: "white",
  //       backgroundColor: theme.palette.primary.main,
  //       borderRadius: "8px",
  //       padding: " 5px ",
  //       "&:hover": {
  //         backgroundColor: theme.palette.primary.main,
  //         color: "white",
  //       },
  //     },
  //   },
  // }));

  const ListItemStyled = styled(ListItem)(({ theme }) => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "2px",
      padding: "8px 10px",
      borderRadius: "8px",
      backgroundColor: level > 1 ? "transparent !important" : "inherit",
      color: theme.palette.text.secondary,
      // paddingLeft: isCollapsed ? "20px" : "20px", // Thay đổi paddingLeft dựa vào isCollapsed
      paddingRight:isCollapsed?"30px":null,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.main,
      },
      "&.Mui-selected": {
        color: "white",
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: "white",
        },
      },
    },
  }));
  

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <ListItemButton
          component={Link}
          href={item.href}
          disabled={item.disabled}
          selected={pathDirect === item.href}
          target={item.external ? "_blank" : ""}
          onClick={onClick}
        >
          <ListItemIcon
             sx={{
              minWidth: "36px",
              p: "3px 0",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              // Đảm bảo không có margin-left hoặc padding-left không mong muốn
              marginLeft: "0",
              paddingLeft: "0",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          {!isCollapsed && (
            <ListItemText>
              <>{item.title}</>
            </ListItemText>
          )}
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
