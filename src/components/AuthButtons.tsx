"use client";
import * as actions from "@/actions";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { NavbarItem } from "@nextui-org/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { useSession } from "next-auth/react";

type Props = {};

const AuthButtons = (props: Props) => {
  const session = useSession();
  if (session.status === "loading") return null;
  return session.data?.user ? (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Avatar className="cursor-pointer" src={session.data.user.image || ""} />
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-3 px-1 py-2">
          <div className="text-small font-bold">{session.data.user.name}</div>
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
  );
};

export default AuthButtons;
