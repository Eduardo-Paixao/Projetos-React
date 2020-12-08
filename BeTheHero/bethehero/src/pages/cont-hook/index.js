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


import React, { useState, Dispatch, SetStateAction } from 'react';

import DrawerProfile from '../../components/DrawerProfile';
import HeaderProfile from '../../components/HeaderProfile';

import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  InputAdornment,
  TextField,
  Divider,
} from '@material-ui/core';

import { Business, VerifiedUser, Apartment } from '@material-ui/icons';

const Profile: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderProfile />
      <DrawerProfile />
      <main className={classes.main}>
        <div className={classes.cardProfile}>
          <Card>
            <CardContent>
              <div
                className={classes.divAvatar}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 20,
                }}
              >
                <Avatar className={classes.avatar} />
                <Typography style={{ fontWeight: 'bold', marginLeft: 20 }}>
                  Nome da Pessoa Física
                </Typography>
              </div>

              <Divider />

              <div
                style={{
                  fontSize: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginBottom: 20,
                }}
              >
                <Typography>RAZÃO SOCIAL EMPRESA</Typography>
                <Typography>CNPJ</Typography>
              </div>
            </CardContent>
            <CardActions
              style={{ display: 'flex', justifyContent: 'space-around' }}
            >
              <Typography className={classes.linkButton}>
                Editar Perfil
              </Typography>
              <Typography className={classes.linkButton}>
                Alterar Senha
              </Typography>
            </CardActions>
          </Card>
        </div>
        {/* --------Final-Cardo------------- */}

        <div className={classes.formProfile}>
          <div>
            <TextField
              size="small"
              id="standard-full-width"
              placeholder="Razão Social"
              style={{ marginTop: '1%' }}
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
              size="small"
              id="standard-full-width"
              placeholder="CNPJ"
              style={{ marginTop: '1%' }}
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
              size="small"
              id="standard-full-width"
              placeholder="Nome Fantasia"
              style={{ marginTop: '1%' }}
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
          </div>
          <div className={classes.formRow}>
            <TextField
              size="small"
              id="standard-full-width"
              placeholder="CPF"
              style={{ margin: '0' }}
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
              size="small"
              id="standard-full-width"
              placeholder="RG"
              fullWidth
              style={{ marginRight: 10 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VerifiedUser fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              size="small"
              id="standard-full-width"
              placeholder="Órgão Emissor"
              fullWidth
              style={{ margin: 0 }}
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
              size="small"
              id="standard-full-width"
              placeholder="Data de Emissão"
              fullWidth
              style={{ marginRight: 10 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VerifiedUser fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              size="small"
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
              size="small"
              id="standard-full-width"
              placeholder="Profissão"
              style={{ marginTop: '1%' }}
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
          <div>
            <h2 style={{ textAlign: 'center', margin: '2% 0' }}>
              Endereço da Empresa
            </h2>
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="Tipo Logradouro"
              fullWidth
              style={{ marginTop: '0' }}
              defaultValue=" "
              variant="outlined"
            />
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="Logradouro"
              fullWidth
              style={{ marginTop: '1%' }}
              defaultValue=" "
              variant="outlined"
            />
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="bairro"
              fullWidth
              style={{ marginTop: '1%' }}
              defaultValue=" "
              variant="outlined"
            />
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="Complemento"
              fullWidth
              style={{ marginTop: '1%' }}
              defaultValue=" "
              variant="outlined"
            />
          </div>
          <div className={classes.formRow}>
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="Cidade"
              fullWidth
              defaultValue=" "
              variant="outlined"
            />
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="UF"
              style={{ margin: '0 1% 0 1%' }}
              defaultValue=" "
              variant="outlined"
            />
            <TextField
              disabled
              size="small"
              id="outlined-uncontrolled"
              label="CEP"
              fullWidth
              defaultValue=" "
              variant="outlined"
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Button type="submit" variant="contained" color="primary">
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
    display: 'flex',
  },
  main: {
    display: 'flex',
    width: '100%',
    marginTop: 36,
    flexDirection: 'row',
    flexGrow: 1,
    padding: theme.spacing(3),
    minWidth: 1200,
    height: '100vh',
    justifyContent: 'space-around',
  },

  // ----------------Card---------------
  divAvatar: {},

  cardProfile: {
    marginTop: 16,
  },

  linkButton: {
    fontWeight: 'bold',
    cursor: 'pointer',
    color: '#6c63ff',
    '&:hover': {
      color: 'rgba(108,99,255,0.8)',
    },
  },

  // --------Formulario-----------------

  formRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1%',
  },

  formProfile: {
    backgroundColor: '#fff',
    // width: '50%',
    padding: 10,
    // margin: '1%',
    borderRadius: '8px',
    border: '1px solid #ccc',
    // height: '74vh',
  },

  // ----------Avatar-----------------------------
  avatar: {
    cursor: 'pointer',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },

  title: {
    fontSize: 14,
  },
}));

export default Profile;

