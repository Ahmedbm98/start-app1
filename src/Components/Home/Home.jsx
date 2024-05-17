import Img from "../../assets/imgs/avataaars.svg";
import Linestar from "../HeadingandLineStar/Linestar";
import style from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <div className="content ">
          <div className="image ">
            <img src={Img} alt="Avatar" className="w-25 mx-auto d-block" />
          </div>
          <Linestar heading="START FRAMEWORK" color="#FFF" />
          <div className="capture mt-4">
            <div>Graphic Artist - Web Designer - Illustrator</div>
          </div>
        </div>
      </div>
    </>
  );
}
