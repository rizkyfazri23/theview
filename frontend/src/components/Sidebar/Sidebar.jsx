import React, { useState, useEffect } from 'react';

import VectorImage from 'src/assets/images/filterrumah_Vector.png';
import Vector1Image from 'src/assets/images/filterrumah_Vector_1.png';
import Vector2Image from 'src/assets/images/filterrumah_Vector_2.png';
import Vector4Image from 'src/assets/images/filterrumah_Vector_4.png';
import Vector3Image from 'src/assets/images/filterrumah_Vector_3.png';
import Vector5Image from 'src/assets/images/filterrumah_Vector_5.png';
import Vector6Image from 'src/assets/images/filterrumah_Vector_6.png';
import Vector7Image from 'src/assets/images/filterrumah_Vector_7.png';
import Vector8Image from 'src/assets/images/filterrumah_Vector_8.png';
import Vector9Image from 'src/assets/images/filterrumah_Vector_9.png';
import Vector10Image from 'src/assets/images/filterrumah_Vector_10.png';
import Vector11Image from 'src/assets/images/filterrumah_Vector_11.png';
import Vector12Image from 'src/assets/images/filterrumah_Vector_12.png';
import Vector13Image from 'src/assets/images/filterrumah_Vector_13.png';
import Vector14Image from 'src/assets/images/filterrumah_Vector_14.png';
import Vector15Image from 'src/assets/images/filterrumah_Vector_15.png';
import Vector16Image from 'src/assets/images/filterrumah_Vector_16.png';
import { styled } from '@mui/material/styles';
import "./Sidebar.css";
import { fetchHouseData } from './../../api/api.js';


// import Button1 from 'src/components/Button1/Button1';

const FilterRumah1 = styled('div')(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 0px 3px rgba(20, 20, 20, 0.1), 0px 0px 16px rgba(20, 20, 20, 0.2)`,
  borderRadius: `4px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: `844px`,
  width: '20%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `16px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Frame46 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Filter = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const MdiArrowCollapseLeft = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `16.67px`,
  width: `16.67px`,
  position: `absolute`,
  left: `2px`,
  top: `2px`,
});

const Line6 = styled('div')({
  border: `1px solid rgba(192, 199, 209, 1)`,
  alignSelf: `stretch`,
  height: `0px`,
  margin: `14px 0px 0px 0px`,
});

const Frame47 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Type = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const MdiChevronUp = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector1 = styled('img')({
  height: `6.17px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `7px`,
});

const Frame38 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Q9072 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame37 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Frame36 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Q7660 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Q7260 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Line4 = styled('div')({
  border: `1px solid rgba(192, 199, 209, 1)`,
  alignSelf: `stretch`,
  height: `0px`,
  margin: `14px 0px 0px 0px`,
});

const Frame48 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const KeyPlan = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const MdiChevronUp1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector4 = styled('img')({
  height: `6.17px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `7px`,
});

const Frame39 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl2 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector5 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Gate = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame43 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl3 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector6 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const TamanJoggingTrack = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame40 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl4 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector7 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const ClubHouse = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame41 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl5 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector8 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Musholla = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame42 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl6 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector9 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const MiniLake = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Line5 = styled('div')({
  border: `1px solid rgba(192, 199, 209, 1)`,
  alignSelf: `stretch`,
  height: `0px`,
  margin: `14px 0px 0px 0px`,
});

const Frame49 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Status = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const MdiChevronUp2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector10 = styled('img')({
  height: `6.17px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `7px`,
});

const Frame44 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl7 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector11 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Available = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame45 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl8 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector12 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const SoldOut = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Line7 = styled('div')({
  border: `1px solid rgba(192, 199, 209, 1)`,
  alignSelf: `stretch`,
  height: `0px`,
  margin: `14px 0px 0px 0px`,
});

const Frame50 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const Progress = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px`,
}));

const MdiChevronUp3 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector13 = styled('img')({
  height: `6.17px`,
  width: `10px`,
  position: `absolute`,
  left: `5px`,
  top: `7px`,
});

const Frame51 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl9 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector14 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Q81100 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame53 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl10 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector15 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Q4180 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame52 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const MdiCheckboxBlankOutl11 = styled('div')({
  opacity: `0.5`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector16 = styled('img')({
  height: `15px`,
  width: `15px`,
  position: `absolute`,
  left: `3px`,
  top: `3px`,
});

const Q040 = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  margin: `0px 0px 0px 8px`,
}));

