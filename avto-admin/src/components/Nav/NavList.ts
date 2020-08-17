interface NavItem {
  children: string;
  to: string;
  exact?: boolean;
}

const NavList: NavItem[] = [
  { to: "/", children: "Main", exact: true },
  { to: "/season", children: "Season" },
  { to: "/country", children: "Country" },
  { to: "/brand", children: "Brand" },
  { to: "/serie", children: "Serie" },
];

export default NavList;
