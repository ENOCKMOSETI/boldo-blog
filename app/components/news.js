import { useEffect, useState } from "react";
import Image from "next/image";

export default function News() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const url =
        process.env.NODE_ENV === "development"
          ? "http://localhost:3000/data.json"
          : "https://boldo-b.vercel.app/data.json";
      const res = await fetch(url);
      const data = await res.json();
      setBlogs(data.blogs);
    }
    fetchBlogs();
  }, []);

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h3 className="text-start text-2xl mb-6 font-manrope">Latest News</h3>
      <div className="flex flex-wrap justify-between gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
          >
            <div className="relative w-full h-48">
              <Image
                src={blog.image.svg}
                alt={blog.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 flex flex-col gap-3 flex-grow text-start">
              <p className="text-sm">
                <span className="font-semibold"> Category</span>{" "}
                <span className="text-gray-500">{blog.date}</span>
              </p>
              <h1 className="text-lg font-medium">{blog.title}</h1>
              <div className="flex items-center gap-2 mt-auto">
                <Image
                  src={blog.image.author}
                  alt={blog.author}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="text-sm text-gray-600">{blog.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button className="rounded-full border border-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-6 hover:bg-gray-100">
          Load More
        </button>
      </div>
    </div>
  );
}
