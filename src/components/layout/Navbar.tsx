import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={"/users"}>Users</Link>
            
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to={"/tasks"}>Tasks</Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      
    </div>
  );
}
