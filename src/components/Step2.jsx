import { toast } from "react-toastify";

const Step2 = ({ setData, data, page, setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.date !== "") {
      setPage((currentPage) => currentPage + 1);
      toast.success("Verification true");
    } else {
      toast.error("Select one option");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="selection" className="mb-2 block">
        Subscription type:
      </label>
      <select
        className="mb-3 w-full rounded border p-1"
        onChange={(e) => {
          setData({ ...data, date: e.target.value });
        }}
        id="selection"
      >
        <option value="" defaultChecked>
          choose an option
        </option>
        <option value="Free">Free</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

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

export default Step2;
