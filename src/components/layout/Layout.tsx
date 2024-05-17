import Header from "./header/Header";
import "./index.scss";
import "./../../app/App.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout h-auto min-h-screen" data-theme="night">
          <Header />
        <div className="page-content h-auto min-h-screen">
          {children}
        </div>
      </div>
    </>
  );
}
