const Steps = ({ page }) => {
  return (
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
  );
};

export default Steps;
