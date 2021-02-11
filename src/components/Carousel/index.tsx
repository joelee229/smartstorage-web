import React from 'react';
import Carousel from 'react-elastic-carousel';

import Item from '../CarouselItem';
import AddItem from '../../assets/illustrations/add-item.png';
import ShopList from '../../assets/illustrations/shop-list.png';
import Notification from '../../assets/illustrations/notification.png';
import './styles.css';

const CarouselLib: React.FC = () => {
    const items = [
        {
            id: 0,
            url: AddItem,
            title: "Registro de alimentos",
            text: "O registro de alimentos é uma funcionalidade para saber quais os produtos você possui e suas validades. Ele funciona por meio de um leitor de código barras, após a leitura do código, é registrado o nome do produto, código da empresa, e o país da empresa, que são todas armazenadas e mostradas juntas com a validade."
        },
        {
            id: 1,
            url: ShopList,
            title: "Lista de compras",
            text: "A lista de compras são todos os produtos que você deseja e faltantes no seu lar. Pode ser criada manualmente, ou automatizada: Manualmente você deve acrescentar cada produto desejado; Automatizada você deve classificar os produtos já registrados como essenciais, assim quando ele acabar, já será adicionado a sua lista de compras."
        },
        {
            id: 2,
            url: Notification,
            title: "Aviso de validade",
            text: "O aviso de validades dos produtos é uma notificação caso algum produto esteja perto de seu vencimento. O aviso deve ser configurado por você. Ao iniciar o aplicativo pela primeira vez(ou em qualquer momento) você pode configurar com quantos dias de antecedência você quer ser notificado sobre a validade do produto."
        },
    ]

    return(
        <div className="styled-carousel">
            <Carousel isRTL={false}>
                {items.map(item => (
                    <Item key={item.id} url={item.url} title={item.title} text={item.text} />
                ))}
            </Carousel>
        </div>
    );
};

export default CarouselLib;