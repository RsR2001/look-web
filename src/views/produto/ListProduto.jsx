import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Divider, Icon, Table, Header,Modal} from 'semantic-ui-react';
import { ENDERECO_API } from '../../views/util/Constantes';

class ListProduto extends React.Component{

    state = {

       listaProdutos: [],
       openModal: false,
       idRemover: null,
    }

    componentDidMount = () => {
      
        this.carregarLista();
      
    }

    carregarLista = () => {

        axios.get(ENDERECO_API + "api/produto")
        .then((response) => {
          
            this.setState({
                listaProdutos: response.data
            })
        })

    };

    formatarData = (dataParam) => {

        if (dataParam == null || dataParam == '') {
            return ''
        }
        
        let dia = dataParam.substr(8,2);
        let mes = dataParam.substr(5,2);
        let ano = dataParam.substr(0,4);
        let dataFormatada = dia + '/' + mes + '/' + ano;

        return dataFormatada
    };

    confirmaRemover = (id) => {

        this.setState({
            openModal: true,
            idRemover: id
        })  
    }

    setOpenModal = (val) => {

        this.setState({
            openModal: val
        })
   
    };

    remover = async () => {

        await axios.delete(ENDERECO_API + 'api/produto/' + this.state.idRemover)
        .then((response) => {
   
            this.setState({ openModal: false })
            console.log('Produto removido com sucesso.')
   
            axios.get(ENDERECO_API + "api/produto")
            .then((response) => {
           
                this.setState({
                    listaProdutos: response.data
                })
            })
        })
        .catch((error) => {
            this.setState({  openModal: false })
            console.log('Erro ao remover um produto.')
        })
    };


    render(){
        return(
            <div>

                <div style={{marginTop: '3%'}}>

                    <Container textAlign='justified' >

                        <b><h2> Produtos </h2></b>

                        <Divider />

                        <div style={{marginTop: '4%'}}>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='green'
                                floated='right'
                            >
                                <Icon name='clipboard outline' />
                                <Link to={'/form-produto'}>Adicionar novo produto</Link>
                            </Button>

                            <br/><br/><br/>
                      
                            <Table color='green' sortable celled>

                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Título</Table.HeaderCell>
                                        <Table.HeaderCell>Código</Table.HeaderCell>                                   
                                        <Table.HeaderCell>Descrição</Table.HeaderCell>
                                        <Table.HeaderCell>Valor Unitário</Table.HeaderCell>
                                        <Table.HeaderCell>Data de Vencimento</Table.HeaderCell>
                                        <Table.HeaderCell textAlign='center' width={2}>Ações</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                          
                                <Table.Body>

                                    { this.state.listaProdutos.map(p => (

                                        <Table.Row key={p.id}>
                                            <Table.Cell>{p.titulo}</Table.Cell>
                                            <Table.Cell>{p.codigo}</Table.Cell>
                                            <Table.Cell>{p.descricao}</Table.Cell>
                                            <Table.Cell>{p.valorUnitario}</Table.Cell>
                                            <Table.Cell>{this.formatarData(p.dataDeVencimento)}</Table.Cell>                                         
                                            <Table.Cell textAlign='center'>
                                              
                                                <Button
                                                    inverted
                                                    circular
                                                    color='green'
                                                    title='Clique aqui para editar os dados deste cliente'
                                                    icon>
                                                        <Link to="/form-produto" state={{id: p.id}} style={{color: 'green'}}> <Icon name='edit' /> </Link>
                                                </Button>
                                                
                                                &nbsp;
                                                   
                                                <Button
                                                   inverted
                                                   circular
                                                   icon='trash'
                                                   color='red'
                                                   title='Clique aqui para remover este cliente'
                                                   onClick={e => this.confirmaRemover(p.id)}/>

                                            </Table.Cell>
                                        </Table.Row>
                                    ))}

                               </Table.Body>
                           </Table>
                       </div>
                   </Container>
                   <Modal
                    basic
                    onClose={() => this.setOpenModal(false)}
                    onOpen={() => this.setOpenModal(true)}
                    open={this.state.openModal}
                >
                    <Header icon>
                        <Icon name='trash' />
                        <div style={{marginTop: '5%'}}> Tem certeza que deseja remover esse produto? </div>
                    </Header>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={() => this.setOpenModal(false)}>
                            <Icon name='remove' /> Não
                        </Button>
                        <Button color='green' inverted onClick={() => this.remover()}>
                            <Icon name='checkmark' /> Sim
                        </Button>
                    </Modal.Actions>
                </Modal>
               </div>
           </div>
       )
   }
}

export default ListProduto;