import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/header";
import { Container, GlobalCss, SiteHeaderWrapper } from "../styles";

const SiteLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <GlobalCss />
      <SiteHeaderWrapper $overlay={isHomePage}>
        <Container>
          <Header />
        </Container>
      </SiteHeaderWrapper>
      <Outlet />
    </>
  );
};

export default SiteLayout;
