import { Switch, Route } from "react-router-dom";
import Blog from "../Blog/blog";
import Contact from "../contact/contact";
import About from "../about/about";
import Home from "../home/home";
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
          <Blog />
        </Route>
        <Route
          path="/"
          render={() => {
            return <Home />;
          }}
        ></Route>
      </Switch>
    </div>
  );
}
