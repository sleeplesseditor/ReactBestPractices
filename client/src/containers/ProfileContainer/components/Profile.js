import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BasicInfo from "./BasicInfo";
import OrdersHistory from "./OrdersHistory";
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

function Profile({ profile, getProfile, updateUserStatus }) {

    useEffect(() => {
        if(getProfile) {
            getProfile();
        }
    }, []);

    return (
        <Grid container direction="column" alignItems="center" style={{ 'marginTop': '5rem'}} spacing={3}>
            <Grid item xs={12}>
                <Chip 
                    onClick={updateUserStatus} 
                    label={profile.status.toUpperCase()} 
                    style={{
                        backgroundColor: profile.status === "active" ? "green" : "",
                        color: profile.status === "active" ? "white" : ""
                    }} 
                />
            </Grid>
            <Grid item item xs={12}>
                <BasicInfo user={profile.user} />
            </Grid>
            <Grid item xs={12}>
                <OrdersHistory orders={profile.orders} />
            </Grid>
        </Grid>
    )
}

Profile.propTypes = {
    user: PropTypes.object,
};

export default Profile;
