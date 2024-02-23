import { toast } from "react-toastify";

const Step1 = ({ setData, data, setPage, page }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      setPage((currentPage) => currentPage + 1);
      toast.success("Verification true");
    } else {
      toast.error("Verification false");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login" className="mb-1 block">
        Login:
      </label>
      <input
        onChange={(e) => setData({ ...data, login: e.target.value })}
        required
        type="text"
        className="mb-4 w-full rounded border p-1"
        id="login"
        placeholder="Enter your login"
        defaultValue={data.login}
      />
      <label htmlFor="password" className="mb-1 block">
        Password:
      </label>
      <input
        onChange={(e) => setData({ ...data, password: e.target.value })}
        required
        type="password"
        className="mb-4 w-full rounded border p-1"
        id="password"
        placeholder="Enter your password"
        defaultValue={data.password}
      />
      <label htmlFor="confirmpassword" className="mb-1">
        Confirm Password:
      </label>
      <input
        onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
        required
        type="password"
        className="mb-4 w-full rounded border p-1"
        id="confirmpassword"
        placeholder="Confirm your password"
      />

      <button
        className={
          "rounded border-none bg-[#0C6DFD] p-2 text-lg text-white outline-none"
        }
      >
        Next
      </button>
    </form>
  );
};

export default Step1;
