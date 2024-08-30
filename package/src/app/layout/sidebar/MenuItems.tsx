import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconBrandProducthunt,
  IconFileInvoice,
  IconUserUp,
  IconUsersGroup,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Product",
    icon: IconBrandProducthunt,
    href: "/Products",  // Đảm bảo đường dẫn này khớp với cấu trúc trang của bạn
  },
  {
    id: uniqueId(),
    title: "Invoice",
    icon: IconFileInvoice,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Employee",
    icon: IconUserUp,
    href: "",
  },
  {
    id: uniqueId(),
    title: "Customer",
    icon: IconUsersGroup,
    href: "",
  },
  {
    navlabel: true,
    subheader: "Utilities",
    isCollapsed: true,
  },
  {
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
  {
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
  {
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
];

export default Menuitems;
