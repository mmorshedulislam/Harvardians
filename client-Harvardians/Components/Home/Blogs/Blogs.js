import Blog from "./Blog";

const Blogs = () => {
  const imgs = [
    { img: "https://lian-ng.envytheme.com/assets/images/news/news1.jpg" },
    { img: "https://lian-ng.envytheme.com/assets/images/news/news2.jpg" },
    { img: "https://lian-ng.envytheme.com/assets/images/news/news3.jpg" },
  ];

  let content;

  if (imgs.length < 1) {
    content = <p className="text-center text-2xl">No News Available!</p>;
  }
  if (imgs.length) {
    content = (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {imgs.map((img, i) => (
          <Blog key={i} img={img}></Blog>
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-5 lg:p-10">
      <div className="my-5">
        <h2 className="text-5xl text-center font-bold">Academic’s Blogs</h2>
        <p className="lg:w-2/3 mx-auto text-xl text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          dicta reprehenderit deserunt quo iste eos architecto nostrum itaque a
          consequatur.
        </p>
      </div>
      {content}
    </div>
  );
};

export default Blogs;
