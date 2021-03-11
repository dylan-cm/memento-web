import "./Layout.css";
import NavBar from "../molecules/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="layout">
      <NavBar />
      <div className="content-container">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
