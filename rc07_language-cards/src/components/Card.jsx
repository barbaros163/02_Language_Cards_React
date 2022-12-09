import Language from "./Language";
import Container from "react-bootstrap/esm/Container";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container className="rounded-4 mt-4" style={{ background: "#f48b29" }}>
      <h1>Languages</h1>
      {data.map((lang, index) => {
        return <Language {...lang} key={index} />;
        // return <Language lang={lang} />
      })}
    </Container>
  );
};

export default Card;
