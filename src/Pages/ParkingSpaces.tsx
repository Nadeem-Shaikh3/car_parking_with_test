import { Backdrop, Button, Card, CardContent, Fade, Grid, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { ParkingSpaceContex } from '../Contexts/ParkingSpacesContext';
export const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: "350px",
        height: "250px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    root: {

        marginTop: "40px"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    modalBtn: {
        margin: "20px 10px",
        color:"red"
    },
    color: {
        color: "#0288d1",
        width: "225px",
        margin: "10px 0",
        // border:"1px solid red"
    },
    pay:{
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"

    }
}));
const ParkingSpaces: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [registerNumber, setRegisterNumber] = React.useState("");
    const { Spaces, updateSpaces, navigateToParkingSlot, selectedSpaces, updateSelectedSpace }: any = useContext(ParkingSpaceContex)

    const navigate = useNavigate();
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onChangeHandler = (e: any) => {
        setRegisterNumber(e.target.value)
    }

    const onAddRegistrationClick = (event: any) => {
        let emptySlots: any = [];
        for (let each of selectedSpaces) {
            if (!each.selected) {
                emptySlots = [...emptySlots, each]; // first pick the element which are not selected
            }
        }
        if (emptySlots.length === 0) {
            alert("parking is full");
        } else {
            let randomItem =
                emptySlots[Math.floor(Math.random() * emptySlots.length)]; 
            let objIndex = selectedSpaces.findIndex(
                (obj: any) => obj.key === randomItem.key
            );
            selectedSpaces[objIndex].selected = true;     
            selectedSpaces[objIndex].carNumber = registerNumber;
            const current = new Date();
            const date = `${current.getDate()}/${current.getMonth() + 1
                }/${current.getFullYear()}`;
            const time = `${current.getHours()}:${current.getMinutes()}`;
            const exitTime = `${current.getHours() + 3}:${current.getMinutes()}`
            selectedSpaces[objIndex].carParkingDate = date;
            selectedSpaces[objIndex].carParkingTime = time;
            selectedSpaces[objIndex].carExistTime = exitTime;
        }
        updateSelectedSpace([...selectedSpaces]);  
    };



    return (

        <div>
            <div>
                <Button variant='outlined' color='primary' onClick={handleOpen} className={classes.modalBtn}>Enter Car Details</Button>

                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <div>
                                <h3 style={{ textAlign: 'center' }} className={classes.color}>Parking Details</h3>
                                <TextField required

                                    value={registerNumber}
                                    onChange={onChangeHandler}
                                    label="Enter Car Registration No"
                                    variant="outlined" /><br />

                                <Button disabled={!registerNumber} size='large' variant="contained"
                                    className={classes.color}
                                    onClick={onAddRegistrationClick}

                                >Allocate Parking</Button>


                            </div>
                        </div>
                    </Fade>
                </Modal>
            </div>
            {selectedSpaces.map((elem: any) => {
                return (
                    <Grid data-testid='parking-space' container justifyContent='center' onClick={() => {
                        navigate("/payment-detail"); localStorage.setItem("id", elem.slot_id.toString())
                    }} >
                        <Grid item xs={6} >
                            <Card className={classes.root} >
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        {elem.title}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Car Registration Number:{elem.carNumber}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Entry Time: {elem.carParkingTime}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        Entry Date: {elem.carParkingDate}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                )
            })}</div>

    )
}

export default ParkingSpaces