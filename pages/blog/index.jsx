import Card from "@components/Card";
import Blog from "@schema/Blog";
import { ParseArrayMongoDocument } from "@utils/ParseMongoDocument";
import connectDB from "@utils/connectDB";

export default function index(props) {
  if (props.error) {
    return <h1>Something Went Wrong</h1>;
  }
  return props.data.map((d) => <Card key={d._id} data={d} />);
}

export async function getStaticProps(context) {
  try {
    await connectDB();
    const response = await Blog.find();
    return {
      props: {
        data: ParseArrayMongoDocument(response),
        error: false,
      },
      revalidate: 2,
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
