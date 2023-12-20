import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import AuthButtons from "./AuthButtons";

type Props = {};

const Header = (props: Props) => {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/topics/react/posts/new">
            Create a post
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <AuthButtons />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
