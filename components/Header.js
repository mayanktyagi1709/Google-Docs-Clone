import React from "react";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Header = () => {
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
        src="data:image/jpeg;base64,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"
        alt="profile pic"
        loading="lazy"
        className="cursor-pointer h-12 w-12 rounded-full ml-2"
      />
    </header>
  );
};

export default Header;
