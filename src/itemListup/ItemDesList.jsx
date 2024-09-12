const ItemDesList = ({ item, subImg }) => {
    const { id, title, desc, isShow, backColor } = item;
    return (
        <li onClick={() => subImg(id)}>
            <h3 style={{ color: backColor }}>{title}</h3>
            {isShow ? <p>{desc}</p> : ''}
        </li>
    );
};

export default ItemDesList;
