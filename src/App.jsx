import { useState } from "react";
import { Modal, Step1, Step2, Step3, Step4, Step5, Step6 } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Steps from "./components/Steps";

const App = () => {
  const [modal, setModal] = useState(false);

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    login: "",
    password: "",
    confirmPassword: "",
    date: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: "",
    email: "",
    gender: "",
    cardNumber: "",
    olderthan18: false,
    consent: false,
    cookie: false,
  });

  const Pages = () => {
    switch (page) {
      case 0:
        return (
          <Step1 setData={setData} data={data} page={page} setPage={setPage} />
        );
      case 1:
        return (
          <Step2 setData={setData} data={data} page={page} setPage={setPage} />
        );
      case 2:
        return (
          <Step3 setData={setData} data={data} page={page} setPage={setPage} />
        );
      case 3:
        return (
          <Step4 setData={setData} data={data} page={page} setPage={setPage} />
        );
      case 4:
        return (
          <Step5 setData={setData} data={data} page={page} setPage={setPage} />
        );
      case 5:
        return (
          <Step6 setData={setData} data={data} page={page} setPage={setPage} />
        );
    }
  };

  return (
    <>
      <div className="mx-4">
        <Steps page={page} />

        <div className="container max-w-4xl  mx-auto mt-6 rounded border  p-[20px] shadow-md">
          <h1 className="mb-4 text-xl font-bold text-blue-600">
            User Registration Wizard - Step {page + 1}
          </h1>

          <div>{Pages()}</div>

          <div className="flex items-center gap-2">
            <button
              className={
                page == 5
                  ? "rounded border-none bg-[#0C6DFD] p-2 text-lg text-white outline-none"
                  : "hidden"
              }
              onClick={() => setPage((currentPage) => currentPage - 1)}
            >
              Previous
            </button>

            <button
              className={
                page === 5
                  ? "rounded border-none bg-[#0C6DFD] p-2 text-lg text-white outline-none"
                  : "hidden"
              }
              onClick={() => setModal(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {modal && <Modal setModal={setModal} />}

      <ToastContainer />
    </>
  );
};

export default App;
