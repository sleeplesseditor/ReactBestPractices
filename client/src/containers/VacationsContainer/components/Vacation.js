import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 500
    },
    media: {
        height: 140,
    },
});

export function Vacation({ vacation, updateSelectedVacation }) {
    const handleVacationOnClick = () => updateSelectedVacation(vacation.id);
    const classes = useStyles();

    return (
        <Link to={`/vacation/${vacation.id}`} style={{ "textDecoration": "none"  }}>
            <Card className={classes.root} onClick={handleVacationOnClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.media}
                        src={vacation.image}
                        title={vacation.description}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {vacation.destination}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {vacation.description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            ${vacation.price.toLocaleString()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">
                        Order
                    </Button>
                    <Button size="small" color="secondary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
}

Vacation.propTypes = {
    vacation: PropTypes.object,
    updateSelectedVacation: PropTypes.func
};

export default Vacation;
