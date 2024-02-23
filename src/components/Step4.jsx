import Cleave from "cleave.js/react";
import { useState } from "react";
import { toast } from "react-toastify";

const Step4 = ({ setData, data, setPage, page }) => {
  const [creditType, setCreditType] = useState(null);

  const imageData = [
    {
      type: "mastercard",
      src: "https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg",
    },
    {
      type: "visa",
      src: "https://www.visa.com.au/dam/VCOM/regional/ve/romania/blogs/hero-image/visa-logo-800x450.jpg",
    },
    {
      type: "amex",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png",
    },
    {
      type: "maestro",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Maestro_logo.png/640px-Maestro_logo.png",
    },
  ];

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
        <div className="my-4 flex items-center gap-2">
          {imageData.map((item) => {
            return (
              <img
                src={item.src}
                alt={item.type}
                key={item.type}
                className={`h-[60px] w-[60px] ${
                  creditType === item.type ? "opacity-100" : "opacity-50"
                }`}
              />
            );
          })}
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
