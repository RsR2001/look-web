import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Dropdown, Input, Menu } from 'semantic-ui-react';
import { logout } from './views/ultil/AuthenticationService';
export default class MenuExampleStackable extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })




  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted>

          <Menu.Menu className='navbar__item--pc'>
            <Dropdown item text='Produto'>
              <Dropdown.Menu>
                <Dropdown.Item
                  name='categoria'
                  active={this.state.activeItem === 'categoria'}
                  onClick={this.handleItemClick}
                  text='Categoria de Produto'
                  as={Link}
                  to='/list-categoria-produto'
                />

                <Dropdown.Item
                  icon='box'
                  name='Adicionar Produto'
                  active={activeItem === 'produtos'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='/form-produto'
                />

                <Dropdown.Item
                  icon='tasks'
                  name='Produtos Cadastrados'
                  active={this.state.activeItem === 'produtos'}
                  onClick={this.handleItemClick}
                  text='Produto'
                  as={Link}
                  to='/list-produto'
                />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>

        <div>
          <Menu stackable size='huge' color='green' inverted >
            <Menu.Item position='right' >
              <img alt="logo" src='/iconeApp.png'
              /> OOK!
            </Menu.Item>

            <Menu.Item icon='home'
              name='Página Inicial'
              active={activeItem === 'editarProduto'}
              onClick={this.handleItemClick}
              as={Link}
              to='/'

            />

            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Pesquisar...' />

            </Menu.Item>

            <Menu.Item>
              <Dropdown item text='Categorias' >
                <Dropdown.Menu>
                  <Dropdown.Item>Alimentos</Dropdown.Item>
                  <Dropdown.Item>Tecnologia</Dropdown.Item>
                  <Dropdown.Item>Casa</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>

            <Menu.Menu position='right'>
              <Menu.Item icon='user circle'
                name='Entrar'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                as={Link}
                to='/form-login'
              />

              <Menu.Item icon='shopping basket'
                name='Registre sua Loja'
                active={activeItem === 'loja'}
                onClick={this.handleItemClick}
                as={Link}
                to='/form-loja'
              />
              <Menu.Item
                        className='navbar__item--mobile'
                        onClick={this.logout}
                        content='Sair'
                        as={Link}
                        to='/'
                    />
            </Menu.Menu>
          </Menu>
        </div>
        <br></br>

      </div>



    )
  }
}