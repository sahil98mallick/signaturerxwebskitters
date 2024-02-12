import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useThemeContext } from "@/muitheme/ThemeContextProvider";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrecriptionInputs } from "@/typescripts/interfaces/precription.interface";
import { useRouter } from "next/router";
import Axiosinstance from "@/api/axiosinstance/Axiosinstance";
import { fetchid } from "@/api/functions/Fetchprescriptionid";
import { toast } from "react-toastify";
import { Idvalidate } from "@/api/functions/VallidateId";
import { FadeLoader, PulseLoader } from "react-spinners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { mode } = useThemeContext()
  const loginboxwrapper = {
    color: mode === 'black' ? 'black' : 'black',
    background: mode === 'dark' ? '#E7F1FA' : 'white',
    Height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  };
  // Form Setup and Render
  const router = useRouter()
  const [pidloading, setPidloading] = React.useState(false)
  const [dobloading, setDobloading] = React.useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<PrecriptionInputs>();
  const [showPrescriptionForm, setShowPrescriptionForm] = React.useState(true);
  const [showDobForm, setShowDobForm] = React.useState(false);
  const [presid, setpresid] = React.useState("");

  const onSubmitPrescriptionId = async (data: PrecriptionInputs) => {
    setPidloading(true)
    try {
      console.log("prescription id:-", data);
      const response = await fetchid(data.prescriptionId)
      if (response?.status === "success") {
        setpresid(data.prescriptionId);
        setShowPrescriptionForm(false);
        setShowDobForm(true);
        toast.success(`Prescription Id: ${data.prescriptionId}  verified`)
      } else {
        toast.error(`Prescription Id: ${data.prescriptionId} not valid`)
      }
    } catch (error) {
      console.log(error);
      toast.error("Prescription ID is invalid")
    } finally {
      setPidloading(false)
    }
  };


  const onSubmitDob = async (data: PrecriptionInputs) => {
    const formatToDayMonthYear = (date: string): string => {
      const [year, month, day] = date.split('-');
      return `${day}-${month}-${year}`;
    };
    data.dateOfBirth = formatToDayMonthYear(data.dateOfBirth);
    console.log("Prescription Id and dob:-", data);
    setDobloading(true)
    try {
      const response = await Idvalidate(data)
      // console.log("validate Dob:-", response?.data);
      if (response?.data) {
        toast.success(`DoB For Prescription Id: - ${data.prescriptionId} Verified`)
        // router.push(`/${data.prescriptionId}`)
        router.push(`/findpharmacypage/${data.prescriptionId}`)
      }else{
        toast.error("Date of birth is incorrect")
      }
    } catch (error) {
      console.log("Error Found for Dob:-", error);
      toast.error("Date of birth is incorrect")
    } finally {
      setDobloading(false)
    }
  };
  return (
    <>
      {
        showPrescriptionForm && (
          <form onSubmit={handleSubmit(onSubmitPrescriptionId)}>
            <Box className="loginbox" sx={loginboxwrapper} style={{ marginTop: "100px" }}>
              <Image
                src="https://signature-rx-ui.dedicateddevelopers.us/static/media/Union.e4e01c84eca6a4a5be29eca5018b690d.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ marginTop: "10px" }}
              />
              <Typography variant="h5" gutterBottom className="phead">
                Enter Precription
              </Typography>
              <Box className="precriptionform">
                <TextField
                  placeholder="Enter prescription"
                  style={{ width: "100%", borderRadius: "20px" }}
                  {...register("prescriptionId")}
                />
                {
                  pidloading ? (
                    <><Button type="submit" variant="contained" size="small" className="submitbutton" color="primary" disabled>
                      Loading... <PulseLoader
                        color="#36d7b7"
                        size={10}
                      />
                    </Button></>
                  ) : (
                    <><Button type="submit" variant="contained" size="small" className="submitbutton" color="primary">
                      Submit
                    </Button></>
                  )
                }
              </Box>
            </Box>
          </form>
        )
      }
      {
        showDobForm && (
          <form onSubmit={handleSubmit(onSubmitDob)}>
            <Box className="loginbox" sx={loginboxwrapper} style={{ marginTop: "100px" }}>
              <Image
                src="https://signature-rx-ui.dedicateddevelopers.us/static/media/Union.e4e01c84eca6a4a5be29eca5018b690d.svg"
                width={100}
                height={100}
                alt="Picture of the author"
                style={{ marginTop: "10px" }}
              />
              <Typography variant="h5" gutterBottom className="phead">
                Hi, Test Patient 👋
              </Typography>
              <Typography variant="body2" gutterBottom className="ptext">
                Please confirm your date of birth to continue
              </Typography>
              <Box className="precriptionform">
                <TextField
                  type="date"
                  placeholder="Enter prescription"
                  style={{ width: "100%", borderRadius: "20px" }}
                  {...register("dateOfBirth", { required: true })}
                />
                {
                  dobloading ? (
                    <><Button type="submit" variant="contained" size="large" className="submitbutton" color="primary" disabled>
                      Loading... <PulseLoader
                        color="#36d7b7"
                        size={10}
                      />
                    </Button></>
                  ) : (
                    <><Button type="submit" variant="contained" size="large" className="submitbutton" color="primary">
                      Enter DoB
                    </Button></>
                  )
                }
              </Box>
            </Box>
          </form>
        )
      }
    </>
  );
}
