import Cleave from "cleave.js/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { imageData } from "../constants/data";

const Step4 = ({ setData, data, setPage }) => {
  const [creditType, setCreditType] = useState(null);

  const handleCreditaType = (type) => {
    setCreditType(type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.cardNumber !== "") {
      setPage((currentPage) => currentPage + 1);
      toast.success("Verification true");
    } else {
      toast.error("Enter card number");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber" className="mb-2 block">
        Card Number:
      </label>
      <Cleave
        placeholder="Enter your credit card number"
        options={{
          creditCard: true,
          onCreditCardTypeChanged: handleCreditaType,
        }}
        value={data.cardNumber}
        onChange={(e) => setData({ ...data, cardNumber: e.target.value })}
        className="mb-3 w-full rounded border p-1"
      />

      {creditType !== null && (
        <div className="my-3">
          <img
            src={imageData[creditType]?.src}
            alt={imageData[creditType]}
            className={`h-[60px] w-[60px] opacity-100 ${
              imageData[creditType]?.src === undefined && "hidden"
            }`}
          />
        </div>
      )}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setPage((currentPage) => currentPage - 1)}
          className={
            "rounded border-none bg-[#0C6DFD] p-2 text-lg text-white outline-none"
          }
        >
          Previous
        </button>
        <button
          type="submit"
          className={
            "rounded border-none bg-[#0C6DFD] p-2 text-lg text-white outline-none"
          }
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step4;
