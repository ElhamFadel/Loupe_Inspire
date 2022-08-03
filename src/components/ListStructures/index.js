import Structure from "../Structure";

const styleStructures = [
  {
    id: 1,
    label: "call stack",
    color: "#4ba02c",
  },
  {
    id: 2,
    label: "web api",
    color: "#f15e4a",
  },
  {
    id: 3,
    label: "microstack queue",
    color: "#c17f06",
  },
  {
    id: 4,
    label: "event loop",
    color: "#109788",
  },
];
const ListStructures = () => {
  return (
    <>
      {styleStructures.map(({ id, label, color }) => (
        <Structure key={id} label={label} color={color} />
      ))}
    </>
  );
};

export default ListStructures;
