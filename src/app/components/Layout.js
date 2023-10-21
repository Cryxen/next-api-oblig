import LoggedOnUser from "./LoggedOnUser";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <LoggedOnUser />
      <main className="layout">{children}</main>
    </>
  );
};
export default Layout;