export const AppMenu = [
  {
    id: "100",
    parentId: null,
    name: "Schools",
    icon: "",
    route: ["/schools", "/"],
  },
  {
    id: "200",
    parentId: null,
    name: "Events",
    icon: "",
    route: ["/events"],
  },
  {
    id: "300",
    parentId: null,
    name: "Payments",
    icon: "",
    route: ["/payments"],
  },
  {
    id: "101",
    parentId: "100",
    name: "Search",
    icon: "",
    route: ["/schools/search", "/schools/search/all"],
    children: [],
  },
  {
    id: "102",
    parentId: "100",
    name: "Register",
    icon: "",
    route: ["/schools/register"],
    children: [],
  },
];
