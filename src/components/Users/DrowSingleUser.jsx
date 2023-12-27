import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditUserDialog from './EditUser'
import Typography from '@mui/material/Typography';



export default function UserCard() {

    var today = new Date(),
        date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    var address = "Address"
    var email = "Email"
    var phone = "Phone"
    return (
        <Card sx={{ maxWidth: 200 }}>
            <CardHeader
                title="Name"
            >
            </CardHeader>
            <Typography variant="h6" component="p">
                {address}
            </Typography>
            <Typography variant="h6" component="p">
                {email}
            </Typography>
            <Typography variant="h6" component="p">
                {phone}
            </Typography>
            <CardActions disableSpacing>
                <EditUserDialog />
                <IconButton aria-label="delete a user">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}