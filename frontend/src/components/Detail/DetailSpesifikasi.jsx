
import React, { useState, useEffect } from 'react';
// import Image1Image from 'src/assets/images/Component1_image_1.png';
// import Image2Image from 'src/assets/images/Component1_image_2.png';
// import Image4Image from 'src/assets/images/Component1_image_4.png';
import { styled } from '@mui/material/styles';
// import { useSelector, useDispatch } from 'react-redux'; // If you're using Redux
import { useParams } from 'react-router-dom';
import { useAuth } from './../../AuthContext'; // Import useAuth dari AuthContext
import { fetchOneHouseData, updateHouseData, uploadImage, deleteImage } from './../../api/api'; // Ganti dengan path yang sesuai

import { TextInput, FileInput, Button  } from 'flowbite-react';
import Swal from 'sweetalert2';



const Component11 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `800px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

// const Gallery = styled('div')({
//   display: `flex`,
//   position: `absolute`,
//   isolation: `isolate`,
//   flexDirection: `column`,
//   justifyContent: `flex-start`,
//   alignItems: `flex-start`,
//   padding: `0px`,
//   boxSizing: `border-box`,
//   width: `559px`,
//   left: `10%`,
//   top: `5%`,
// });


const FrameContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row', // Mengatur agar elemen-elemen berdampingan (horizontal)
  alignItems: 'center', // Menyelaraskan elemen-elemen secara vertikal tengah
  padding: '0px',
  boxSizing: 'border-box',
  marginBottom: '10px', // Tambahkan margin bawah sesuai kebutuhan
  '& > div': {
    marginRight: '250px', // Tambahkan jarak antara elemen-elemen
  },
});

const InputContainer = styled('div')({
  
  
});

const StatusContainer = styled('div')(({ isEditing }) => ({
  margin: isEditing
    ? '-42px 0px 0px 47%'
    : '-25px 0px 0px 47%',
}));


const TypeContainer = styled('div')(({ isEditing }) => ({
  margin: isEditing
    ? '-42px 0px 0px 90%'
    : '-25px 0px 0px 90%',
}));

const FrameProgress = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0', // Menghapus margin atas yang menggeser ke atas
  marginBottom: '20px', // Tambahkan margin bawah sesuai kebutuhan
});

const FrameStatus = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0', // Menghapus margin atas yang menggeser ke atas
  marginBottom: '20px', // Tambahkan margin bawah sesuai kebutuhan
});

const FrameType = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  boxSizing: 'border-box',
  margin: '0', // Menghapus margin atas yang menggeser ke atas
  marginBottom: '20px', // Tambahkan margin bawah sesuai kebutuhan
});

const Gallery = styled("div")({
  display: "flex",
  position: "absolute",
  isolation: "isolate",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "0px",
  boxSizing: "border-box",
  width: "559px",
  height: "300px",
  left: "10%",
  top: "10%",
  height: "80%", // Atur tinggi Gallery disini, contoh: 300px
  overflowY: "auto",
});


const Image = styled("img")({
  // Gaya untuk komponen gambar (Image1, Image2, dst.)
  width: "100%",
  height: "auto",
});


const Frame44 = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `24px`,
  boxSizing: `border-box`,
  width: `771px`,
  left: `45%`,
  top: `7%`,
});

const Line6 = styled('div')({
  opacity: `0.5`,
  border: `1px solid rgba(192, 199, 209, 1)`,
  alignSelf: `stretch`,
  height: `0px`,
  margin: `0px`,
});

const SpesifikasiDetail = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `20px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `none`,
  margin: `32px 0px 0px 0px`,
}));

const Frame56 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Frame49 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `723px`,
  margin: `0px`,
});

const Frame47 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Pondasi = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FootPlateTelapak = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame48 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const Struktur = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const BetonBertulang = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const TextContainer = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
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
  width: `723px`,
  margin: `12px 0px 0px 0px`,
});

const Frame471 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Dinding = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const BataRinganMortarFini = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame481 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const DindingPembatas = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const DindingGanda = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame50 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `723px`,
  margin: `12px 0px 0px 0px`,
});

