// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/app.jpg";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={(chatify, bitsOfCode)}
//               isBlog={false}
//               title="VisDoc"
//               description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
//               ghLink="https://github.com/soumyajit4419/Chatify"
//               demoLink="https://chatify-49.web.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={bitsOfCode}
//               isBlog={false}
//               title="Laxmi Astro AI"
//               description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
//               ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
//               demoLink="https://blogs.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="AllDine"
//               description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
//               ghLink="https://github.com/soumyajit4419/Editor.io"
//               demoLink="https://editor.soumya-jit.tech/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="E-Commerce App (Demo)"
//               description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
//               ghLink="https://github.com/soumyajit4419/Plant_AI"
//               demoLink="https://plant49-ai.herokuapp.com/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={suicide}
//               isBlog={false}
//               title="Video Streaming App (Demo)"
//               description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
//               ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
//               // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="Face Recognition and Emotion Detection"
//               description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
//               Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
//               ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
//               // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
//             />
//           </Col> */}
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/app.jpg";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/app.jpg";
// import chatify from "../../Assets/Projects/app.jpg";
// import suicide from "../../Assets/Projects/app.jpg";
// import bitsOfCode from "../../Assets/Projects/app.jpg";

import v1 from "../../Assets/Projects/v1.jpg";
import v2 from "../../Assets/Projects/v2.jpg";
import v3 from "../../Assets/Projects/v3.jpg";
import v4 from "../../Assets/Projects/v4.jpg";
import l1 from "../../Assets/Projects/l1.jpg";
import l2 from "../../Assets/Projects/l2.jpg";
import l3 from "../../Assets/Projects/l3.jpg";
import l4 from "../../Assets/Projects/l4.jpg";
import a1 from "../../Assets/Projects/a1.jpg";
import a2 from "../../Assets/Projects/a2.jpg";
import a3 from "../../Assets/Projects/a3.jpg";
import a4 from "../../Assets/Projects/a4.jpg";
import d1 from "../../Assets/Projects/d1.jpg";
import d2 from "../../Assets/Projects/d2.jpg";
import d3 from "../../Assets/Projects/d3.jpg";
import d4 from "../../Assets/Projects/d4.jpg";
import e1 from "../../Assets/Projects/e1.jpg";
import e2 from "../../Assets/Projects/e2.jpg";
import e3 from "../../Assets/Projects/e3.jpg";
import e4 from "../../Assets/Projects/e4.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Col style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Row className="project-card">
            <ProjectCard
              images={[v4, v1, v3, v2]}
              isBlog={false}
              title="VisDoc"
              description="Visdoc is an innovative mobile application designed to democratize access to healthcare by leveraging the power of crowdsourcing and telemedicine. By connecting patients with a global community of healthcare professionals, Visdoc aims to provide accessible, affordable, and quality medical consultations irrespective of geographical barriers."
              ghLink="https://apps.apple.com/us/app/visdoc/id6468866718"
              demoLink="https://play.google.com/store/apps/details?id=com.visdoc&hl=en"
            />
          </Row>

          <Row className="project-card">
            <ProjectCard
              images={[l1, l2, l3, l4]}
              isBlog={false}
              title="Laxmi Astro AI"
              description="Welcome to 'Laxmi Astro AI' , where traditional Vedic astrology meets cutting-edge artificial intelligence to provide you with an unprecedented level of personalized astrological insights. Our app features a sophisticated AI-driven chat interface that allows you to explore various aspects of your life through astrology. Whether it's understanding your health, increasing wealth, finding marital harmony, or seeking effective remedies for doshas, 'Laxmi Astro AI' offers detailed predictions and solutions tailored just for you."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://play.google.com/store/apps/details?id=com.Laxmiastrology"
            />
          </Row>

          <Row className="project-card">
            <ProjectCard
              images={[a1, a2, a3, a4]}
              isBlog={false}
              title="AllDine"
              description="Welcome to Alldine, your solution for streamlined food ordering. Tired of meetings eating into your precious break time? Alldine offers a convenient way to order and enjoy hot meals from your favorite food court without the hassle. We've revolutionized food ordering to simplify the process for both customers and restaurants. With Alldine, ordering, preparing, and collecting your food is seamless and hassle-free. Say goodbye to long waits and enjoy your meals on your terms."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://play.google.com/store/apps/details?id=com.alldine.hotel"
            />
          </Row>

          <Row className="project-card">
            <ProjectCard
              images={[e1, e3, e2, e4]}
              isBlog={false}
              title="E-Commerce App (Demo)"
              description="An application has been designed to facilitate the process of buying and selling building construction materials. This application includes an admin access dashboard, which allows for efficient management and oversight of transactions and user activities within the platform."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Row>

          <Row className="project-card">
            <ProjectCard
              images={[d1, d2, d4, d3]}
              isBlog={false}
              title="Video Streaming App (Demo)"
              description="An application with features similar to Disney Plus Hotstar at a basic level would involve video streaming functionality, video searching filters to easily navigate through content, detailed video descriptions for user information, and a video uploading admin panel for content management purposes."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" // Example demo link
            />
          </Row>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              images={[emotion]}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/" // Example demo link
            />
          </Col> */}
        </Col>
      </Container>
    </Container>
  );
}

export default Projects;
