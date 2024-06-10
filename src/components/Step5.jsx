import { toast } from "react-toastify";

const Step5 = ({ setData, data, setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.login !== "" && data.password !== "") {
      setPage((currentPage) => currentPage + 1);
      toast.success("Verification true");
    } else {
      toast.error("verification false");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Step 5 - consent to Personal Data Processing</h2>
      <label htmlFor="log" className="mb-1 block">
        Login:
      </label>
      <input
        defaultValue={data.login}
        onChange={(e) =>
          setData({
            ...data,
            login: e.target.value,
          })
        }
        required
        type="text"
        className="mb-4 w-full rounded border p-1"
        id="log"
      />
      <label htmlFor="passworD" className="mb-1 block">
        Password:
      </label>
      <input
        defaultValue={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
        type="password"
        className="mb-4 w-full rounded border p-1"
        id="passworD"
      />
      <div className="mb-2 flex items-center">
        <label htmlFor="consent" className="mr-1 block text-sm">
          Consent to Personal Data Processing
        </label>
        <input
          onChange={(e) => setData({ ...data, consent: e.target.value })}
          required
          type="checkbox"
          id="consent"
        />
      </div>
      <div className="mb-2 flex items-center">
        <label htmlFor="cookie" className="mr-1 block text-sm">
          I agree to use cookies
        </label>
        <input
          onChange={(e) => setData({ ...data, cookie: e.target.value })}
          required
          type="checkbox"
          id="cookie"
        />
      </div>
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

export default Step5;
