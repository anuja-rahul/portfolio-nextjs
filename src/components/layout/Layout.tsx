import NavBar from "./navbar/NavBar";
import "./index.scss";
import "./../../app/App.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="layout w-full" data-theme="night">
        <NavBar />
        <div className="page-content">
          <span className="tags all-tags top-tag-html">&lt;html&gt;</span>
          <br />
          <span className="tags top-tags all-tags top-tag-body">
            &lt;body&gt;
          </span>
          {children}
          <span className="tags bottom-tags all-tags body-bottom mb-3">
            &lt;/body&gt;
          </span>
          <br />
          <span className="tags bottom-tags all-tags bottom-tag-html">
            &lt;/html&gt;
          </span>
        </div>
      </div>
    </>
  );
}
