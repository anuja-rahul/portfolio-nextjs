import clsx from "clsx";
import Link from "next/link";
import "./index.scss";

interface DefaultButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function DefaultButton({
  children,
  className,
  ...rest
}: DefaultButtonProps) {
  return (
    <Link {...rest} className={clsx(className, "common-button rounded-full text-md sm:text-[1rem] p-2 sm:px-3 md:text-xl")}>
      <span className="children">{children}</span>
    </Link>
  );
}
