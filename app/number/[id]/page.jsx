"use client";
import Binary from "@components/Binary";
import Decimal from "@components/Decimal";
import Hexa from "@components/Hexa";
import Octal from "@components/Octal";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

const page = () => {
  const params = useParams();
  const uid = params.id;
  let title = "";
  const [searchText, setSearchText] = useState("");
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [octal, setOctal] = useState("");
  const [hexa, setHexa] = useState("");
  const [valid, setValid] = useState(true);

  function isBinaryNumber(str) {
    const pattern = /^[01]+(\.[01]+)?$/;
    return pattern.test(str);
  }

  function isOctalNumber(str) {
    const octalRegex = /^[0-7]+(\.[0-7]+)?$/;
    return octalRegex.test(str);
  }

  function convertBinary(binaryString) {
    if (isBinaryNumber(binaryString)) {
      if (binaryString.includes(".")) {
        const [integerPart, fractionalPart] = binaryString.split(".");
        const decimalInteger = parseInt(integerPart, 2);
        const decimalFractional =
          parseInt(fractionalPart || "0", 2) /
          Math.pow(2, fractionalPart.length || 1);
        const decimal = decimalInteger + decimalFractional;
        const octal = decimal.toString(8);
        const hexadecimal = decimal.toString(16).toUpperCase();
        setDecimal(decimal);
        setOctal(octal);
        setHexa(hexadecimal);
      } else {
        const decimal = parseInt(binaryString, 2);
        const octal = decimal.toString(8);
        const hexadecimal = decimal.toString(16).toUpperCase();
        setDecimal(decimal);
        setOctal(octal);
        setHexa(hexadecimal);
      }
    } else {
      setDecimal("Invalid number format");
      setOctal("Invalid number format");
      setHexa("Invalid number format");
    }
  }

  function convertOctal(octalString) {
    if (isOctalNumber(octalString)) {
      if (octalString.includes(".")) {
        const [integerPart, fractionalPart] = octalString.split(".");
        const decimalInteger = parseInt(integerPart, 8);
        const decimalFractional =
          parseInt(fractionalPart || "0", 8) /
          Math.pow(8, fractionalPart.length || 1);
        const decimal = decimalInteger + decimalFractional;
        const binary = decimal.toString(2);
        const hexadecimal = decimal.toString(16).toUpperCase();

        setDecimal(decimal);
        setBinary(binary);
        setHexa(hexadecimal);
      } else {
        const decimal = parseInt(octalString, 8);
        const binary = decimal.toString(2);
        const hexadecimal = decimal.toString(16).toUpperCase();
        setDecimal(decimal);
        setBinary(binary);
        setHexa(hexadecimal);
      }
    } else {
      setDecimal("Invalid number format");
      setBinary("Invalid number format");
      setHexa("Invalid number format");
    }
  }

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    if (uid === "1") {
      convertBinary(value);
    } else if (uid === "2") {
      convertOctal(value);
    }
  };
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
          />
        </form>
        <Binary prop1={octal} prop2={decimal} prop3={hexa} />
      </section>
    );
  } else if (uid === "2") {
    title = "Octal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
        <form className="relative w-full flex-center">
          <input
            type={"text"}
            placeholder={"Enter your number"}
            value={searchText}
            onChange={handleSearchChange}
            required
            className={"search_input peer"}
          />
        </form>
        <Octal prop1={binary} prop2={decimal} prop3={hexa} />
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
        <Decimal prop1={binary} prop2={octal} prop3={hexa} />
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
        <Hexa prop1={binary} prop2={octal} prop3={decimal} />
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
