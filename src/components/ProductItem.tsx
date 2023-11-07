import React, { useState } from "react";
import image from "../assets/image";
import icon from "../assets/icon";
import { Link } from "react-router-dom";

interface ProductItemProps { }

const ProductItem: React.FC<ProductItemProps> = () => {
    const img = [
        { image: image.product_1 },
        { image: image.product_2 },
        { image: image.product_2 },
        { image: image.product_2 },
        { image: image.product_1 },
        { image: image.product_1 },
        { image: image.product_2 },
    ];
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        const newStartIndex = startIndex + itemsPerPage;
        setStartIndex(newStartIndex >= img.length ? 0 : newStartIndex);
    };

    const [btnImageActive, setBtnImageActive] = useState(0);
    const [imageIteam, setImageIteam] = useState(img[0]?.image);
    const clickImage = (index: number, image: any) => {
        setBtnImageActive(index)
        setImageIteam(image);
    }


    const visibleImages = img.slice(startIndex, startIndex + itemsPerPage);
    return (
        <div className="wrapper__product bg-white rounded mb-2">
            <div
                className="wrapper__product--image position-relative w-100 rounded-top "
                style={{
                    backgroundImage: `url(${imageIteam})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className="image-content"></div>
                <div className="new position-absolute text-white  text-center py-1">Mới</div>
            </div>
            <div className="wrapper__product--content p-2 ">
                <div className="d-flex justify-content-between">
                    <Link to={'/product-detail'} className="product-content">
                        <div className="product-price">250.000 đ</div>
                        <div className="product-price-new px-1">Giá gom hiện tại</div>
                        <div className="product-brand text-decoration-underline">Tên thương hiệu</div>
                    </Link>
                    <div className="btn-like" role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                            <path d="M21.1754 2.25085C19.9848 0.799394 18.3511 0 16.5749 0C15.2473 0 14.0314 0.471787 12.961 1.40215C12.4209 1.87176 11.9315 2.44631 11.5 3.11691C11.0687 2.44651 10.5791 1.87176 10.0388 1.40215C8.96858 0.471787 7.75271 0 6.42506 0C4.64889 0 3.01503 0.799394 1.82442 2.25085C0.648033 3.68534 0 5.64507 0 7.76929C0 9.95565 0.724892 11.957 2.28119 14.0678C3.67342 15.9559 5.67437 17.8727 7.99153 20.0922C8.78275 20.8501 9.67961 21.7093 10.6109 22.6245C10.8569 22.8667 11.1726 23 11.5 23C11.8273 23 12.1431 22.8667 12.3888 22.6249C13.32 21.7095 14.2174 20.8499 15.009 20.0916C17.3258 17.8725 19.3268 15.9559 20.719 14.0676C22.2753 11.957 23 9.95565 23 7.7691C23 5.64507 22.352 3.68534 21.1754 2.25085Z" fill="#FF5E3A" />
                        </svg>
                    </div>
                </div>
                <div className="product-nd overflow-hidden">
                    Quần sọc kim ánh vàng,đỏ,xamh,vàng,tím
                </div>
                <div className="product-infor p-1 rounded  mt-2 d-flex flex-column">
                    <div className="">
                        Giá gom thấp nhất
                        <span className="ms-1 FF5E3A">190.000 đ</span>
                    </div>
                    <div className="">
                        Đã có
                        <span className="ms-1 color-009F9D">39 người trong nhóm</span>
                    </div>
                    <div className="">
                        Gom đã đạt
                        <span className="ms-1 color-009F9D">390 sản phẩm</span>
                    </div>
                    <div className="">
                        Đã bán
                        <span className="ms-1 color-009F9D">200.001 sản phẩm</span>
                    </div>
                </div>
                <div className="btn-image mt-3 d-flex justify-content-between px-2 pb-2">
                    <div className="">
                        {visibleImages.map((item, index) => (
                            <div key={index} onClick={() => clickImage(index, item.image)}
                                className={"image--item " + (index === btnImageActive ? "active" : "")}
                            >
                                <img src={item.image} alt="" className="rounded" />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex align-items-center" role="button" onClick={handleNext}>
                        <img src={icon.add} alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductItem;
