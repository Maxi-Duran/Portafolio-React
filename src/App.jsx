import Intro from "./components/intro";
import Contact from "./components/contact";
import Proyects from "./components/proyects";
import Footer from "./components/footer";
import { useState } from "react";
function App() {
  const [light, dark] = useState(false);

  const change = () => {
    dark(!light);
    if (!light) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
      />
    </svg>
  );
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="size-6 "
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
  return (
    <div className="">
      <button
        onClick={change}
        className="  btn border-0 bg-violet-400 w-16 fixed right-5 top-4  "
      >
        {light ? moon : sun}
      </button>
      <Intro />
      <div className="flex flex-wrap justify-center gap-10">
        <Proyects
          title={"Web de Juegos"}
          p1={"HTML"}
          p2={"CSS"}
          p3={"JAVASCRIPT"}
          p4={"DJANGO"}
        />
        <Proyects
          title={"Web de Juegos"}
          p1={"HTML"}
          p2={"CSS"}
          p3={"JAVASCRIPT"}
          p4={"DJANGO"}
        />
        <Proyects
          title={"Web de Juegos"}
          p1={"HTML"}
          p2={"CSS"}
          p3={"JAVASCRIPT"}
          p4={"DJANGO"}
        />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
