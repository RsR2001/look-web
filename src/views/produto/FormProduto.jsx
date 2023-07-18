import axios from "axios";
import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import { Link, useLocation } from "react-router-dom";
import { Button, Container, Divider, Form, Header, Icon, Modal, Segment } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';
import { ENDERECO_API } from '../../views/util/Constantes';
import { mensagemErro, notifyError, notifySuccess } from '../../views/util/Util';
export default function FormProduto() {

	const { state } = useLocation();

	const [idProduto, setIdProduto] = useState();
	const [codigo, setCodigo] = useState();
	const [titulo, setTitulo] = useState();
	const [descricao, setDescricao] = useState();
	const [valorUnitario, setValorUnitario] = useState();
	const [dataDeVencimento, setdataDeVencimento] = useState();
	const [listaCategoria, setListaCategoria] = useState([]);
   const [idCategoria, setIdCategoria] = useState();


	useEffect(() => {

		if (state != null && state.id != null) {

			axios.get(ENDERECO_API + "api/produto/" + state.id)

				.then((response) => {

					setIdProduto(response.data.id)
					setCodigo(response.data.codigo)
					setTitulo(response.data.titulo)
					setDescricao(response.data.descricao)
					setValorUnitario(response.data.valorUnitario)
					setdataDeVencimento(formatarData(response.data.dataDeVencimento))
					setIdCategoria(response.data.categoria.id)
				})
		}
		axios.get(ENDERECO_API + "api/categoriaproduto")
       .then((response) => {
           const dropDownCategorias = response.data.map(c => ({ text: c.descricao, value: c.id }));
           setListaCategoria(dropDownCategorias);
       })

	}, [state])

	function salvar() {

		let produtoRequest = {

			idCategoria: idCategoria,
			codigo: codigo,
			titulo: titulo,
			descricao: descricao,
			valorUnitario: valorUnitario,
			dataDeVencimento: dataDeVencimento

		}

		if (idProduto != null) { //Alteração:

			axios.put(ENDERECO_API + "api/produto/" + idProduto, produtoRequest)
				.then((response) => {
					notifySuccess('Produto alterado com sucesso.')
				})
				.catch((error) => {
					if (error.response) {
						notifyError(error.response.data.errors[0].defaultMessage)
					} else {
						notifyError(mensagemErro)
					}
				})


		} else { //Cadastro:

			axios.post(ENDERECO_API + "api/produto", produtoRequest)
				.then((response) => {
					notifySuccess('Produto cadastrado com sucesso.')
				})
				.catch((error) => {
					if (error.response) {
						notifyError(error.response.data.errors[0].defaultMessage)
					} else {
						notifyError(mensagemErro)
					}
				})

		}
	}

	function formatarData(dataParam) {

		if (dataParam == null || dataParam == '') {
			return ''
		}

		let dia = dataParam.substr(8, 2);
		let mes = dataParam.substr(5, 2);
		let ano = dataParam.substr(0, 4);
		let dataFormatada = dia + '/' + mes + '/' + ano;

		return dataFormatada
	}

	const [open, setOpen] = React.useState(false)

	return (
		<div>

			<div style={{ marginTop: '3%' }}>
			<MenuSistema />
				<Container textAlign='justified' >

					{idProduto === undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Cadastro &nbsp;<Icon name='angle double right' size="small" />Produto</span> </h2>
					}
					{idProduto != undefined &&
						<h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Alteração</h2>
					}

					<Divider />

					<div style={{ marginTop: '4%' }}>
						<Segment color='green' >
							<Form>

								<Form.Group>
									<Form.Input
										required
										label='Título'
										placeholder='Informe o título do produto'
										tabIndex='1'
										width={11}
										maxLength="300"
										value={titulo}
										onChange={e => setTitulo(e.target.value)}
									/>

									<Form.Input
										required
										fluid
										label='Código do Produto'
										placeholder='Informe o código do produto'
										width={5}
										tabIndex='2'
										maxLength='10'
										value={codigo}
										onChange={e => setCodigo(e.target.value)}
									/>
								</Form.Group>

								<Form.Select
									required
									fluid
									tabIndex='3'
									placeholder='Selecione'
									label='Categoria'
									options={listaCategoria}
									value={idCategoria}
									onChange={(e, { value }) => {
										setIdCategoria(value)
									}}
								/>


								<Form.TextArea
									label='Descrição'
									placeholder='Informe a descrição do produto'
									tabIndex='3'
									maxLength="100000"
									value={descricao}
									onChange={e => setDescricao(e.target.value)}
								/>

								<Form.Group>

									<Form.Input
										required
										fluid
										label='Valor Unitário'
										placeholder='Insira o valor do produto'
										tabIndex='5'
										name='valorUnitario'
										width={6}
										value={valorUnitario}
										onChange={e => setValorUnitario(e.target.value)}
									/>

									<Form.Input
										type="date"
										fluid
										label='Data de Vecimento'
										width={6}
									>
										<InputMask
											mask="99/99/9999"
											maskChar={null}
											placeholder="Ex: 20/10/2023"
											value={dataDeVencimento}
											onChange={e => setdataDeVencimento(e.target.value)}
										/>
									</Form.Input>


								</Form.Group>

								<Form.Group widths='equal' style={{ marginTop: '4%', justifyContent: 'space-between' }}>

									<Button.Group>
										<Button
											animated='vertical'
											type="button"
											inverted
											circular
											icon
											labelPosition='left'
											color='red'
										>
											<Icon name='reply' />
											<Link to={'/'}>Voltar</Link>
										</Button>
										<Button.Or />
										<Modal
											closeIcon
											open={open}
											trigger={<Button
												onClick={() => salvar()}
												color='green'
											>
												<Icon name='save' />
												Salvar</Button>}
											onClose={() => setOpen(false)}
											onOpen={() => setOpen(true)}
										>
											<Header icon='box' content=' Produto registrado com sucesso!' />
											<Modal.Content>
												<b><p>
													Você pode ver os produtos cadastrados ou voltar para a página inicial.
												</p></b>
											</Modal.Content>
											<Modal.Actions>
												<Button color='blue' inverted onClick={() => setOpen(false)}
													as={Link}
													to='/'>
													<Icon name='home' />Página Inicial
												</Button>
												<Button color='green' inverted onClick={() => setOpen(false)}
													as={Link}
													to='/list-produto'
												>
													<Icon name='box' />Produtos cadastrados
												</Button>
											</Modal.Actions>
										</Modal>
									</Button.Group>

								</Form.Group>

							</Form>
						</Segment>
					</div>
				</Container>
			</div>
		</div>
	)
}