import Header from "./navbar/NavBar";
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
          <span className="">
            <span className="tags all-tags top-tag-html">&lt;html&gt;</span>
            <br />
            <span className="tags top-tags all-tags">&lt;body&gt;</span>
          </span>
          {children}
          <span className="">
            <span className="tags bottom-tags all-tags body-bottom mb-3">
              &lt;/body&gt;
            </span>
            <br />
            <span className="tags bottom-tags all-tags bottom-tag-html">
              &lt;/html&gt;
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
