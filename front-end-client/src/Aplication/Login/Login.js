import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Alert } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleCadastroClick = () => {
        navigate("/Cadastro");
    }

  return (
    <div class="container-fluid position-relative d-flex p-0">
    {/**  spiner de carregamento
 <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}

        <div class="container-fluid">
            <div class="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" class="">
                                <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>GAMES UNION</h3>
                            </a>
                            <h3>Login</h3>
                        </div>
                        <Alert severity="error" onClose={() => {}}>
                            This Alert displays the default close icon.
                        </Alert>
                        <h6></h6>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="exemplo123"></input>
                            <label for="floatingInput">Nome de Usuário</label>
                        </div>
                        <div class="form-floating mb-4">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"></input>
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-4">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                <label class="form-check-label" for="exampleCheck1">Lembrar Do Usuário</label>
                            </div>
                            <a href="">Esqueceu Sua Senha ?</a>
                        </div>
                        <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Entrar</button>
                        <button 
                            style={{
                            backgroundColor: '#DB4437',
                            color: 'white',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                            }}
                            class="btn btn-primary py-3 w-100 mb-4" >
                            <GoogleIcon></GoogleIcon>        Entrar com Google
                        </button>
                        <p class="text-center mb-0">Não possui conta ? <button onClick={handleCadastroClick} style={{ backgroundColor: 'transparent', border: 'none', color: '#EB1616', cursor: 'pointer' }}>Cadastro</button></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login