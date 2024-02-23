import { toast } from "react-toastify";

const Step3 = ({ setData, data, page, setPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.firstName !== "" &&
      data.lastName !== "" &&
      data.birthDate !== "" &&
      data.email !== ""
    ) {
      setPage((currentPage) => currentPage + 1);
      toast.success("Verification true");
    } else {
      toast.error("verification false");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="FirstName" className="mb-1 block">
        First Name:
      </label>
      <input
        required
        type="text"
        className="mb-4 w-full rounded border p-1"
        id="FirstName"
        placeholder="Enter your first name"
        defaultValue={data.firstName}
        onChange={(e) => {
          setData({ ...data, firstName: e.target.value });
        }}
      />
      <label htmlFor="LastName" className="mb-1 block">
        Last Name:
      </label>
      <input
        required
        type="text"
        className="mb-4 w-full rounded border p-1"
        id="LastName"
        placeholder="Enter your last name"
        onChange={(e) => {
          setData({ ...data, lastName: e.target.value });
        }}
        defaultValue={data.lastName}
      />
      <label htmlFor="MiddleName" className="mb-1 block">
        Middle Name:
      </label>
      <input
        type="text"
        className="mb-4 w-full rounded border p-1"
        id="MiddleName"
        placeholder="Enter your middle name (optional)"
        onChange={(e) => {
          setData({ ...data, middleName: e.target.value });
        }}
        defaultValue={data.middleName}
      />
      <label htmlFor="birthday" className="mb-1 block">
        BirthDate:
      </label>
      <input
        required
        type="date"
        className="mb-4 w-full rounded border p-1"
        id="birthday"
        placeholder="Select your birth date"
        onChange={(e) => {
          setData({ ...data, birthDate: e.target.value });
        }}
        defaultValue={data.birthDate}
      />
      <label htmlFor="email" className="mb-1 block">
        Email:
      </label>
      <input
        required
        type="email"
        className="mb-4 w-full rounded border p-1"
        id="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
        defaultValue={data.email}
      />
      <label htmlFor="gender" className="mb-1 block">
        Gender:
      </label>
      <select
        id="gender"
        className="mb-3 w-full rounded border p-1"
        onChange={(e) => {
          setData({ ...data, gender: e.target.value });
        }}
      >
        <option value="Gender" defaultChecked>
          Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <div className="mb-3 flex gap-1">
        <label htmlFor="checkbox" className="block">
          Are you older than 18?
        </label>
        <input
          id="checkbox"
          type="checkbox"
          required
          className="rounded border "
          onChange={(e) => {
            setData({ ...data, olderthan18: e.target.value });
          }}
          defaultValue={data.olderthan18}
        />
        <p>Yes</p>
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

export default Step3;
