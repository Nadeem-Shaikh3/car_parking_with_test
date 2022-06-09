import { Button, Grid, Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ParkingSpaceContex } from '../Contexts/ParkingSpacesContext'
import { useStyles } from './ParkingSpaces';

function PaymentDetails() {
    const { spaces, updateSpaces, selectedSpaces, updateSelectedSpace }: any = useContext(ParkingSpaceContex)
    const [paymentSpace, setPaymentSpace] = useState([]);
    const id = localStorage.getItem("id");
    const [res, setRes] = useState()
    const navigate = useNavigate()
    const classes = useStyles()
    console.log(id);

    useEffect(() => {
        const obj = selectedSpaces.filter((item: any) => {
            return id == item.slot_id
        })
        console.log(obj, "filter data");
        // updateSelectedSpace(obj)
        setPaymentSpace(obj)
    }, [id])

    const onPaymentHandler = (id: any) => {
        axios.post("https://httpstat.us/200", {})
            .then((res) => {
                alert("payment done")
                setRes(res.data)
            })
    }

    const onDeallocateHandler = (id: any) => {
        const filteredData = selectedSpaces.filter((item: any) => {
            return item.slot_id !== id
        })
        console.log(filteredData, "filteredData");
        updateSelectedSpace(filteredData)
        navigate("/parking-spaces")
    }
    return (
        <div>{paymentSpace.map((item: any) => {
            return (<Grid className={classes.pay} container justifyContent='center' style={{ textAlign: "center" }}>
                <Grid item xs={12} >
                    <h3 style={{ color: "green" }}>Payment Details</h3>

                    <Typography color="textSecondary" gutterBottom>
                        Id:{item?.slot_id}
                    </Typography>
                    <Typography color="textSecondary">
                        Car Registration Number:{item?.carNumber}
                    </Typography>
                    <Typography color="textSecondary">
                        Entry Time: {item?.carParkingTime}
                    </Typography>
                    <Typography color="textSecondary">
                        Entry Date: {item?.carParkingDate}
                    </Typography>
                    <Typography color="textSecondary">
                        Exit Time: {item?.carExistTime}
                    </Typography>
                    <Typography color="textSecondary">
                        Charge: $30
                    </Typography>
                </Grid>
                <Grid item xs={12} >
                    {!res && <Button variant='outlined' onClick={onPaymentHandler} color="primary" >Payment</Button>}
                    {res && <Button onClick={() => onDeallocateHandler(item.slot_id)} variant='outlined' style={{ color: 'red' }}>Deallocate Space</Button>}

                </Grid>
            </Grid>)
        })}</div>
    )
}

export default PaymentDetails