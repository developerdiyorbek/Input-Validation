import { useState } from "react";
import { Modal, Step1, Step2, Step3, Step4, Step5, Step6 } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (page == 0) {
      return (
        <Step1 setData={setData} data={data} page={page} setPage={setPage} />
      );
    } else if (page === 1) {
      return (
        <Step2 setData={setData} data={data} page={page} setPage={setPage} />
      );
    } else if (page === 2) {
      return (
        <Step3 setData={setData} data={data} page={page} setPage={setPage} />
      );
    } else if (page === 3) {
      return (
        <Step4 setData={setData} data={data} page={page} setPage={setPage} />
      );
    } else if (page === 4) {
      return (
        <Step5 setData={setData} data={data} page={page} setPage={setPage} />
      );
    } else if (page === 5) {
      return (
        <Step6 setData={setData} data={data} page={page} setPage={setPage} />
      );
    }
  };

  return (
    <>
      <div className="mx-2">
        {/* Steps */}
        <div className="mx-auto mb-5 mt-16 flex w-full max-w-[600px] items-center justify-center gap-[3px]">
          <p
            className={
              page >= 0
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            1
          </p>
          <span
            className={
              page >= 0
                ? "block h-1 w-[40px] rounded-2xl bg-green-400 md:w-[60px]"
                : "block h-1 w-[40px] rounded-2xl bg-green-200 md:w-[60px]"
            }
          ></span>
          <p
            className={
              page >= 1
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            2
          </p>
          <span
            className={
              page >= 1
                ? "block h-1 w-[40px] rounded-2xl bg-green-400 md:w-[60px]"
                : "block h-1 w-[40px] rounded-2xl bg-green-200 md:w-[60px]"
            }
          ></span>
          <p
            className={
              page >= 2
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            3
          </p>
          <span
            className={
              page >= 2
                ? "block h-1 w-[40px] rounded-2xl bg-green-400 md:w-[60px]"
                : "block h-1 w-[40px] rounded-2xl bg-green-200 md:w-[60px]"
            }
          ></span>
          <p
            className={
              page >= 3
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            4
          </p>
          <span
            className={
              page >= 3
                ? "block h-1 w-[40px] rounded-2xl bg-green-400 md:w-[60px]"
                : "block h-1 w-[40px] rounded-2xl bg-green-200 md:w-[60px]"
            }
          ></span>
          <p
            className={
              page >= 4
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            5
          </p>
          <span
            className={
              page >= 4
                ? "block h-1 w-[40px] rounded-2xl bg-green-400 md:w-[60px]"
                : "block h-1 w-[40px] rounded-2xl bg-green-200 md:w-[60px]"
            }
          ></span>
          <p
            className={
              page >= 5
                ? "h-[25px] w-[25px] rounded-full bg-green-500 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
                : "h-[25px] w-[25px] rounded-full bg-green-300 text-center font-bold text-white md:h-[30px] md:w-[30px] md:pt-[2px]"
            }
          >
            6
          </p>
        </div>

        <div className="container  mx-auto mt-6 rounded border  p-[20px] shadow-md">
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
