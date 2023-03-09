import { ParseSingleMongoDocument } from "@utils/ParseMongoDocument";
import connectDB from "@utils/connectDB";
import Blog from "@models/Blog";
import React from "react";

export default function SingleBlog(props) {
  if (props.error) return <h1>Something Went Wrong</h1>;
  return (
    <div className="max-w-fit m-auto mt-10">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <img className="rounded-t-lg" src={props.data?.imgUrl} alt="image" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.data?.title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.data?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      { params: { slug: "my-first-blog" } },
      { params: { slug: "my-second-blog-1678298076424" } },
    ],
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  try {
    await connectDB();
    const response = await Blog.find({ slug });
    console.log(ParseSingleMongoDocument(response[0]));
    return {
      props: {
        data: ParseSingleMongoDocument(response[0]),
        error: false,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}
