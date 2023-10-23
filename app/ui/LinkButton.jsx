/* eslint react/prop-types: 0 */
import Link from "next/link";

import { useRouter } from "next/navigation";

function LinkButton({ children, to }) {
  const router = useRouter();
  const className = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  if (to === "-1")
    return (
      <Link href={to} className={className} onClick={() => router(-1)}>
        {children}
      </Link>
    );
  return (
    <Link href={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
