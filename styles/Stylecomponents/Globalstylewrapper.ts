import { Box } from "@mui/material";
import styled from "styled-components";

export const Globalwrapper = styled(Box)`
.main-body {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.imagecontainer {
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.headerbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
}

.Logo {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 100%;
  cursor: pointer;
}

.bodycontent {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}

/* Prescription Box */
.loginbox {
  width: 500px;
  height: auto;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: just;
  align-items: center;
  gap: 20px;
  padding-bottom: 10px;
  box-shadow: -19px 8px 15px -3px rgba(0, 0, 0, 0.1);
}

.precriptionform {
  width: 80%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
}


.submitbutton {
  border-radius: 10px;
  color: rgba(0, 0, 0, 0.897);
  box-shadow: none;
  font-size: 17px;
  line-height: 20px;
  text-transform: capitalize;
  text-align: center;
  text-decoration: none;
  padding: 13px 23px;
  font-family: 'Times New Roman', Times, serif;
}

.phead {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
}


/* Slug page */
.prescriptioncard {
  width: 95%;
  height: auto;
}

.details-subsection {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 30px;
  box-shadow: 0px 0px 62px 8px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.detail-lists {
  width: 40%;
  height: auto;
  padding-bottom: 10px;
  /* background-color: #A6CAFA; */
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
  box-shadow: 9px 10px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
}

.textset {
  display: flex;
  gap: 40px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 600;
  justify-content: left;
  padding: 5px;
  align-items: center;
  color: #6B96F8;
}

.prescriptioonid {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.viewlists {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.prescriptioonid {
  width: 95%;
  height: 80px;
  margin: auto;
  border-radius: 20px;
  box-shadow: -5px 5px 15px -3px rgba(0, 0, 0, 0.1);
}

.presciddesign {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.searchpostcode {
  width: 95%;
  height: 60px;
  /* background-color: black; */
  margin: auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pharmacylists {
  width: 97%;
  height: 250px;
  /* background-color: black; */
  margin: auto;
  border-radius: 10px;
  overflow-y: auto;
}

.scrollnavlist {
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.listitemview {
  height: 150px;
  width: 92%;
  margin: auto;
  /* background-color: blue; */
  box-shadow: 9px 10px 16px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid #7DC1F7;
}

.listcard1 {
  width: 90%;
  height: 60%;
  /* background-color: #6B96F8; */
  margin: 5px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}

.userimage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.userdetails {
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  justify-content: flex-start;
}

.listcard2 {
  width: 90%;
  height: 30%;
  /* background-color: #6B96F8; */
  margin: 5px auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
}





/* Map View */
.mapview {
  width: 60%;
  height: 500px;
  background-color: #A6CAFA;
  border-radius: 20px;
}

.leaflet-container {
  height: 100%;
  width: 100%;
  border-radius: 20px;
}


.dialogsetupdesign {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.medicinebox {
  background-color: rgb(239, 243, 245);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  font-family: 'Times New Roman', Times, serif;
}

.medicinedescriptiondesign {
  width: 500px;
  height: auto;
  padding-bottom: 10px;
  /* background-color: #6B96F8; */
}


@media only screen and (max-width: 800px) {
  .details-subsection {
    flex-direction: column;
  }

  .detail-lists {
    width: 90%;
  }

  .mapview {
    width: 100%;
  }

  .loginbox {
    width: 350px;
  }
}
`