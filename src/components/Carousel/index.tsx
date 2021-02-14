import React from 'react';
import Carousel from 'react-elastic-carousel';

import Item from '../CarouselItem';
import AddItem from '../../assets/illustrations/add-item.png';
import ShopList from '../../assets/illustrations/shop-list.png';
import Notification from '../../assets/illustrations/notification.png';
import { useTranslation} from 'react-i18next';
import './styles.css';
import '../../translate/i18n';

const CarouselLib: React.FC = () => {
    const { t, i18n } = useTranslation();

    const items = [
        {
            id: 0,
            url: AddItem,
            title: t('carousel.item1.title'),
            text: t('carousel.item1.text')
        },
        {
            id: 1,
            url: ShopList,
            title:t('carousel.item2.title'),
            text: t('carousel.item2.text')
        },
        {
            id: 2,
            url: Notification,
            title: t('carousel.item3.title'),
            text: t('carousel.item3.text')
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