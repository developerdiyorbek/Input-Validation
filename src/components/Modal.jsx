const Modal = ({ setModal }) => {
  {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode) {
        setModal(false);
      }
    });
  }

  {
    document.addEventListener("click", (e) => {
      if (e.target.classList[0] === "modal") {
        setModal(false);
      }
    });
  }

  return (
    <div className="modal fixed left-0 top-0 flex h-screen w-full items-center justify-center  backdrop-blur-sm">
      <div className="w-[330px] rounded-md bg-slate-100 p-3 text-center">
        <h2 className="mb-[20px] text-xl font-semibold">Congratulations!</h2>
        <h3 className="mb-3 font-normal opacity-70">
          Your data has been saved successfully
        </h3>
        <div className="flex items-center justify-between pl-16 pr-16">
          <button
            className="rounded-md border-none bg-[#0C6DFD] p-2 text-white outline-none"
            onClick={() => setModal(false)}
          >
            Back
          </button>
          <button
            className="rounded-md border-none bg-[#0C6DFD] p-2 text-white outline-none"
            onClick={() => setModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
