import React from "react";
import Link from "next/link";
const Numbers = () => {
  const items = [
    {
      id: "1",
      title: "Binary to Others",
      text: "Convert Binary value to other number formats",
    },
    {
      id: "2",
      title: "Octal to Others",
      text: "Convert Octal value to other number formats",
    },
    {
      id: "3",
      title: "Decimal to Others",
      text: "Convert Decimal value to other number formats",
    },
    {
      id: "4",
      title: "Hexa-Decimal to Others",
      text: "Convert Hexa-Decimal value to other number formats",
    },
  ];
  return (
    <div className="flex flex-wrap -mx-4">
      {items.map((item) => (
        <Link
          href={`/number/${item.id}`}
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.text}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Numbers;
