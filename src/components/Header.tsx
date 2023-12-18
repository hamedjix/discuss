import { auth } from "@/auth";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";
import * as actions from "@/actions";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

type Props = {};

const Header = async (props: Props) => {
  const session = await auth();
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {session?.user ? (
          <Popover placement="bottom">
            <PopoverTrigger>
              <Avatar className="cursor-pointer" src={session.user.image || ""} />
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col gap-3 px-1 py-2">
                <div className="text-small font-bold">{session.user.name}</div>
                <form action={actions.signOut}>
                  <Button type="submit" variant="solid" color="danger">
                    Sign Out
                  </Button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <form action={actions.signIn}>
                <Button type="submit" color="secondary" variant="bordered">
                  Sign In
                </Button>
              </form>
            </NavbarItem>
            <NavbarItem>
              <form action={actions.signIn}>
                <Button type="submit" color="primary" variant="flat">
                  Sign Up
                </Button>
              </form>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
