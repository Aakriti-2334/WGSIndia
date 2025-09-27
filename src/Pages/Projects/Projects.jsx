import React, { useState, useEffect } from "react";
import "./Projects.css";
/* import ProjectSlideshow from "./Slideshow";  */// Adjust the path as per your file structure


// Import static images
/*BCG*/
import bcgss1 from "../../assets/Projects/BCG/BCG (1).jpg";
import bcgss2 from "../../assets/Projects/BCG/BCG (2).jpg";
import bcgss3 from "../../assets/Projects/BCG/BCG (3).jpg";
import bcgss4 from "../../assets/Projects/BCG/BCG (4).jpg";
import bcgss5 from "../../assets/Projects/BCG/BCG (5).jpg";


/*Bosch*/
import boschss1 from "../../assets/Projects/Bosch/Bosch (1).jpg";
import boschss2 from "../../assets/Projects/Bosch/Bosch (2).jpg";
import boschss3 from "../../assets/Projects/Bosch/Bosch (3).jpg";
import boschss4 from "../../assets/Projects/Bosch/Bosch (4).jpg";
import boschss5 from "../../assets/Projects/Bosch/Bosch (5).jpg";
import boschss6 from "../../assets/Projects/Bosch/Bosch (6).jpg";
import boschss7 from "../../assets/Projects/Bosch/Bosch (7).jpg";
import boschss8 from "../../assets/Projects/Bosch/Bosch (8).jpg";
import boschss9 from "../../assets/Projects/Bosch/Bosch (9).jpg";


/*Expedia*/
import expediass1 from "../../assets/Projects/Expedia/Expedia (1).jpg";
import expediass2 from "../../assets/Projects/Expedia/Expedia (2).jpg";
import expediass3 from "../../assets/Projects/Expedia/Expedia (3).jpg";
import expediass4 from "../../assets/Projects/Expedia/Expedia (4).jpg";
import expediass5 from "../../assets/Projects/Expedia/Expedia (5).jpg";
import expediass6 from "../../assets/Projects/Expedia/Expedia (6).jpg";
import expediass7 from "../../assets/Projects/Expedia/Expedia (7).jpg";

/*HP*/
import hpss1 from "../../assets/Projects/HP/HP (1).jpg";
import hpss2 from "../../assets/Projects/HP/HP (2).jpg";
import hpss3 from "../../assets/Projects/HP/HP (3).jpg";
import hpss4 from "../../assets/Projects/HP/HP (4).jpg";

/*HP Vogue wall*/
import hpvoguewallss1 from "../../assets/Projects/HP Vogue Wall/HPVogueWall (1).jpg";
import hpvoguewallss2 from "../../assets/Projects/HP Vogue Wall/HPVogueWall (2).jpg";


/*Informatica*/
import informaticass1 from "../../assets/Projects/Informatica/Informatica (1).jpg";
import informaticass2 from "../../assets/Projects/Informatica/Informatica (2).jpg";
import informaticass3 from "../../assets/Projects/Informatica/Informatica (3).jpg";
import informaticass4 from "../../assets/Projects/Informatica/Informatica (4).jpg";
import informaticass5 from "../../assets/Projects/Informatica/Informatica (5).jpg";
import informaticass6 from "../../assets/Projects/Informatica/Informatica (6).jpg";
import informaticass7 from "../../assets/Projects/Informatica/Informatica (7).jpg";
import informaticass8 from "../../assets/Projects/Informatica/Informatica (8).jpg";
import informaticass9 from "../../assets/Projects/Informatica/Informatica (9).jpg";


/*SAP*/
import sapss1 from "../../assets/Projects/SAP/SAP (1).jpg";
import sapss2 from "../../assets/Projects/SAP/SAP (2).jpg";
import sapss3 from "../../assets/Projects/SAP/SAP (3).jpg";
import sapss4 from "../../assets/Projects/SAP/SAP (4).jpg";
import sapss5 from "../../assets/Projects/SAP/SAP (5).jpg";

/*Sequoia Captial*/
import sequoiaCapitalss1 from "../../assets/Projects/Sequoia Capital/Sequoia Capital (1).jpg";
import sequoiaCapitalss2 from "../../assets/Projects/Sequoia Capital/Sequoia Capital (2).jpg";
import sequoiaCapitalss3 from "../../assets/Projects/Sequoia Capital/Sequoia Capital (3).jpg";
import sequoiaCapitalss4 from "../../assets/Projects/Sequoia Capital/Sequoia Capital (4).jpg";
import sequoiaCapitalss5 from "../../assets/Projects/Sequoia Capital/Sequoia Capital (5).jpg";

