import ItemDesList from './ItemDesList';
import ItemPicList from './ItemPicList';
import dataList from '../assets/api/itemListData';
import './itemList.scss';
import { useState } from 'react';
import ItemMainPic from './ItemMainPic';
import { SlArrowLeftCircle } from 'react-icons/sl';
import { SlArrowRightCircle } from 'react-icons/sl';

const ItemList = () => {
    const [data, setData] = useState(dataList);
    const [current, setCurrent] = useState(data[0]);

    // sub image, li click
    const subImg = (id) => {
        setData(data.map((item) => (item.id === id ? { ...item, isShow: true } : { ...item, isShow: false })));
        setCurrent(data.find((item) => item.id === id));
    };

    // arrow click
    const beforeArrow = (id) => {
        let beforeId = id <= 1 ? 6 : id - 1;
        setData(data.map((item) => (item.id === beforeId ? { ...item, isShow: true } : { ...item, isShow: false })));
        setCurrent(data.find((item) => item.id === beforeId));
    };
    const nextArrow = (id) => {
        let nextId = id >= 6 ? 1 : id + 1;
        setData(data.map((item) => (item.id === nextId ? { ...item, isShow: true } : { ...item, isShow: false })));
        setCurrent(data.find((item) => item.id === nextId));
    };

    return (
        <div className="main">
            <div className="picList">
                <ItemMainPic current={current} size={data.length} />
                <ul>
                    {data.map((item) => (
                        <ItemPicList key={item.id} item={item} subImg={subImg} />
                    ))}
                </ul>
                <div className="arrow">
                    <p onClick={() => beforeArrow(current.id)}>
                        <SlArrowLeftCircle />
                    </p>
                    <p onClick={() => nextArrow(current.id)}>
                        <SlArrowRightCircle />
                    </p>
                </div>
            </div>
            <div className="desList">
                <ul>
                    {data.map((item) => (
                        <ItemDesList key={item.id} item={item} subImg={subImg} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItemList;
