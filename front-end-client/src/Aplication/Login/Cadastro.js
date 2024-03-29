import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cadastro = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

  return (
    <div class="container-fluid position-relative d-flex p-0">
 {/*
    <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>  
  */}  

    <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style={{minHeight: '100vh'}}>
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div class="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <a href="index.html" class="">
                            <h3 class="text-primary"><i class="fa fa-user-edit me-2"></i>GAMES UNION</h3>
                        </a>
                        <h3>Cadastro</h3>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingText" placeholder="jhondoe"></input>
                        <label for="floatingText">Nome de Usuário</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Senha"></input>
                        <label for="floatingPassword">Senha</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="confirmFloatingPassword" placeholder="Confirmar Senha"></input>
                        <label for="confirmFloatingPassword">Confirmar Senha</label>
                    </div>
                    <button type="submit" class="btn btn-primary py-3 w-100 mb-4">Cadastrar</button>
                    <p class="text-center mb-0">Já possui conta ? <button onClick={handleLoginClick} style={{ backgroundColor: 'transparent', border: 'none', color: '#EB1616', cursor: 'pointer' }}>Login</button></p>
                </div>
            </div>
        </div>
    </div>
   
</div>
  )
}

export default Cadastro