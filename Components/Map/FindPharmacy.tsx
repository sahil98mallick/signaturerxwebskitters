import { Box, Button, Card, Dialog, DialogContent, DialogContentText, DialogTitle, TextField, Typography } from '@mui/material';
import * as React from 'react';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DeleteIcon from '@mui/icons-material/Delete';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { useThemeContext } from '@/muitheme/ThemeContextProvider';
import Link from 'next/link';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useQuery } from 'react-query';
import { FindPharmacyInterface, PharmacyListsInterface } from '@/typescripts/interfaces/Findpharmacy.interface';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { FindPharmacyFunc } from '@/api/functions/Findpharmacy';
import { Icon } from 'leaflet';
import { useRouter } from 'next/router';
import { fetchpatientdetails } from '@/api/functions/FetchPatientDetails';
import { Medicine, PatientDetails } from '@/typescripts/interfaces/Fetchpatient.interface';
import { Bounds, MapEventsProps } from '@/typescripts/interfaces/Mapinterface';
import LanguageIcon from '@mui/icons-material/Language';

const MapEvents: React.FC<MapEventsProps> = ({ updateBounds }) => {
    useMapEvents({
        moveend: () => {
            updateBounds();
        },
        click: () => {
            updateBounds();
        }
    });

    return null;
};

