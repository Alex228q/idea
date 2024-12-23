import { trpc } from "../../lib/trpc";

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery();
  if (isLoading || isFetching) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }
  return (
    <>
      <h1>All Ideas</h1>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.desc}</p>
        </div>
      ))}
    </>
  );
};
