"use client";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const uid = params.id;
  let title = "";
  if (uid == "1") {
    title = "Binary to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
      </section>
    );
  } else if (uid == "2") {
    title = "Octal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
      </section>
    );
  } else if (uid == "3") {
    title = "Decimal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
      </section>
    );
  } else if (uid == "4") {
    title = "Hexa-decimal to__";
    return (
      <section className="w-full flex-col">
        <h1 className="head_text_2 blue_gradient">{title}</h1>
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
