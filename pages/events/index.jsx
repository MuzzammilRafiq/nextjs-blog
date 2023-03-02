import Image from "next/image";
function index({ categories }) {
  return (
    <div>
      <h1>Events Page</h1>
      {categories.map((category) => (
        <a href={`/events/${category.id}`} key={category.id}>
          <Image src={category.image} width={200} height={150} />

          <h2>{category.title}</h2>
        </a>
      ))}
    </div>
  );
}

export default index;

export const getStaticProps = async () => {
  const data = await import("../../data/data.json");
  return {
    props: {
      categories: data.events_categories,
    },
  };
};
