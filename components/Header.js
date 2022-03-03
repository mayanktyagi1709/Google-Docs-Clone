import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { signOut, useSession } from "next-auth/client";

const Header = () => {

  const [session] = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        color="gray"
        ripple="dark"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        className="md:inline-flex h-20 w-20 border-0"
        
      >
        <Icon name="menu" size="3xl" color="darkgray"/>
      </Button>
      <Icon name="description"  color="blue" size="10xl" />
      <h1 className="md:inline-flex ml-2 text-gray-700 text-2xl">Docs</h1>

      <div
        className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-100 text-gray-600 rounded-lg
      focus-within:text-gray-600 focus-within:shadow-md focus-within:bg-white"
      >
        <Icon name="search" size="3xl" color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 bg-transparent outline-none"
        />
      </div>

      <Button
        color="gray"
        ripple="dark"
        buttonType="outline"
        rounded={true}
        iconOnly={true}
        className="md:ml-20 ml-5 h-20 w-20 border-0"
      >
        <Icon name="apps" size="3xl" color="gray" />
      </Button>

      <img
        onClick={signOut}
        src={session?.user?.image}
        alt="profile pic"
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
      />
    </header>
  );
};

export default Header;
