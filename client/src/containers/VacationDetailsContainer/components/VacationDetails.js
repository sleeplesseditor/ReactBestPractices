import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';

function VacationDetails({ vacation, dispatchGetVacationDetails }) {
    const { id } = useParams();

    useEffect(() => {
        dispatchGetVacationDetails(id);
    }, []);

    return (
        <Card style={{ 'marginTop': '5rem'}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={vacation.image}
                    title={vacation.description}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {vacation.destination}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        ${vacation.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

VacationDetails.defaultProp = {
    vacation: {}
}

VacationDetails.propTypes = {
    vacation: PropTypes.object
}

export default VacationDetails;