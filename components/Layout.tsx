// Component
import Header from "./Header";

interface childrenType {
  children: React.ReactNode;
}

const Layout = ({ children }: childrenType) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

export default Layout;
