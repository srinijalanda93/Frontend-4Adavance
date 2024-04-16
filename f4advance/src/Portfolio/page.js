import "./styling/index.css";
import { LeftPage } from "./leftPage.js";
import { RightPage } from "./rightPage.js";

const MainPage = () => {
  return (
    <>
      <div id="Main-page">
        <LeftPage />
        <RightPage />
      </div>
    </>
  );
};
export default MainPage;
console.log("hello main page");
