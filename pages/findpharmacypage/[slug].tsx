import { Box } from '@mui/material'
import dynamic from 'next/dynamic';
import React from 'react'
const DymanicMap = dynamic(() => import("../../Components/Map/FindPharmacy"), {
    ssr: false,
});
const index = () => {
    return (
        <>
            <Box className="prescriptioncard" style={{ marginTop: "30px" }}>
                <DymanicMap />
            </Box>
        </>
    )
}

export default index