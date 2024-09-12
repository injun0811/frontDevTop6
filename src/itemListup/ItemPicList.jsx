const ItemPicList = ({ item, subImg }) => {
    const { id, title, imgUrl, isShow } = item;
    return (
        <li>
            <img
                src={imgUrl}
                alt={title}
                onClick={() => subImg(id)}
                style={{
                    border: `2px solid ${isShow ? 'black' : 'transparent'}`,
                    boxSizing: 'border-box',
                }}
            />
        </li>
    );
};

export default ItemPicList;
