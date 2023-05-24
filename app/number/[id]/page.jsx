"use client";
import { useParams } from "next/navigation";
import {useState, useEffect} from "react";

const page = () => {
  const params = useParams();
  const uid = params.id;
  let title = "";

    function isBinaryNumber(str) {
        const pattern = /^[01]+(\.[01]+)?$/;
        return pattern.test(str);
    }


    const [searchText, setSearchText] = useState("");
  const [valid, setValid] = useState(true);
  const handleSearchChange = (e) =>{
      const value = e.target.value;
      setSearchText(value);

  }
  if (uid === "1") {
    title = "Binary to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
        <form className="relative w-full flex-col">
            <p className={"logo_text flex flex-end"}></p>
          <input
            type={"text"}
            placeholder={"Enter your binary number"}
            value={searchText}
            onChange={handleSearchChange}
            required
            className={`search_input peer`}
            pattern="[01]+"
          />
        </form>
      </section>
    );
  } else if (uid === "2") {
    title = "Octal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
        <form className="relative w-full flex-center">
          <input
            type={"number"}
            placeholder={"Enter your number}"}
            value={searchText}
            onChange={handleSearchChange}
            required
            className={"search_input peer"}
          />
        </form>
      </section>
    );
  } else if (uid === "3") {
    title = "Decimal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
        <form className="relative w-full flex-center">
          <input
            type={"number"}
            placeholder={"Enter your number"}
            value={searchText}
            onChange={handleSearchChange}
            required
            className={"search_input peer"}
          />
        </form>
      </section>
    );
  } else if (uid === "4") {
    title = "Hexa-decimal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
        <form className="relative w-full flex-center">
          <input
            type="number"
            placeholder="Enter your number"
            value={searchText}
            onChange={handleSearchChange}
            required
            className={"search_input peer"}
          />
        </form>
      </section>
    );
  } else {
    title = "Bad request";
    return (
      <section className="w-full h-full flex items-center justify-center">
        <h1 className="head_text_2 orange_gradient text-center">{title}</h1>
      </section>
    );
  }
};

export default page;
