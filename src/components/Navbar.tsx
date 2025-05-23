import {
  LogOut,
  Moon,
  PanelLeftClose,
  PanelRightClose,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme, type Theme } from "./theme-provider";

function Navbar({
  isSideBarOpen,
  setSideBarOpen,
}: {
  isSideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setTheme } = useTheme();
  const Icon = isSideBarOpen ? PanelLeftClose : PanelRightClose;
  const profileMenuItems = [
    {
      icon: <User className="h-[1.2rem] w-[1.2rem] mr-2" />,
      label: "Profile",
    },
    {
      icon: <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />,
      label: "Settings",
    },
    {
      icon: <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />,
      label: "Logout",
    },
  ];
  const themeMenuItems: Theme[] = ["light", "dark", "system"];

  return (
    <nav className="w-full h-16 dark:border shadow flex items-center justify-between px-4">
      <Icon
        className="cursor-pointer"
        onClick={() => {
          setSideBarOpen(!isSideBarOpen);
        }}
      />
      {/* <PanelLeftOpen /> */}
      <div className="flex items-center gap-4">
        <Link to={"/"}>Dashboard</Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <div className="flex justify-center items-center p-2 dark:border-white rounded-xl border">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {themeMenuItems.map((theme) => (
              <DropdownMenuItem
                className="cursor-pointer capitalize"
                onClick={() => setTheme(theme)}
              >
                {theme}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {profileMenuItems.map(({ icon, label }) => (
              <DropdownMenuItem
                className="cursor-pointer"
                variant={`${label === "Logout" ? "destructive" : "default"}`}
              >
                {icon}
                {label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
