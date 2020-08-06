import React, { useEffect, useRef, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridColumnGap: '10px',
        gridRowGap: '15px',
        gridTemplateColumns: '2fr 2fr 2fr',
        margin: '30px',
    },
});

const getFieldElements = (_fields) => {
    return _fields.map(field => <TextField
        id={field}
        label={field}
        variant="outlined"
        color="secondary"
    />)
};

const DynamicForm = ({ labels, isExtendedForm }) => {
    const [fields, setFields] = useState(labels);
    const [key, setKey] = useState();
    const [fieldsElements, setFieldsElements] = useState(getFieldElements(labels));

    const containerRef = useRef(null);

    const classes = useStyles();

    // useEffect(() => {
    //     const root = document.getElementById('root');
    //     root.addEventListener('keyup', () => {
    //         setKey(e.code);
    //     });
    //     return () => {
    //         const root = document.getElementById('root');
    //         root.removeEventListener('keyup');
    //     };
    // }, []);

    useEffect(() => {
        if (isExtendedForm || fields.length < 3) {
            setFieldsElements(getFieldElements(fields));
        } else {
            setFieldsElements(getFieldElements(fields.slice(0,3)));
        }
    }, [fields, isExtendedForm]);

    const handleNewField = () => {
        setFields([...fields, 'New Field']);
    };

    return (
        <>
            <div ref={containerRef} className={classes.container}>
                {fieldsElements}
            </div>
            <Fab color="secondary" aria-label="add" onClick={() => handleNewField(fields)}>
                <AddIcon />
            </Fab>
        </>
    );
};

DynamicForm.propTypes = {
    labels: PropTypes.array,
};

export default DynamicForm;
