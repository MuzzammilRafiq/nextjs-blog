import Blog from "@models/Blog";
import connectDB from "@utils/connectDB";
import { ParseSingleMongoDocument } from "@utils/ParseMongoDocument";
import { useRouter } from "next/router";

export default function Blogs({ data }) {
  return (
    <div>
      <h3>{data.title}</h3>
      <img src={data.imgUrl} alt={data.slug} width="300px" />
      <hr />
      <p>{data.description}</p>
    </div>
  );
}

export const getStaticPaths = async (context) => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          id: "6401b20d4c8ccd5956c0a279",
        },
      },
      {
        params: {
          id: "6401b2e33aad4f6cead17f2c",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  await connectDB();
  const response = await Blog.findById(context.params.id);
  return {
    props: {
      data: ParseSingleMongoDocument(response),
      error: false,
    },
  };
};
