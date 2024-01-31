import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import EditTaskDialog from './EditTask';

export default function TaskCard(props) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
        return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={props.element.id+" "+props.element.name}
                subheader={props.element.createDate}
            >
            </CardHeader>
            <CardActions disableSpacing>
                <EditTaskDialog />
                <IconButton aria-label="delete a task">
                    <DeleteIcon />
                </IconButton >
                <Checkbox
                    checked={props.element.textbox}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </CardActions>
        </Card>
    );
}