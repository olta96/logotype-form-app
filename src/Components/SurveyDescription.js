import React, { Component } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

export default class SurveyDescription extends Component {

    state = {
        open: false,
    }

    BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(4),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(2),
        },
    }));

    BootstrapDialogTitle = (props) => {
        const { children, onClose, ...other } = props;
      
        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        );
    };

    render = () => {

        const handleClickOpen = () => {
            this.setState({ open: true });
        };
        const handleClose = () => {
            this.setState({ open: false });
        };
        
        return (
            <div style={surveyDescriptionStyle}>
                <p>
                    Välkommen!
                </p>
                <p>
                    Den här enkäten syftar till att användas i ett kandidatarbete i medieteknik vid Malmö universitet. Syftet med studien är att undersöka huruvida konsumenter föredrar en mer simplifierad och enkel logotyp över en detaljerad och mer komplicerad logotyp. Studien ska även undersöka huruvida konsumenter upplever varumärket och förtroendet för det beroende på om dess logotyp är av en förenklad variant eller en mer detaljerad. Enkäten är anonym!
                </p>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Läs mer
                </Button>
                <this.BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={this.state.open}
                >
                    <DialogContent dividers>
                        <this.BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} />
                        <Typography gutterBottom>
                            Samtliga personuppgifter är anonyma. Ålder, kön och ort kommer endast att användas för analys av demografi. Enkäten samlar inte in några namn eller adresser, datat kommer endast att användas för ett kandidatarbete. All data kommer att raderas senast 31 augusti.
                        </Typography>
                    </DialogContent>
                </this.BootstrapDialog>
            </div>
        );
    }

}

/** @type {CSSStyleDeclaration} */
const surveyDescriptionStyle = {
    width: "49%",
}
