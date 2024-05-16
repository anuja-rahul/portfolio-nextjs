import Header from "./header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout h-auto min-h-screen" data-theme="night">
        <Header />
        {children}
      </div>
    </>
  );
}
