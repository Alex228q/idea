import { useParams } from "react-router-dom";
import { ViewIdeaRouteParams } from "../../lib/routes";

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams;
  return (
    <>
      <h1>{ideaNick}</h1>
      <p>Desc idea 1</p>
      <div>
        <p>Text 1 idea 1</p>
        <p>Text 2 idea 1</p>
        <p>Text 3 idea 1</p>
      </div>
    </>
  );
};
