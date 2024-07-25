import img from "/src/img/apps.30323.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.jpg";

function Proyects({ title, p1, p2, p3, p4 }) {
  return (
    <div className="border-black border-2 dark:border-white rounded-lg max-w-96 mt-10 m-4  ">
      <img src={img} className="w-auto" />
      <hr />
      <div className="">
        <p className="font-semibold m-2 dark:text-white  text-black text-xl">
          {title}
        </p>
        <div className="  text-center flex flex-wrap  ">
          <p className="border-black border-2 rounded-lg p-1 m-2 dark:text-white  dark:border-white text-black font-mono">
            {p1}
          </p>
          <p className="border-black border-2 rounded-lg p-1 m-2 dark:text-white  dark:border-white text-black font-mono">
            {p2}
          </p>
          <p className="border-black border-2 rounded-lg p-1 m-2 dark:text-white dark:border-white  text-black font-mono">
            {p3}
          </p>
          <p className="border-black border-2 rounded-lg p-1 m-2 dark:text-white dark:border-white  text-black font-mono">
            {p4}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Proyects;
