import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditTaskDialog from './EditTask'

export default function TaskCard() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    var today = new Date(),
        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader={date}
            >
            </CardHeader>
            <CardActions disableSpacing>
                <EditTaskDialog/>
                <IconButton aria-label="delete a task">
                    <DeleteIcon />
                </IconButton>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </CardActions>
        </Card>
    );
}