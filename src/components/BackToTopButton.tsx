import clsx from "clsx";
import Link from "next/link";
import "./index.scss";

interface BackToTopButtonProps {
  href: string;
  className?: string;
}

export default function BackToTopButton({
  className,
  ...rest
}: BackToTopButtonProps) {
  return (
    <Link {...rest} className={clsx(className, "back-to-top-btn p-2 rounded-full fixed bottom-6 right-6 md:right-10 text-xl md:text-2xl")}>
      ⮙
    </Link>
  );
}
