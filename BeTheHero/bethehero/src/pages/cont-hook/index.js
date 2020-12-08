import React, { useState } from 'react';


export default function Contador(){

    const [contador, setContador] = useState(1);
    
    function addContador(){
        setContador(contador +1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>add</button>
            
        </div>
    );
}


----------------------------------------------------------------


import React from 'react';
import DrawerProfile from '../../components/DrawerProfile';
import HeaderProfile from '../../components/HeaderProfile';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Formik, Form as FormikForm } from 'formik';
import { Button, InputAdornment, TextField } from '@material-ui/core';
import {
    Business,
    VerifiedUser,
    Person,
    Domain,
    EmojiTransportation,
    Explore,
    Home,
    LocalConvenienceStore,
    LocationCity,
    MyLocation,
    Apartment,
  } from '@material-ui/icons';
  import * as Yup from 'yup';

const Profile: React.FC = () => {
    const classes = useStyles();
  return(
      <div className={classes.root}>
            <HeaderProfile/>
            <DrawerProfile/>
            <main className={classes.main}>
                <div className={classes.cardProfile}>
                    <h1>teste card</h1>
                </div>
                <div className={classes.formProfile}>
                <div>
                    <TextField
                        id="standard-full-width"
                        placeholder="Razão Social"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Business fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="CNPJ"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="Nome Fantasia"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Apartment fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="CPF"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="Estado Civil"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                </div>
                <div className={classes.formRow}>
                    <TextField
                        id="standard-full-width"
                        placeholder="RG"
                        fullWidth
                        style={{ margin: '0 1% 0 0' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="Órgão Emissor"
                        fullWidth
                        style={{ margin: '0 0 0 0' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                </div>
                <div className={classes.formRow}>
                <TextField
                        id="standard-full-width"
                        placeholder="Data de Emissão"
                        fullWidth
                        style={{ margin: '0 1% 0 0' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                    <TextField
                        id="standard-full-width"
                        placeholder="Telefone"
                        fullWidth
                        style={{ margin: '0 0 0 0' }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <VerifiedUser fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                </div>
                <div>
                    <TextField
                        id="standard-full-width"
                        placeholder="Profissão"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <Business fontSize="small" />
                            </InputAdornment>
                            ),
                        }}
                        />
                </div>
                <div  >
                    <h2 style={{ textAlign: 'center' }}>Endereço da Empresa</h2>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Tipo Logradouro"
                        fullWidth
                        style={{ marginTop: '0' }}
                        defaultValue=" "
                        variant="outlined"
                        />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Logradouro"
                        fullWidth
                        style={{ marginTop: '2%' }}
                        defaultValue=" "
                        variant="outlined"
                        />
                    <TextField
                        id="outlined-uncontrolled"
                        label="bairro"
                        fullWidth
                        style={{ marginTop: '2%' }}
                        defaultValue=" "
                        variant="outlined"
                        />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Complemento"
                        fullWidth
                        style={{ marginTop: '2%' }}
                        defaultValue=" "
                        variant="outlined"
                        />
                </div>
                <div className={classes.formRow}>
                    <TextField
                            id="outlined-uncontrolled"
                            label="Cidade"
                            fullWidth
                            
                            defaultValue=" "
                            variant="outlined"
                            />
                        <TextField
                            id="outlined-uncontrolled"
                            label="UF"
                            style={{ margin: '0 1% 0 1%' }}
                            defaultValue=" "
                            variant="outlined"
                            />
                        <TextField
                            id="outlined-uncontrolled"
                            label="CEP"
                            fullWidth
                            
                            defaultValue=" "
                            variant="outlined"
                            />
                </div>
                <div style={{ textAlign: 'center', margin:'1%' }}>
                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    >
                    Salvar
                    </Button>
                </div>
                </div>            
            </main>
      </div>
    );
};

const useStyles = makeStyles((theme: Theme) => ({

    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },

    root: {
      display: 'flex'
    },
    main: {
      display: 'flex',
      width:'100%',
      marginTop: '2%',
      flexDirection: 'row',
      flexGrow: 1,
      padding: theme.spacing(3),
      minWidth: 1200,
      height: '100vh',
    },
    cardProfile:{
        backgroundColor:'#fff',
        width:'30%',
        padding: '0 0 0 1%',
        margin:'1%'
    },
    formProfile:{
        backgroundColor:'#fff',
        width:'70%',
        padding: '0 1% 1% 1%',
        margin:'1%'
    },
    formRow: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '2%'
      },
    
  }));

export default Profile;
