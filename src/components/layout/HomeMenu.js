import Image from "next/image";
import { MenuItem } from "../menu/MenuItem";

export const HomeMenu = () => {
  return (
    <section className="">
      <div className="text-center mb-4">
        <h3 className="upercase text-gray-600 font-semibold leading-4">
          Check out
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  );
};
