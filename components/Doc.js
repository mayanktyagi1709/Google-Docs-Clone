import React from "react";
import Image from "next/image";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const Doc = () => {
  return (
    <section className="bg-[#f1f3f4] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-900 text-lg">Start a new document</h2>

          <Button
            color="gray"
            rounded={true}
            buttonType="outline"
            iconOnly={true}
            ripple="dark"
            className="border-0"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>

        <div>
          <div className="relative h-52 w-40 border cursor-pointer hover:border-blue-700">
            <Image src="https://links.papareact.com/pju" layout="fill" />
          </div>

          <p className="font-medium ml-2 mt-2 text-sm">Blank</p>
        </div>
      </div>
    </section>
  );
};

export default Doc;