const Frame2 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `8px 0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `14px 0px 0px 0px`,
});

const FloatingSidebar = styled('div')({
  position: 'fixed',
  top: '53%',
  left: '0%',
  transform: 'translateY(-50%)',
  zIndex: '999',
  backgroundColor: '#ffffff',
  boxShadow: '0px 0px 3px rgba(20, 20, 20, 0.1), 0px 0px 16px rgba(20, 20, 20, 0.2)',
  borderRadius: '4px',
  padding: '16px',
  width: '15%', // Mengatur lebar sidebar menjadi 20% dari lebar viewport
  height: '80%', // Mengatur tinggi sidebar menjadi 80% dari tinggi viewport

  '@media (max-width: 768px)': {
    // Mengubah posisi sidebar saat lebar layar <= 768px
    left: 'unset',
    right: '0%',
    transform: 'translateY(-50%)',
    width: '20%',
    height: '80%',
  },
});

const ButtonReset = styled('div')({
  padding: '10px 20px', // Menggunakan tanda kutip untuk nilai dalam string
  borderRadius: '10px',
  border: '1px solid black', // Menambahkan ukuran border dan warna
  backgroundColor: 'white',
  letterSpacing: '1.5px',
  fontSize: '15px',
  transition: 'all .3s ease',
  color: 'black', // Menambahkan warna teks
  fontStyle: `normal`,
  fontFamily: `Poppins`,

  '&:active': { // Menggunakan pseudo-class untuk button aktif
    backgroundColor: 'green', // Warna latar belakang ketika tombol aktif
    boxShadow: '0 0 0 0 rgba(201, 46, 70, 0)', // Menghilangkan shadow saat tombol aktif
    transform: 'translateY(2px)',
    transition: '200ms',
  },
});

const ButtonApply = styled('div')({
  padding: '10px 40px', // Menggunakan tanda kutip untuk nilai dalam string
  borderRadius: '10px',
  border: '1px solid black', // Menambahkan ukuran border dan warna
  backgroundColor: 'green',
  letterSpacing: '1.5px',
  fontSize: '15px',
  transition: 'all .3s ease',
  color: 'white', // Menambahkan warna teks
  marginLeft: '10px', // Menambahkan margin kiri untuk memberikan jarak antara tombol
  fontStyle: `normal`,
  fontFamily: `Poppins`,

  '&:active': { // Menggunakan pseudo-class untuk button aktif
    backgroundColor: 'white', // Warna latar belakang ketika tombol aktif
    color: 'black', // Menambahkan warna teks
    boxShadow: '0 0 0 0 rgba(201, 46, 70, 0)', // Menghilangkan shadow saat tombol aktif
    transform: 'translateY(2px)',
    transition: '200ms',
  },
});


const Sidebar = ({ setIsApplyFilter, setFilterData }) => {
  const [filter81to100, setFilter81to100] = useState(false);
  const [filter41to80, setFilter41to80] = useState(false);
  const [filter0to40, setFilter0to40] = useState(false);
  const [filterAvailable, setFilterAvailable] = useState(false);
  const [filterSoldOut, setFilterSoldOut] = useState(false);
  const [filter9072, setFilter9072] = useState(false);
  const [filter7660, setFilter7660] = useState(false);
  const [filter7260, setFilter7260] = useState(false);

  const handleFilterChange = (filterName) => {
    // Handle progress filter
    if (filterName === '81to100') {
      console.log('Filter 81-100%:', !filter81to100);
      setFilter81to100(!filter81to100);
      setFilter41to80(false);
      setFilter0to40(false);
    } else if (filterName === '41to80') {
      console.log('Filter 41-80%:', !filter41to80);
      setFilter81to100(false);
      setFilter41to80(!filter41to80);
      setFilter0to40(false);
    } else if (filterName === '0to40') {
      console.log('Filter 0-40%:', !filter0to40);
      setFilter81to100(false);
      setFilter41to80(false);
      setFilter0to40(!filter0to40);
    }
  
    // Handle status filter
    if (filterName === 'available') {
      console.log('Filter Available:', !filterAvailable);
      setFilterAvailable(!filterAvailable);
      setFilterSoldOut(false);
    } else if (filterName === 'soldOut') {
      console.log('Filter Sold Out:', !filterSoldOut);
      setFilterAvailable(false);
      setFilterSoldOut(!filterSoldOut);
    }

      // Handle Type filter
    if (filterName === '9072') {
      console.log('Filter 90/72:', !filter9072);
      setFilter9072(!filter9072);
      setFilter7660(false);
      setFilter7260(false);
    } else if (filterName === '7660') {
      console.log('Filter 76/60:', !filter7660);
      setFilter9072(false);
      setFilter7660(!filter7660);
      setFilter7260(false);
    } else if (filterName === '7260') {
      console.log('Filter 72/60:', !filter7260);
      setFilter9072(false);
      setFilter7660(false);
      setFilter7260(!filter7260);
    }
  }

  // Fungsi untuk mereset checkbox filter
  const handleResetFilter = () => {
    setFilterAvailable(false);
    setFilterSoldOut(false);
    setFilter81to100(false);
    setFilter41to80(false);
    setFilter0to40(false);
    setFilter9072(false); // Tambahkan reset untuk filter Type
    setFilter7660(false);
    setFilter7260(false);

    handleApplyFilter();
  };
  

  const handleApplyFilter = () => {
    // Collect active filters into an object
    const activeFilters = {
      filter81to100,
      filter41to80,
      filter0to40,
      filterAvailable,
      filterSoldOut,
      filter9072,
      filter7660,
      filter7260,
    };

    // Call the functions above (e.g., setIsApplyFilter) to send the active filters
    setIsApplyFilter(true); // Send that filters have been applied
    setFilterData(activeFilters); // Send the active filter data
  };

  // Gunakan useEffect untuk memantau perubahan status filter
  useEffect(() => {
    // Panggil handleApplyFilter setiap kali ada perubahan pada status filter
    handleApplyFilter();
  }, [filterAvailable, filterSoldOut, filter81to100, filter41to80, filter0to40, filter9072, filter7660, filter7260]);



  return (
    <FloatingSidebar>
      <Frame46>
        <Filter>{`Filter`}</Filter>
        <MdiArrowCollapseLeft>
          <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
        </MdiArrowCollapseLeft>
      </Frame46>
      <Line6></Line6>
      <Frame47>
        <Type>{`Type`}</Type>
        <MdiChevronUp>
          <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
        </MdiChevronUp>
      </Frame47>
      <Frame38>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter9072}
            onChange={() => handleFilterChange('9072')}
          />
          <span className="custom-checkbox"></span>
        </label>
        <Q9072>{`90/72`}</Q9072>
      </Frame38>
      <Frame37>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter7660}
            onChange={() => handleFilterChange('7660')}
          />
          <span className="custom-checkbox"></span>
        </label>
        <Q7660>{`76/60`}</Q7660>
      </Frame37>
      <Frame36>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter7260}
            onChange={() => handleFilterChange('7260')}
          />
          <span className="custom-checkbox"></span>
        </label>
        <Q7260>{`72/60`}</Q7260>
      </Frame36>
      <Line4></Line4>
      {/* <Frame48>
        <KeyPlan>{`Key Plan`}</KeyPlan>
        <MdiChevronUp1>
          <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
        </MdiChevronUp1>
      </Frame48>
      <Frame39>
        <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
        </label>
        <Gate>{`Gate`}</Gate>
      </Frame39>
      <Frame43>
        <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
        </label>
        <TamanJoggingTrack>{`Taman & Jogging Track`}</TamanJoggingTrack>
      </Frame43>
      <Frame40>
        <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
        </label>
        <ClubHouse>{`Club House`}</ClubHouse>
      </Frame40>
      <Frame41>
        <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
        </label>
        <Musholla>{`Musholla`}</Musholla>
      </Frame41>
      <Frame42>
        <label>
            <input type="checkbox" className="input" />
            <span className="custom-checkbox"></span>
        </label>
        <MiniLake>{`Mini Lake`}</MiniLake>
      </Frame42>
      <Line5></Line5> */}
      <Frame49>
        <Status>{`Status`}</Status>
        <MdiChevronUp2>
          <Vector10 src={Vector10Image} loading="lazy" alt={'Vector'} />
        </MdiChevronUp2>
      </Frame49>
      <Frame44>
      <label>
        <input
          type="checkbox"
          className="input"
          checked={filterAvailable}
          onChange={() => handleFilterChange('available')}
        />
        <span className="custom-checkbox"></span>
      </label>
        <Available>{`Available`}</Available>
      </Frame44>
      <Frame45>
      <label>
        <input
          type="checkbox"
          className="input"
          checked={filterSoldOut}
          onChange={() => handleFilterChange('soldOut')}
        />
        <span className="custom-checkbox"></span>
      </label>
        <SoldOut>{`Sold out`}</SoldOut>
      </Frame45>
      <Line7></Line7>
      <Frame50>
        <Progress>{`Progress`}</Progress>
        <MdiChevronUp3>
          <Vector13 src={Vector13Image} loading="lazy" alt={'Vector'} />
        </MdiChevronUp3>
      </Frame50>
      <Frame51>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter81to100}
            onChange={() => handleFilterChange('81to100')}
          />
          <span className="custom-checkbox"></span>
        </label>
        <Q81100>{`81-100%`}</Q81100>
      </Frame51>
      <Frame53>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter41to80}
            onChange={() => handleFilterChange('41to80')}
          />
          <span className="custom-checkbox"></span>
        </label>  
        <Q4180>{`41-80%`}</Q4180>
      </Frame53>
      <Frame52>
        <label>
          <input
            type="checkbox"
            className="input"
            checked={filter0to40}
            onChange={() => handleFilterChange('0to40')}
          />
          <span className="custom-checkbox"></span>
        </label>
        <Q040>{`0-40%`}</Q040>
      </Frame52>
      <Frame2>
        <ButtonReset onClick={handleResetFilter}>Reset</ButtonReset>
        {/* <ButtonApply onClick={handleApplyFilter}>Apply Filter</ButtonApply> */}
      </Frame2>
    </FloatingSidebar>
  );
}

export default Sidebar;
