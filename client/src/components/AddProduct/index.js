import React, { useState, useEffect } from "react";
import api from "../../services/api"
import axios from "axios"

import { FaPlus } from "react-icons/fa";

export default function AddProduct() {

    const [nome, setNome] = useState();
    const [preco, setPreco] = useState();
    const [fornecedor, setFornecedor] = useState();
    const [estoque, setEstoque] = useState();

    async function handleAdd() {
        try {
            const response = await api.post('/add', {
                name: nome,
                price: preco,
                retailer: fornecedor,
                amountInStock: estoque
            });
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div >
            <div className="d-flex justify-content-center px-4">
                <button className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#adicionar">
                    <FaPlus size={20}/>
                </button> 
            </div>

            <div class="modal fade" id="adicionar" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Adicionar produto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="adicionar1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deletar" aria-hidden="true" className="align-items-center d-flex flex-column needs-validation" onSubmit={() => handleAdd()}>
                                <div className="col-md-10">
                                    <label for="validationCustom01" className="form-label">Nome produto:</label>
                                    <input type="text" className="form-control" id="validationCustom01" value={nome} onChange={(e) => setNome(e.target.value)} required />
                                </div>
                                <div className="col-md-10">
                                    <label for="validationCustom02" className="form-label">Preço: </label>
                                    <input type="text" className="form-control" id="validationCustom02" value={preco} onChange={(e) => setPreco(e.target.value)} required />
                                </div>
                                <div className="col-md-10">
                                    <label for="validationCustom03" className="form-label">Fornecedor: </label>
                                    <input type="text" className="form-control" id="validationCustom03" value={fornecedor} onChange={(e) => setFornecedor(e.target.value)} required />
                                </div>
                                <div className="col-md-10">
                                    <label for="validationCustom04" className="form-label">Em estoque: </label>
                                    <input type="text" className="form-control" id="validationCustom04" value={estoque} onChange={(e) => setEstoque(e.target.value)} required />
                                </div>
                                
                                <div className="col-12 my-2">
                                    <button className="btn btn-primary" type="submit">Adicionar</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>



        </div>


    )
}