import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const Root = () => {
  return (
    <div className="font-montserrat">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
