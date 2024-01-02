import Link from "next/link";

function Button({ children, disabled, to, type, onClick, dataTest }) {
  const base =
    " inline-block text-sm  bg-[#9da452] font-semibold uppercase tracking-wide text-slate-200 transition-colors duration-300 hover:bg-stone-400 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed";
  const styles = {
    primary: base + "px-4 py-3 md:px-6 md:py-4 ",
    small: base + "px-5 py-2 md:px-2 md:py-1.5 text-xs rounded-md ",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full",
    secondary:
      "inline-block text-white bg-[#9da452] text-sm px-4 py-2.5  md:px-6 md:py-3.5 rounded-full border-2 border-stone-300 font-bold uppercase tracking-wide  transition-colors duration-300  focus:outline-none focus:ring focus:ring-stone-200  focus:ring-offset-2 disabled:cursor-not-allowed ",
  };

  if (to)
    return (
      <Link href={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        data-set={dataTest}
        disabled={disabled}
        onClick={onClick}
        className={styles[type]}
      >
        {children}
      </button>
    );
  return (
    <button data-set={dataTest} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