const Frame472 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const PagarBelakang = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const BataRinganMortarFini1 = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame473 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const KamarMandi = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const BataRinganMortarFini2 = styled('div')(({ theme }) => ({
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
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame57 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Cat = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(130, 130, 130, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame501 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `723px`,
  margin: `12px 0px 0px 0px`,
});

const Frame474 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Exterior = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const CatTembokWeatherShie = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame475 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const Interior = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const CatTembok = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame58 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Plafond = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(130, 130, 130, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame502 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `723px`,
  margin: `12px 0px 0px 0px`,
});

const Frame476 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const RuangDalam = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const GypsumFinishCat = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame477 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const RuangLuar = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const GypsumWrWaterResista = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame59 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `32px 0px 0px 0px`,
});

const Lantai = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(130, 130, 130, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  margin: `0px`,
}));

const Frame503 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `723px`,
  margin: `12px 0px 0px 0px`,
});

const Frame478 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Teras = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const KeramikTile = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const Frame479 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px 0px 0px 20px`,
});

const LantaiUtama = styled('div')(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `600`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `20px`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const HomogeneousTile = styled('div')(({ theme }) => ({
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
  textTransform: `capitalize`,
  opacity: `0.699999988079071`,
  alignSelf: `stretch`,
  margin: `4px 0px 0px 0px`,
}));

const ContainerFile = styled('div')(({ theme }) => ({
 
  margin: `2% 0px 0px 10%`,

}));

function DetailSpesifikasi(props) {
  const { isLoggedIn } = useAuth();
  const [progress, setProgress] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState(2);
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState([]); // State untuk gambar-gambar
  const { houseId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const data = await fetchOneHouseData(houseId);
      if (data) {
        setProgress(data.progress);
        setStatus(data.status);
        setType(data.type);
        setImages(data.images); // Inisialisasi gambar-gambar dari data backend
      }
    }
    fetchData();
  }, [houseId]);

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleUpdate = async () => {
    const newData = {
      progress: progress,
      status: status,
      type: type,
      images: images, // Sertakan daftar gambar saat mengirim pembaruan
      
    };

    try {
      const updatedData = await updateHouseData(houseId, newData);

      Swal.fire({
        icon: 'success',
        title: 'Data berhasil disimpan',
        text: 'Data Anda telah berhasil disimpan.',
      });
      
      if (updatedData) {
        setIsEditing(false);
      } else {
        console.error('Failed to update data.');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  let statusText = '';
  if (status === 1) {
    statusText = 'Available';
  } else if (status === 2) {
    statusText = 'Sold Out';
  }

  console.log(type);
  let typeText = '';
  if (type === 1) {
    typeText = '72/60';
  } else if (type === 2) {
    typeText = '76/60';
  } else if (type === 3) {
    typeText = '90/72';
  }
// Fungsi untuk mengunggah gambar
const handleImageUpload = async (e) => {
  const file = e.target.files[0];

  try {
    const imageUrl = await uploadImage(file, houseId);
    setImages((prevImages) => [...prevImages, imageUrl]); // Hapus '/uploads/' dari URL gambar
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

// Fungsi untuk menghapus gambar
const handleDeleteImage = async (index) => {
  const imageUrlToDelete = images[index]; // Dapatkan URL gambar yang akan dihapus
  try {
    await deleteImage(imageUrlToDelete, houseId);
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  } catch (error) {
    console.error('Error deleting image:', error);
  }
};


return (
  <Component11 className={props.className}>
    {/* //buat gambarnya bisa ditambahkan, dihapus dan disimpan kedalam database */}
    <Gallery>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <Image src={`http://localhost:5000${image}`} loading="lazy" alt={`image ${index}`} />
            {isLoggedIn && (
              <Button color="failure" onClick={() => handleDeleteImage(index)}>
                Hapus
              </Button>
            )}
          </div>
        ))}
      </Gallery>
      <ContainerFile>
          {isLoggedIn && (
              <FileInput
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
                disabled={!isEditing}
              />
          )}
      </ContainerFile>

    <Frame44>
      <FrameContainer>
        <SpesifikasiDetail>{`Progress`}</SpesifikasiDetail>
              

        <SpesifikasiDetail>{`Status`}</SpesifikasiDetail>
        

        <SpesifikasiDetail>{`Type`}</SpesifikasiDetail>
        
      </FrameContainer>
      <InputContainer>
          {isLoggedIn && isEditing ? (
                    <>
                    <TextInput
                      type="number"
                      name="progress"
                      id="progress" // Sesuaikan dengan ID yang sesuai
                      value={progress}
                      onChange={handleProgressChange}
                      style={{ width: '200px' }}

                    />
                  </>
                ) : (
                  <TextContainer>{progress} %</TextContainer>
                )}
        </InputContainer>

        <StatusContainer isEditing={isEditing}>
          {isLoggedIn && isEditing ? (
            <select
              name="status"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="1">Available</option>
              <option value="2">Sold Out</option>
            </select>
          ) : (
            <TextContainer>{statusText}</TextContainer>
          )}
        </StatusContainer>

        <TypeContainer isEditing={isEditing}>
          {isLoggedIn && isEditing ? (
              <select
                name="type"
                value={type}
                onChange={handleTypeChange}
              >
                <option value="1">72/60</option>
                <option value="2">76/60</option>
                <option value="3">90/72</option>

              </select>
            ) : (
              <TextContainer>{typeText}</TextContainer>
            )}
        </TypeContainer>
      <br></br>
      
      {isLoggedIn && (
        <div>
          {isEditing ? (
            <Button color="blue" onClick={handleUpdate}>Save</Button>
          ) : (
            <Button color="blue" onClick={() => setIsEditing(true)}>Edit</Button>
          )}
        </div>
      )}

      <br></br> 
        <Line6></Line6>
        <SpesifikasiDetail>{`Spesifikasi Detail`}</SpesifikasiDetail>
        <Frame56>
          <Frame49>
            <Frame47>
              <Pondasi>{`Pondasi`}</Pondasi>
              <FootPlateTelapak>{`Foot Plate / Telapak`}</FootPlateTelapak>
            </Frame47>
            <Frame48>
              <Struktur>{`Struktur`}</Struktur>
              <BetonBertulang>{`Beton Bertulang`}</BetonBertulang>
            </Frame48>
          </Frame49>
          <Frame52>
            <Frame471>
              <Dinding>{`Dinding`}</Dinding>
              <BataRinganMortarFini>
                {`Bata Ringan & Mortar, Finish Cat`}
              </BataRinganMortarFini>
            </Frame471>
            <Frame481>
              <DindingPembatas>{`Dinding Pembatas`}</DindingPembatas>
              <DindingGanda>{`Dinding Ganda`}</DindingGanda>
            </Frame481>
          </Frame52>
          <Frame50>
            <Frame472>
              <PagarBelakang>{`Pagar belakang`}</PagarBelakang>
              <BataRinganMortarFini1>
                {`Bata Ringan & Mortar, Finish Cat`}
              </BataRinganMortarFini1>
            </Frame472>
            <Frame473>
              <KamarMandi>{`Kamar Mandi`}</KamarMandi>
              <BataRinganMortarFini2>
                {`Bata Ringan & Mortar, Finish Keramik`}
              </BataRinganMortarFini2>
            </Frame473>
          </Frame50>
        </Frame56>
        <Frame57>
          <Cat>{`Cat`}</Cat>
          <Frame501>
            <Frame474>
              <Exterior>{`Exterior`}</Exterior>
              <CatTembokWeatherShie>
                {`Cat Tembok Weather Shield / Setara`}
              </CatTembokWeatherShie>
            </Frame474>
            <Frame475>
              <Interior>{`Interior`}</Interior>
              <CatTembok>{`Cat Tembok`}</CatTembok>
            </Frame475>
          </Frame501>
        </Frame57>
        <Frame58>
          <Plafond>{`Plafond`}</Plafond>
          <Frame502>
            <Frame476>
              <RuangDalam>{`Ruang Dalam`}</RuangDalam>
              <GypsumFinishCat>{`Gypsum Finish Cat`}</GypsumFinishCat>
            </Frame476>
            <Frame477>
              <RuangLuar>{`Ruang Luar`}</RuangLuar>
              <GypsumWrWaterResista>
                {`Gypsum WR (Water Resistant) Finish Cat`}
              </GypsumWrWaterResista>
            </Frame477>
          </Frame502>
        </Frame58>
        <Frame59>
          <Lantai>{`Lantai`}</Lantai>
          <Frame503>
            <Frame478>
              <Teras>{`Teras`}</Teras>
              <KeramikTile>{`Keramik Tile`}</KeramikTile>
            </Frame478>
            <Frame479>
              <LantaiUtama>{`Lantai Utama`}</LantaiUtama>
              <HomogeneousTile>{`Homogeneous Tile`}</HomogeneousTile>
            </Frame479>
          </Frame503>
        </Frame59>
      </Frame44>
    </Component11>
  );
}

export default DetailSpesifikasi;
