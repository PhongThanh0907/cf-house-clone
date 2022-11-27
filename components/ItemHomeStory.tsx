import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  img?: any;
  date: string;
  title: string;
  link: string;
  text: string;
}

const ItemHomeStory = ({ img, date, title, link, text }: Props) => {
  return (
    <div>
      <div>
        <div className="box-zoom-transfer">
          <Image
            className="h-[200px] w-full hover:scale-125 transition-all duration-500 hover:rotate-6 rounded-xl hover:rounded-xl"
            src={img}
            alt="img"
          />
        </div>
        <p className="my-1 mx-3 lg:mx-0 lg:my-2 text-gray-500">{date}</p>
        <Link href={link}>
          <h1 className="mx-3 lg:mx-0 text-md font-semibold hover:text-hover">
            {title}
          </h1>
        </Link>
        <p className="mx-3 lg:mx-0 my-2 text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default ItemHomeStory;
