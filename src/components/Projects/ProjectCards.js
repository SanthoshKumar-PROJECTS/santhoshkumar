// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
// import { BsGithub } from "react-icons/bs";

// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
//         {/* <Button variant="primary" href={props.ghLink} target="_blank">
//           <BsGithub /> &nbsp;
//           {props.isBlog ? "Blog" : "GitHub"}
//         </Button>
//         {"\n"}
//         {"\n"} */}

//         {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

//         {!props.isBlog && props.demoLink && (
//           <Button
//             variant="primary"
//             href={props.demoLink}
//             target="_blank"
//             // style={{ marginLeft: "10px" }}
//           >
//             <CgWebsite /> &nbsp;
//             {"About"}
//           </Button>
//         )}
//       </Card.Body>
//     </Card>
//   );
// }
// export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

function ProjectCards({
  images,
  title,
  description,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view">
      {/* Render images */}
      {/* <div className="project-images-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project ${index + 1}`}
            className="project-image"
          />
        ))}
      </div> */}
      <Card.Title style={{ marginTop: 25 }}>{title}</Card.Title>
      <div className="project-images-containerss">
        {images.map((img, index) => (
          <Card.Img
            key={index}
            variant="top"
            src={img}
            alt={`card-img-${index + 1}`}
            className="project-imagess"
          />
        ))}
      </div>
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        {!isBlog && demoLink && (
          <Button variant="primary" href={demoLink} target="_blank">
            <SiGoogleplay /> &nbsp; Play Store
          </Button>
        )}
        {!isBlog && ghLink && (
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiAppstore /> &nbsp; App Store
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
