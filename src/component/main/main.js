import { Switch, Route } from "react-router-dom";
import Blogs from "../Blog/blogs";
import Home from "../home/home";
import temp from "./blog_data";
import { Redirect } from "react-router-dom";
import Blog from "../Blog/blog";
// import Contact from "../contact/contact";
// import About from "../about/about";
import { useState, useEffect, lazy, Suspense } from "react";
import Spinner from "../spinner/spinner";
import axios from "axios";
export default function Main() {
  const Contact = lazy(() => import("../contact/contact"));
  const About = lazy(() => import("../about/about"));
  const [load, setLoaded] = useState(false);
  const [obj, setobj] = useState([]);
  useEffect(() => {
    axios.get("https://api.pradeepbisht.com/blogs").then(async (result) => {
      let json = result.data;
      // let blob = await photo.blob();
      // let render = new FileReader();
      // render.readAsDataURL(blob);
      // render.onload = () => {
      //   json.forEach((object) => {
      //     object.img = render.result;
      //   });
      // };
      setobj(json);
    });
  }, []);
  useEffect(() => {
    setTimeout(setLoaded, 1000, true);
  }, [obj]);
  return (
    <div className="relative top-[40px]">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <Suspense fallback={<Spinner>Loading...</Spinner>}>
            {obj.length != 0 && <About obj={obj} />}
          </Suspense>
        </Route>
        <Route path="/contact">
          <Suspense fallback={<Spinner>Loading...</Spinner>}>
            <Contact />
          </Suspense>
        </Route>
        <Route exact path="/blog">
          {() => {
            if (!load) {
              return <Spinner>Loading...</Spinner>;
            } else if (load && obj.length != 0) {
              return <Blogs obj={obj} />;
            } else {
              return <Spinner>Loading....</Spinner>;
            }
          }}
        </Route>
        <Route path="/blog/:id">
          {() => {
            if (!load) {
              return <Spinner>Loading...</Spinner>;
            } else if (load && obj.length != 0) {
              return <Blog object={obj} />;
            } else {
              <Spinner>Loading....</Spinner>;
            }
          }}
        </Route>
        <Redirect
          to="/"
          render={() => {
            return <Home />;
          }}
        />
      </Switch>
    </div>
  );
}
