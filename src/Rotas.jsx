import React from 'react';
import { Route, Routes } from "react-router-dom";
import FormCategoriaProduto from './views/categoriaProduto/FormCategoriaProduto';
import ListCategoriaProduto from './views/categoriaProduto/ListCategoriaProduto';
import Home from './views/home/home';
import FormLogin from './views/login/FormLogin';
import FormLoja from './views/loja/FormLoja';
import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';
import { ProtectedRoute } from './views/ultil/ProtectedRoute';
import FormUsuario from './views/usuario/FormUsuario';
function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="form-produto"
                    element={
                        <ProtectedRoute>
                            <FormProduto />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="list-produto"
                    element={
                        <ProtectedRoute>
                            <ListProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="form-categoria-produto"
                    element={
                        <ProtectedRoute>
                            <FormCategoriaProduto />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="list-categoria-produto"
                    element={
                        <ProtectedRoute>
                            <ListCategoriaProduto />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="form-usuario"
                    element={
                        <ProtectedRoute>
                            <FormUsuario />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="form-loja"
                    element={
                        <ProtectedRoute>
                            <FormLoja />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="form-login"
                    element={
                        <FormLogin />
                    }
                />
            </Routes>
        </>
    )
}

export default Rotas
