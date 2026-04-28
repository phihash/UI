import { useState } from "react";
type Item = {
  id: string;
  title: string;
  contents: string;
};
export default function Accordion({ data }: { data: Item[] }) {
  const [openSections, setOpenSections] = useState(new Set());

  return (
    <>
      {data.map((element) => (
        <>
          <div key={element.id}>{element.title}</div>
          <p>{element.contents}</p>
        </>
      ))}
    </>
  );
}
