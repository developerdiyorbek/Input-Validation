import { Datas } from "../constants/data";

const Step6 = ({ data }) => {
  return (
    <div>
      <h1 className="mb-2 mt-2 font-bold">Review your information</h1>
      {Datas.map((item) => (
        <h3 className="mb-2 font-semibold" key={item.id}>
          {item.title}: <span className="font-normal"> {data[item.code]}</span>
        </h3>
      ))}
    </div>
  );
};

export default Step6;
