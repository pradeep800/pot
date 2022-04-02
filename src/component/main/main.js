import { Switch, Route } from "react-router-dom";
import Blogs from "../Blog/blogs";
import Contact from "../contact/contact";
import About from "../about/about";
import Home from "../home/home";
import { Redirect } from "react-router-dom";
export default function Main() {
  return (
    <div>
      <Switch>
        <Route
          path="/about"
          render={() => {
            <About />;
          }}
        >
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blog">
          <Blogs />
        </Route>
        <Route
          path="/"
          render={() => {
            return <Home />;
          }}
        ></Route>
        <Redirect to="/" />
        {
          //when url not match with anthing
        }
      </Switch>
    </div>
  );
}
