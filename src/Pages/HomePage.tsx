import { Button, Grid, TextField } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import { ParkingSpaceContex } from '../Contexts/ParkingSpacesContext'

const HomePage: React.FC = () => {
    const { spaces, updateSpaces, navigateToParkingSlot, selectedSpaces, updateSelectedSpace }: any = useContext(ParkingSpaceContex)

    return (
        <div>
            <Grid container justifyContent='center' style={{ marginTop: "20px" }}>
                <Grid item lg={6} >
                    <TextField
                        data-testid='home'
                        type="number"

                        onChange={(e: any) => updateSpaces(parseInt(e.target.value))}
                        variant='outlined' placeholder="Number of spaces" fullWidth />
                </Grid>
                <Grid container justifyContent='center' style={{ marginTop: "20px" }}>
                    <Button data-testid='btn' disabled={!spaces} variant='outlined' color='secondary' onClick={navigateToParkingSlot}>Create Spaces</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomePage