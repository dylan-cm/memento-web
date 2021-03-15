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
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
