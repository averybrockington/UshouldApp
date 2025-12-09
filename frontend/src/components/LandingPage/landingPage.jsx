import React from "react";
import {useNavigate} from 'react-router-dom';
import styled from "styled-components";
import folderImg from "../../assets/folder.png";
import addFriends from "../../assets/addFriends.png";
import stars from "../../assets/4stargroup.png";
import SharedNavBarLanding from "../SharedNavBarLanding";

/* ----------------- Styled Components ----------------- */

const LandingPageContainer = styled.div`
  width: 1544px;
  height: 2330px;
  position: relative;
  background: #FFF6EE;
  overflow: hidden;
`;


/* ---------- VECTORS (PLACEHOLDER BOXES) ---------- */


const FolderIcon = styled.img`
  width: 350px;
  height: auto;
  position: absolute;
  left: 250px;    
  top: 800px;     
`;

const FriendsIcon= styled.img`
  width: 330px;
  height: auto;
  position: absolute;
  left: 250px;    
  top: 1150px;  
`;

const StarIcon = styled.img`
  width: 330px;
  height: auto;
  position: absolute;
  left: 250px;    
  top: 1600px;  
`;

/* --- Your Original Components Below --- */

const Rectangle6 = styled.div`
  width: 1544px;
  height: 400px;
  position: absolute;
  left: 0;
  top: 1926px;
  background: #A79285;
  outline: 5px #72645B solid;
  outline-offset: -2.5px;
`;

const AuthorInfo = styled.div`
  position: absolute;
  left: 121px;
  top: 1983px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #E1C6B4;
  font-size: 21.55px;
  font-weight: 400;
  line-height: 32.33px;
`;

const ContactInfo = styled.div`
  position: absolute;
  left: 960px;
  top: 1991px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #E1C6B4;
  font-size: 21.55px;
  font-weight: 400;
  line-height: 32.33px;
`;

const AboutText = styled.span`
  position: absolute;
  left: 121px;
  top: 1945px;
  color: #FFF6EE;
  font-size: 21.55px;
  font-weight: 800;
  text-decoration: underline;
  line-height: 32.33px;
`;

const ContactText = styled.span`
  position: absolute;
  left: 960px;
  top: 1953px;
  color: #FFF6EE;
  font-size: 21.55px;
  font-weight: 800;
  text-decoration: underline;
  line-height: 32.33px;
`;

const TopButtonContainer = styled.div`
  width: 118.55px;
  height: 50.29px;
  position: absolute;
  left: 661px;
  top: 2145px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TopButtonBackground = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(114, 99, 91, 0.67);
  border-radius: 269.44px;
  z-index: 1;
`;

const TopButtonText = styled.span`
  z-index: 2;
  color: #FFF6EE;
  font-size: 23.5px;
  font-family: Rubik;
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
`;

// Sign In Button 
const ButtonContainer = styled.div`
  width: 400px;
  height: 50.29px;
  position: absolute;
  left: 240px;
  top: 570px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonBackground = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(114, 99, 91, 0.67);
  border-radius: 269.44px;
  z-index: 1;
`;

const ButtonText = styled.span`
  z-index: 2;
  color: #FFF6EE;
  font-size: 23.5px;
  font-family: Rubik;
  font-weight: 700;
  text-transform: lowercase;
  line-height: 1;
`;


const FeaturesText = styled.span`
  position: absolute;
  left: 243px;
  top: 698px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #A79285;
  font-size: 35px;
  font-weight: 600;
  line-height: 27.93px;
`;


// DESCRIPTIONS FOR FEATURES

const OrganizeText = styled.span`
  position: absolute;
  left: 680.29px;
  top: 900px;
  color: #72645B;
  font-size: 37.4px;
  font-weight: 800;
  text-transform: lowercase;
  line-height: 37.4px;
`;
const ConnectText = styled.span`
  position: absolute;
  left: 680.29px;
  top: 1300px;
  color: #72645B;
  font-size: 37.4px;
  font-weight: 800;
  text-transform: lowercase;
  line-height: 37.4px;

`;const ReviewText = styled.span`
  position: absolute;
  left: 680.29px;
  top: 1625px;
  color: #72645B;
  font-size: 37.4px;
  font-weight: 800;
  text-transform: lowercase;
  line-height: 37.4px;
`;
//title
const PageTitle = styled.span`
  position: absolute;
  left: 243px;
  top: 254px;
  color: #72645B;
  font-size: 100.28px;
  font-family: Rubik;
  font-weight: 900;
  text-decoration: underline;
  text-transform: lowercase;
  line-height: 150.42px;
`;

const Description = styled.div`
  position: absolute;
  left: 243px;
  top: 418.36px;
  width: 640.36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #72645B;
  font-size: 21.55px;
  font-weight: 800;
  line-height: 32.33px;
`;




/* ----------------- Main Component ----------------- */

const LandingPage = () => {

  const navigate = useNavigate();

  return (

    <LandingPageContainer>
     
      <SharedNavBarLanding />
      
     
      {/* VECTORS */}
      <div style = {{position: "relative"}}>
      <FolderIcon src={folderImg} alt="Folder Icon" />
      <FriendsIcon src = {addFriends} alt="Add Friends Icon" />
      <StarIcon src = {stars} alt="Star Icon" />
      </div>
      {/* Original content */}
       <PageTitle id = "home"> USHOULD</PageTitle>

      <Description>
        ushould is a database app that aims to track and enhance a users’ personal recommendations. 
        From TV to restaurants, ushould can handle it all. 
        No more forgotten notes or handmade to-watch/read lists.
      </Description>

      <ButtonContainer id = "sign-in" onClick={() => navigate("/signin")}>
        <ButtonBackground />
        <ButtonText>sign in or create new account</ButtonText>
      </ButtonContainer>


      <Rectangle6 />
      <AuthorInfo>
        Author: Avery Brockington<br />
        Version: December 2025<br />
        Fall Senior Integrated Project 2025
      </AuthorInfo>
      <ContactInfo>
        email: brockingtonam@gmail.com<br />
        avery.brockington22@kzoo.edu<br />
        phone: (734) 642 8271
      </ContactInfo>
      <AboutText id = "about">About</AboutText>
      <ContactText id = "contact">Contact</ContactText>

      <TopButtonContainer 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <TopButtonBackground />
        <TopButtonText>to top</TopButtonText>
      </TopButtonContainer>

    

      <FeaturesText>features:</FeaturesText>
      <OrganizeText>organize your personal recommendations</OrganizeText>
      <ConnectText> connect with friends and share your recs</ConnectText>
      <ReviewText>review and discuss recommendations</ReviewText>


     
    </LandingPageContainer>
   
  );
};

export default LandingPage;