/*Thompson Reuters*/
import thompsonReutersss1 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (1).jpg";
import thompsonReutersss2 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (2).jpg";
import thompsonReutersss3 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (3).jpg";
import thompsonReutersss4 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (4).jpg";
import thompsonReutersss5 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (5).jpg";
import thompsonReutersss6 from "../../assets/Projects/Thomson Reuters/ThomsonReuters (6).jpg";

/*Verizon Chennai */
import verizonChennaiss1 from "../../assets/Projects/Verizon Chennai/VerizonChennai (1).jpeg";
import verizonChennaiss2 from "../../assets/Projects/Verizon Chennai/VerizonChennai (2).jpeg";
import verizonChennaiss3 from "../../assets/Projects/Verizon Chennai/VerizonChennai (3).jpeg";
import verizonChennaiss4 from "../../assets/Projects/Verizon Chennai/VerizonChennai (4).jpeg";

/*Cargill*/
import cargillss1 from "../../assets/Projects/Cargill/Cargill (1).jpg";
import cargillss2 from "../../assets/Projects/Cargill/Cargill (2).jpg";
import cargillss3 from "../../assets/Projects/Cargill/Cargill (3).jpg";
import cargillss4 from "../../assets/Projects/Cargill/Cargill (4).jpg";
import cargillss5 from "../../assets/Projects/Cargill/Cargill (5).jpg";
import cargillss6 from "../../assets/Projects/Cargill/Cargill (6).jpg";
import cargillss7 from "../../assets/Projects/Cargill/Cargill (7).jpg";
import cargillss8 from "../../assets/Projects/Cargill/Cargill (8).jpg";


const projectBCG = [
  bcgss1,
  bcgss2,
  bcgss3,
  bcgss4,
  bcgss5,
];

const projectBosch = [
  boschss1,
  boschss2,
  boschss3,
  boschss4,
  boschss5,
  boschss6,
  boschss7,
  boschss8,
  boschss9,
];

const projectExpedia = [
  expediass1,
  expediass2,
  expediass3,
  expediass4,
  expediass5,
  expediass6,
  expediass7,
];

const projectHP = [
  hpss1,
  hpss2,
  hpss3,
  hpss4,
];
  
const projectHPVogueWall = [
  hpvoguewallss1,
  hpvoguewallss2,
];


const projectInformatica = [
  informaticass1,
  informaticass2,
  informaticass3,
  informaticass4,
  informaticass5,
  informaticass6,
  informaticass7,
  informaticass8,
  informaticass9,
];

const projectSAP = [
  sapss1,
  sapss2,
  sapss3,
  sapss4,
  sapss5,
];

const projectSequoiaCapital = [
  sequoiaCapitalss1,
  sequoiaCapitalss2,
  sequoiaCapitalss3,
  sequoiaCapitalss4,
  sequoiaCapitalss5,
];

const projectThompsonReuters = [
  thompsonReutersss1,
  thompsonReutersss2,
  thompsonReutersss3,
  thompsonReutersss4,
  thompsonReutersss5,
  thompsonReutersss6,
];

const projectVerizonChennai = [
  verizonChennaiss1,
  verizonChennaiss2,
  verizonChennaiss3,
  verizonChennaiss4,
];

const projectCargill = [
  cargillss1,
  cargillss2,
  cargillss3,
  cargillss4,
  cargillss5,
  cargillss6,
  cargillss7,
  cargillss8,
];







const ProjectSlideshow = ({ images, name }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="slshow">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <div className="caption">{name}</div>
    </div>
  );
};







const Projects = () => {
  return (
    <div className="grid-container">
      {/* BCG */}
      <div className="grid-item">
        <ProjectSlideshow images={projectBCG} name='BCG' />
      </div>

      {/* Bosch */}
      <div className="grid-item">
        <ProjectSlideshow images={projectBosch} name='Bosch'  />
      </div>

      {/* Cargill */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectCargill} name='Cargill'  />
      </div>

      {/* Expedia */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectExpedia} name='Expedia' />
      </div>

      {/* HP Vogue Wall */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectHPVogueWall} name='HP Vogue Wall' />
      </div>

      {/* HP */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectHP} name='HP' />
      </div>

      {/* Informatica */}
      <div className="grid-item ">
        <ProjectSlideshow  images={projectInformatica} name='Informatica'  />
      </div>

      {/* SAP */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectSAP}  name='SAP' />
      </div>

      {/* Sequoia Capital */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectSequoiaCapital} name='Sequoia Capital'  />
      </div>

      {/* Thomson Reuters */}
      <div className="grid-item">
        <ProjectSlideshow  images={projectThompsonReuters} name='Thomson Reuters'  />
      </div>

      {/* Verizon Chennai */}
      <div className="grid-item ">
        <ProjectSlideshow  images={projectVerizonChennai} name='Verizon Chennai' />
      </div>

      {/* Placeholder for future projects */}
      
    </div>
  );
};

export default Projects;










