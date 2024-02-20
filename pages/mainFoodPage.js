import { useState, useCallback } from "react";
import HoverCard from "../components/hover-card";
import PortalPopup from "../components/portal-popup";
import styles from "./mainFoodPage.module.css";

const MainFoodCardsPage = () => {
  const [isHoverCardOpen, setHoverCardOpen] = useState(false);

  const openHoverCard = useCallback(() => {
    setHoverCardOpen(true);
  }, []);

  const closeHoverCard = useCallback(() => {
    setHoverCardOpen(false);
  }, []);

  const onColorsDropdownFrameContainerClick = useCallback(() => {
    // Please sync "Main Food Cards Page wtih Dropdown" to the project
  }, []);

  return (
    <>
      <div className={styles.mainFoodCardsPage}>
        <div className={styles.foodcardsframe}>
          <div className={styles.pineapplecard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Pineapple</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/pineappleImage.png"
            />
          </div>
          <div className={styles.oreganocard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Oregano</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/oreganoImage.png"
            />
          </div>
          <div className={styles.chivescard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Chives</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/chivesImage.png"
            />
          </div>
          <div className={styles.basilcard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Basil</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/basilImage.png"
            />
          </div>
          <div className={styles.artichokecard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Artichoke</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/artichokeImage.png"
            />
          </div>
          <div className={styles.olivescard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Olives</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/olivesImage.png"
            />
          </div>
          <div className={styles.mushroomscard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.mushrooms}>Mushrooms</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/mushroomsImage.png"
            />
          </div>
          <div className={styles.wheatcard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Wheat</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/wheatImage.png"
            />
          </div>
          <div className={styles.blackberriescard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.mushrooms}>Blackberries</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/blackberriesImage.png"
            />
          </div>
          <div className={styles.bananacard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Banana</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/bananaImage.png"
            />
          </div>
          <div className={styles.cacaocard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Cacao</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/cacaoImage.png"
            />
          </div>
          <div className={styles.purslanecard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Purslane</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/purslaneImage.png"
            />
          </div>
          <div className={styles.tomatoescard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Tomatoes</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/tomatoesImage.png"
            />
          </div>
          <div className={styles.swisschardcard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.mushrooms}>Swiss Chard</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/swissChardImage.png"
            />
          </div>
          <div className={styles.sweetpotatocard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.sweetPotato}>Sweet Potato</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/sweetPotatoImage.png"
            />
          </div>
          <div className={styles.potatoescard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Potatoes</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/potatoesImage.png"
            />
          </div>
          <div className={styles.bellpeppercard}>
            <div
              className={styles.foodcardbackground16}
              onClick={openHoverCard}
            />
            <b className={styles.pineapple}>Bell Pepper</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/bellPepperImage.png"
            />
          </div>
          <div className={styles.jalapenopeppercard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.jalapenoPepper}>Jalapeno Pepper</b>
            <img
              className={styles.jalapenoimageIcon}
              alt=""
              src="/jalapenoImage.png"
            />
          </div>
          <div className={styles.okracard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.okra}>Okra</b>
            <img
              className={styles.okraimageIcon}
              alt=""
              src="/okraImage.png"
            />
          </div>
          <div className={styles.eggplantcard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.pineapple}>Eggplant</b>
            <img
              className={styles.pineappleimageIcon}
              alt=""
              src="/eggplantImage.png"
            />
          </div>
          <div className={styles.carrotcard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.carrot}>Carrot</b>
            <img
              className={styles.carrotimageIcon}
              alt=""
              src="/carrotImage.png"
            />
          </div>
          <div className={styles.beetscard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.beets}>Beets</b>
            <img
              className={styles.beetsimageIcon}
              alt=""
              src="/beetsImage.png"
            />
          </div>
          <div className={styles.lentilscard}>
            <div className={styles.foodcardbackground} />
            <b className={styles.lentils}>Lentils</b>
            <img
              className={styles.lentilsimageIcon}
              alt=""
              src="/lentilsImage.png"
            />
          </div>
          <div className={styles.chickpeascard}>
            <div className={styles.foodcardbackground23} />
            <img
              className={styles.chickpeasimageIcon}
              alt=""
              src="/chickpeasImage.png"
            />
            <b className={styles.chickpeas}>Chickpeas</b>
          </div>
          <div className={styles.strawberrycard}>
            <div className={styles.foodcardbackground23} />
            <img
              className={styles.chickpeasimageIcon}
              alt=""
              src="/strawberryImage.png"
            />
            <b className={styles.chickpeas}>Strawberry</b>
          </div>
          <div className={styles.blueberrycard}>
            <div className={styles.foodcardbackground23} />
            <img
              className={styles.blueberriesimageIcon}
              alt=""
              src="/blueBerriesImage.png"
            />
            <b className={styles.chickpeas}>Blueberry</b>
          </div>
        </div>
        <div className={styles.searchcardsframe}>
          <div className={styles.searchbarinput} />
          <img className={styles.searchicon} alt="" src="/searchicon.png" />
          <div className={styles.searchByName}>Search by name</div>
        </div>
        <div
          className={styles.colorsdropdownframe}
          onClick={onColorsDropdownFrameContainerClick}
        >
          <div className={styles.colorsdropdownbackground} />
          <div className={styles.allColors}>All Colors! 🔻</div>
        </div>
        <div className={styles.calculatorsidebarframe}>
          <div className={styles.calculatorsidebarbackground} />
          <div className={styles.youCurrentlyHaveContainer}>
            <span className={styles.youCurrentlyHaveContainer1}>
              <p className={styles.youCurrentlyHave}>
                You currently have nothing in your calculator!
              </p>
              <p className={styles.youCurrentlyHave}>&nbsp;</p>
              <p className={styles.youCurrentlyHave}>
                Hover over a food card to add it to the calculator
              </p>
            </span>
          </div>
          <b className={styles.myCalculator}>My Calculator</b>
          <img
            className={styles.calculatoricon}
            alt=""
            src="/calculatorIcon.png"
          />
        </div>
        <div className={styles.headerframe}>
          <img
            className={styles.oregonstateuniversityicon}
            alt=""
            src="/oregonStateUniversityIcon.png"
          />
          <div className={styles.informationbutton}>
            <div className={styles.informationButtonOutline} />
            <b className={styles.information}>Information</b>
          </div>
        </div>
        <div className={styles.footerframe}>
        <img className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
        <img className={styles.osufootericon} alt="" src="/osufootericon.svg" />
        <b className={styles.collegeOfHealth}>
          College Of Health ASP3IRE Center
        </b>
        <b className={styles.oregonStateUniversitys}>
          Oregon State University’s Advancing Science, Practice, Programming and
          Policy in Research Translation for Children's Environmental Health
          Center
        </b>
      </div>
      </div>
      {isHoverCardOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeHoverCard}
        >
          <HoverCard onClose={closeHoverCard} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainFoodCardsPage;
