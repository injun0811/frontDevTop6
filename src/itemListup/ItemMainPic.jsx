const ItemMainPic = ({ current, size }) => {
    const { id, title, imgUrl } = current;
    return (
        <div className="mainPic">
            <div className="info">
                <h3>{title}</h3>
                <p>
                    {id} / {size}
                </p>
            </div>
            <img src={imgUrl} alt={title} />
        </div>
    );
};

export default ItemMainPic;