const FindPharmacy: React.FC = () => {
    const { mode } = useThemeContext();
    const router = useRouter();
    const { slug } = router?.query;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const wrapperStyles: React.CSSProperties = {
        color: mode === 'dark' ? '#2C3E50' : '#2C3E50',
        background: mode === 'dark' ? '#606060' : 'rgb(245, 248, 250)',
        height: 'auto',
        width: '100%',
    };

    const initialBounds: Bounds = {
        south: 50.52756741275991,
        west: -1.3253418945312534,
        north: 52.46621385575,
        east: 1.5805418945312466
    };
    const [bounds, setBounds] = React.useState<Bounds>(initialBounds);
    const [pharmacy, setPharmacy] = React.useState<FindPharmacyInterface>({
        length: 100,
        page: 1,
        dayOfWeek: "tuesday",
        timeNow: "16:32:26",
        mapBoundary: bounds
    });

    const { data: fetchpharmacylists, isLoading: findpharmacyloading, isError: findpharmacyerror } = useQuery({
        queryFn: () => FindPharmacyFunc(pharmacy),
        queryKey: ["FetchPharmacyLists", { bounds }]
    });
    const myIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535137.png",
        iconSize: [50, 50]
    });



    const MapEventsWrapper: React.FC = () => {
        const map = useMap();

        const updateBounds = () => {
            const newBounds = map.getBounds();
            setBounds({
                south: newBounds.getSouthWest().lat,
                west: newBounds.getSouthWest().lng,
                north: newBounds.getNorthEast().lat,
                east: newBounds.getNorthEast().lng,
            });

            setPharmacy(prevState => ({
                ...prevState,
                mapBoundary: {
                    south: newBounds.getSouthWest().lat,
                    west: newBounds.getSouthWest().lng,
                    north: newBounds.getNorthEast().lat,
                    east: newBounds.getNorthEast().lng,
                }
            }));
        };

        return <MapEvents updateBounds={updateBounds} />;
    };


    // fetch patient Details
    const { data: patientdetails, isLoading: patientdetailsloading, isError: fetchpatientdetailserror } = useQuery({
        queryKey: ["patientdetails", { slug }],
        queryFn: () => fetchpatientdetails(slug),
        enabled: !!slug
    })

    console.log("patinet Details:", patientdetails);


    React.useEffect(() => {
        setPharmacy({
            ...pharmacy,
            mapBoundary: bounds
        });
    }, [fetchpharmacylists]);
    const [selectedItem, setSelectedItem] = React.useState<PharmacyListsInterface | null>(null);
    const handleItemClick = (item: PharmacyListsInterface) => {
        setSelectedItem(item);
    };

    return (
        <>
            <Card className="details-subsection" sx={wrapperStyles}>
                <Box className="detail-lists">
                    <Typography variant="h5" gutterBottom className='textset'>
                        <MedicalInformationIcon />Find Pharmacy
                        <Link href={"/"} style={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "#60b6fb" }}><ArrowBackIosIcon />Back</Link>
                    </Typography>
                    <Box className="viewlists">
                        <Card className="prescriptioonid">
                            <Box className="pid">
                                <Typography variant="body2" gutterBottom className='presciddesign' style={{ fontFamily: "Times" }}>
                                    {slug}
                                </Typography>
                                <Typography variant="body2" gutterBottom className='presciddesign' style={{ fontFamily: "Times" }}>
                                    <CalendarMonthIcon />06-02-2024 12:47
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant='outlined' color='secondary' onClick={handleClickOpen}>View</Button>
                            </Box>
                        </Card>
                        <Box className="searchpostcode">
                            <TextField
                                type="text"
                                placeholder='Enter Postcode / City / Others' style={{ width: "95%", border: "none", boxShadow: "-5px 5px 15px -3px rgba(0,0,0,0.1)" }}
                            />
                        </Box>
                        <Box className="pharmacylists">
                            <center><h2>Total Pharmacy Found: {fetchpharmacylists?.count}</h2></center>
                            <Box className="scrollnavlist">
                                {
                                    fetchpharmacylists?.docs?.map((item: PharmacyListsInterface, key: number) => (
                                        <Card className="listitemview" key={key}>
                                            <Box className="listcard1">
                                                <img src={item?.branch_logo || "https://cdn.sanity.io/images/kts928pd/production/4bec9efc6347f3a4d01639ed8e3f25c9c441adf6-353x357.png"} alt="UseerImage" className='userimage' />
                                                <Box className="userdetails">
                                                    <Typography variant="h6" gutterBottom className='presciddesign' style={{ fontFamily: "Times" }}>
                                                        {item?.name}
                                                    </Typography>
                                                    <Typography variant="body2" gutterBottom className='presciddesign' style={{ fontFamily: "Times" }}>
                                                        {item?.address}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="listcard2">
                                                {item?.status === "active" ? (
                                                    <Button variant="outlined" size='small' color='success' style={{ borderRadius: "20px" }}
                                                        startIcon={<FiberManualRecordIcon style={{ color: "green" }} />}>
                                                        Online
                                                    </Button>
                                                ) : (
                                                    <Button variant="outlined" size='small' color='error' style={{ borderRadius: "20px" }}
                                                        startIcon={<FiberManualRecordIcon style={{ color: "red" }} />}>
                                                        Offline
                                                    </Button>
                                                )}
                                                <Button variant="outlined" size='small' style={{ borderRadius: "20px" }} color='info'
                                                    startIcon={<LanguageIcon />}>
                                                    {item?.city}
                                                </Button>
                                            </Box>
                                        </Card>
                                    ))
                                }
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className="mapview">
                    <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"></a>'
                            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
                        />
                        <MapEventsWrapper />
                        {
                            fetchpharmacylists?.docs?.map((item: PharmacyListsInterface, mapkey: number) => (
                                <Marker key={mapkey} position={[item?.latitude, item?.longitude]} icon={myIcon}>
                                    <Popup>
                                        Latitute:{item?.latitude}, Longditute:{item?.longitude}
                                    </Popup>
                                </Marker>
                            ))
                        }
                    </MapContainer>
                </Box>
            </Card>

            {/* Dialog Interface */}
            {
                patientdetailsloading ? (
                    <></>
                ) : (
                    <>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                            className='dialogsetupdesign'
                        >
                            <DialogTitle id="responsive-dialog-title">
                                {"Patient Details"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <Box>
                                        <Typography variant='body1' gutterBottom>Created At: {patientdetails?.created_at}</Typography>
                                        <Typography variant='body1' gutterBottom>Patient Name: {patientdetails?.patient.name}</Typography>
                                        <Box>
                                            <Box className="medicinedescriptiondesign">
                                                {
                                                    patientdetails?.medicines?.map((item: Medicine, index: number | undefined) => {
                                                        return (
                                                            <>
                                                                <Box className='medicinebox'>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        Description: {item?.description}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        Quantity: {item?.qty}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        Direction: {item?.directions}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        Price Per Tablet: {item?.pricePerTablet}
                                                                    </Typography>
                                                                    <Typography variant='body1' gutterBottom>
                                                                        Total Price: {item?.totalPrice}
                                                                    </Typography>
                                                                </Box>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </Box>
                                        </Box>
                                    </Box>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </>
                )
            }
        </>
    );
};

export default FindPharmacy;
