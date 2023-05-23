import React from "react";
import Link from "next/link";
const Numbers = () => {
  return (
    <div class="flex flex-wrap -mx-4">
      <Link
        href="/number/1"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Binary to Others</div>
            <p class="text-gray-700 text-base">
              Convert Binary value to other number formats
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/number/2"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Octal to Others</div>
            <p class="text-gray-700 text-base">
              Convert Octal value to other number formats
            </p>
          </div>
        </div>
      </Link>
      <Link
        href="/number/3"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Decimal to Others</div>
            <p class="text-gray-700 text-base">
              Convert Decimal value to other number formats
            </p>
          </div>
        </div>
      </Link>

      <Link
        href="/number/4"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4"
      >
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Hexa-Decimal to Others</div>
            <p class="text-gray-700 text-base">
              Convert Hexa-Decimal value to other number formats
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Numbers;
