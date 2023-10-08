import { Link } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  return (
    <>
      <div className="text-sm py-20 bg-slate-100 mb-16">
        <h2 className="text-5xl font-semibold text-center mb-10">Our Blogs</h2>
        <div className="container mx-auto breadcrumbs text-center">
          <ul className="justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
      <Blog></Blog>
    </>
  );
};

export default Blogs;
