import React from "react";
import { Card, Grid, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';


class Home extends React.Component {

  render() {
    return (
      <div>
        <div>
          <MenuSistema />
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>

              </Grid.Column>
              <Grid.Column width={6}>
                <Image src='/hoome.png' />
              </Grid.Column>
              <Grid.Column width={6}>
                <Image src='/mulherHome.jpg' circular />
              </Grid.Column>
            </Grid.Row>

          </Grid>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="ui container">
          <div className="ui horizontal divider">Produtos em destaque - Tecnologia</div>
          <br />
          <br />

          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Image src='/hyperXmec.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header><a href="https://www.kabum.com.br/produto/131014/teclado-mecanico-gamer-hyperx-alloy-origins-rgb-switch-hyperx-blue-abnt2-4p5p0a2-ac4?gclid=CjwKCAjwkeqkBhAnEiwA5U-uMwUAkmYM3l-2cB-Tb0a2ZmhqAEHLrnkFhGOkZ5Z2MExadGyqt5iDyhoC0LUQAvD_BwE
      ">Teclado Mecânico Gamer HyperX Alloy Origins</a>
                    </Card.Header>
                    <Card.Description>
                      <b>Vendido e entregue por: KaBuM!</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 449,99
                      À vista no PIX com até 15% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src='/gamerHusky.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      <a href="https://www.kabum.com.br/produto/134177/cadeira-gamer-husky-gaming-tempest-700-preto-e-vermelho-com-almofadas-descanso-para-pernas-retratil-reclinavel-hgma075">
                        Cadeira Gamer Husky Gaming Tempest 700, Preto e Vermelho
                      </a>
                    </Card.Header>
                    <Card.Description>
                      <b>Vendido e entregue por: KaBuM!</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 859,99
                      À vista no PIX com até 5% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src='/ryzen5.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      <a href="https://www.kabum.com.br/produto/333154/processador-amd-ryzen-5-4500-3-6ghz-4-1ghz-max-turbo-cache-11mb-am4-sem-video-100-100000644box?gclid=CjwKCAjwkeqkBhAnEiwA5U-uMz17QzxIzP8qxKJY5csnBJfhfSFzZg-mdH5dSJsCykoC0jkLzhRZghoC97QQAvD_BwE">
                        Processador AMD Ryzen 5 4500, 3.6GHz (4.1GHz Max Turbo) Cache 11MB, AM4, Sem Vídeo - 100-100000644BOX
                      </a>
                    </Card.Header>
                    <Card.Description>
                      <b>Vendido e entregue por: KaBuM!</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 549,99
                      À vista no PIX com até 10% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>

            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Image src='/kit.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      <a href="https://www.kabum.com.br/produto/340037/kit-upgrade-kaikora-intel-processador-i5-10400f-memoria-16gb-ddr4-dual-channel?gclid=CjwKCAjwkeqkBhAnEiwA5U-uM8Z6QJAMTDnJEsVKILR73j_QdLA6qS3LVVpvVbWxcGuPmXg3415gSxoCA6MQAvD_BwE">
                        Kit Upgrade Kaikora, Intel Processador I5 10400F + Memória 16GB DDR4, Dual-channel
                      </a>
                    </Card.Header>
                    <Card.Description>
                      <b>Melhor preço em: KAIKORA INFORMÁTICA</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 1.995,00
                      À vista no PIX com até 5% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src='/monitor.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      <a href="https://www.kabum.com.br/produto/434391/monitor-gamer-lg-ultragear-24-full-hd-144hz-1ms-ips-hdmi-e-displayport-99-srgb-hdr-freesync-premium-vesa-24gn60r-b-awzm?gclid=CjwKCAjwkeqkBhAnEiwA5U-uM_YrKXMPem_iIwgmvhv2IQNLCzH3sNuSJVdVRtwl4NdAV5ldKR0TOxoCU1MQAvD_BwE">
                        Monitor Gamer LG UltraGear 24 Full HD, 144Hz, 1ms, IPS, HDMI e DisplayPort, 99% sRGB, HDR, FreeSync Premium, VESA - 24GN60R-B.AWZM
                      </a>
                    </Card.Header>
                    <Card.Description>
                      <b>Melhor preço em: KaBuM!</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 1.249,99
                      À vista no PIX com até 10% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Image src='/headset.jpg' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header><a href="https://www.kabum.com.br/produto/115586/headset-sem-fio-gamer-hyperx-cloud-stinger-core-drivers-40mm-ps5-ps4-e-pc-branco-e-azul-hhss1c-kb-wt-g
      ">Headset Sem Fio Gamer HyperX Cloud Stinger Core, Drivers 40mm, PS5 PS4 e PC, Branco e Azul - HHSS1C-KB-WT/G </a>

                    </Card.Header>
                    <Card.Description>
                      <b>Vendido e entregue por: KaBuM!</b>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <b><h3>
                      R$ 379,99
                      À vista no PIX com até 15% OFF
                    </h3></b>
                  </Card.Content>
                </Card>
              </Grid.Column>

            </Grid.Row>


          </Grid>
        </div>

      </div>
    )
  }
}



export default Home;
