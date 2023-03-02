export default () => {
  return (
    <div>
      <h1>Events in London</h1>
      <a href="/event/event1">Event 1</a>
      <a href="/event/event2">Event 2</a>
      <a href="/event/event3">Event 3</a>
      <a href="/event/event4">Event 4</a>
      <a href="/event/event5">Event 5</a>
      <a href="/event/event6">Event 6</a>
    </div>
  );
};

export const getStaticPaths = async () => {
  const { events_categories } = await import("../../../data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log(context);
  const id = context?.params.cat;
  const { allEvents } = await import("../../../data/data.json");

  const data = allEvents.filter((ev) => ev.city === id);

  return { props: { data, pageName: id } };
};
