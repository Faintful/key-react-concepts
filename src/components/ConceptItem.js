import "./ConceptItem.css";

const ConceptItem = ({ title, image, description }) => (
  <li className="concept">
    <img src={image.src} alt={image.alt} />
    <h2>{title}</h2>
    <p>{description}</p>
  </li>
);

export default ConceptItem;
