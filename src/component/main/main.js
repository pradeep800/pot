import { Switch, Route } from "react-router-dom";
import Blogs from "../Blog/blogs";
import Contact from "../contact/contact";
import About from "../about/about";
import Home from "../home/home";
import temp from "./blog_data";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Blog from "../Blog/blog";
import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import axios from "axios";
export default function Main() {
  const [load, setLoaded] = useState(false);
  const [obj, setobj] = useState([]);
  useEffect(() => {
    fetch("https://api.pradeepbisht.com/blogs").then(async (result) => {
      let photo = await fetch("https://api.pradeepbisht.com/image/1", {
        method: "GET",
        mode: "cors",
      });
      let json = await result.json();
      console.log(json);
      let blob = await photo.blob();
      console.log(blob);
      let render = new FileReader();
      render.readAsDataURL(blob);
      render.onload = () => {
        json.forEach((object) => {
          object.img = render.result;
        });
      };
      setobj(json);
    });
  }, []);
  useEffect(() => {
    setTimeout(setLoaded, 1000, true);
  }, [obj]);
  return (
    <div className="relative top-[40px]">
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        ></Route>
        <Route
          path="/"
          exact
          render={() => {
            return <Home />;
          }}
        ></Route>
        <Route path="/about">{obj.length != 0 && <About obj={obj} />}</Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/blog">
          {() => {
            if (!load) {
              return <Spinner>Loading...</Spinner>;
            } else if (load && obj.length != 0) {
              return <Blogs obj={obj} />;
            } else {
              <Spinner>Loading....</Spinner>;
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
