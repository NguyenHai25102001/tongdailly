import HeaderCart from "../components/HeaderCart";
import React from "react";
import formatPrice from "../components/formatPrice";
import { Link } from "react-router-dom";
export default function PurchaseHistory() {
    const [statusShop, setStatusShop] = React.useState(true)
    const selectOderStatus = [
        { name: 'Chờ xác nhận' },
        { name: 'Chờ lấy hàng' },
        { name: 'Đang giao' },
        { name: 'Đã giao' },
    ]
    const [orderStatus, setOrderStatus] = React.useState(0)
    const listOrder = [
        {
            id: 1,
            code: 'KD20192322',
            status: 'Chờ xác nhận',
            totalPayment: '4700000',

            shop_id: 1,
            shop: 'shop mall',
            shop_name: 'Tên nhà phân phối',
            image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg',
            products: [
                {
                    name: 'Áo thể thao hhhhh',
                    sku: '2333333',
                    size: 'M',
                    color: 'vàng',
                    price: 2000000,
                    sl: 4,
                    totalPayment: 1500000, brand: 'Nike',
                    image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg'
                }, {
                    name: 'Áo thể thao hhhhh',
                    sku: '2333333',
                    size: 'M',
                    color: 'vàng',
                    price: 2000000,
                    sl: 4,
                    totalPayment: 1500000, brand: 'Nike',
                    image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg'
                }
            ]

        },
        {
            id: 1,
            code: 'KD20192322',
            status: 'Chờ xác nhận',
            totalPayment: '4700000',
            shop_id: 1,
            shop: 'shop mall',
            shop_name: 'Tên nhà phân phối',
            image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg',
            products: [
                {
                    name: 'Áo thể thao hhhhh',
                    sku: '2333333',
                    size: 'M',
                    color: 'vàng',
                    price: 2000000,
                    sl: 4,
                    totalPayment: 1500000, brand: 'Nike',
                    image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg'
                }, {
                    name: 'Áo thể thao hhhhh',
                    sku: '2333333',
                    size: 'M',
                    color: 'vàng',
                    price: 2000000,
                    sl: 4,
                    totalPayment: 1500000, brand: 'Nike',
                    image: 'https://i.pinimg.com/736x/40/0e/b8/400eb8a3081a741b593f12591ac40036.jpg'
                }
            ]

        }
    ]
    return (
        <div className="wrapper__purchase_history">
            <HeaderCart title='Lịch sử mua hàng' />
            <div className="mk bg-white py-3">
                <div className="d-flex justify-content-center">
                    <div className="sle-mk border border-1 border-danger rounded-start-4 text-center py-1">Mua lẻ</div>
                    <div className="sle-mk border border-1 border-danger rounded-end-4 bg-danger text-center py-1 text-white ">Kinh doanh</div>

                </div>
                {
                    statusShop ? (<div className="py-2 d-flex gap-2 mt-4 w-100">
                        <div className="avater-shop ms-2">
                            <img src="https://antimatter.vn/wp-content/uploads/2022/11/hinh-anh-gai-xinh-trung-quoc.jpg" alt=""
                                className="w-100 rounded-circle" />
                        </div>
                        <div className="">
                            <div className="name-shop">Shop áo Office </div>
                            <div className="agent-type">Loại đại lý</div>
                            <div className="title-content">
                                <div>Bạn đang mua buôn với tư cách nhà bán lẻ</div>
                                <div>Sản phẩm sẽ tự động về kho và hiển thị bán hàng trên sàn</div>
                            </div>
                            <div className="d-flex da gap-5 mt-4 align-items-center ">
                                <div className="px-3 py-1 rounded  border border-1 border-black" role="button">Đến kênh bán hàng</div>
                                <div className="text-primary" role="button"
                                    onClick={() => setStatusShop(false)}>Ẩn shop đi</div>
                            </div>
                        </div>

                    </div>) : (
                        <div className="d-flex da mt-2 justify-content-end me-2">
                            <div className="text-primary" role="button"
                                onClick={() => setStatusShop(true)}>Hiện shop lên</div>
                        </div>

                    )
                }



            </div>
            <div className="order-status p-2 d-flex justify-content-between bg-white my-1">
                {
                    selectOderStatus.map((item, index) => (
                        <div key={index}
                            className=""
                            onClick={() => setOrderStatus(index)}
                            style={{
                                color: orderStatus === index ? '#EE0D79' : 'initial'
                            }}
                        >
                            {item.name}
                        </div>
                    ))
                }


            </div>
            {
                listOrder.map((item, index) => (
                    <div className="purchase_history-item py-3 bg-white mt-2 w-100" key={index}  >
                        <div className="d-flex header--item align-items-center justify-content-between w-100">

                            <div className="d-flex gap-2 ms-3">
                                <div className="avatar-shop">
                                    <img src={item.image} alt="dd" className="rounded-circle w-100 ratio ratio-1x1" />
                                </div>
                                <div className="d-flex flex-column justify-content-center">
                                    <div className="name">{item.shop_name}</div>
                                    <div className=""><div className="shop  text-white d-inline-block">{item.shop}</div></div>
                                </div>
                            </div>
                            <div className="status me-3 ">{item.status}</div>
                        </div>
                        {
                            item.products.map((product, index) => (
                                <div key={index} className="product--item d-flex justify-content-between mt-3 w-100">
                                    <div className="d-flex gap-2 ms-3 align-items-center">
                                        <div className="product-img rounded"
                                            style={{
                                                backgroundImage: `url(${product.image})`,
                                                backgroundSize: 'cover',
                                            }}
                                        >
                                            <div className="pt"></div>
                                        </div>

                                        <div className="d-flex flex-column justify-content-between">
                                            <div className="name">{product.name}</div>

                                            <div className="content">{product.sku}</div>
                                            <div className="content">Phân loại: Size {product.size}-Màu {product.color}</div>
                                            <div className="content">Thương hiệu{product.brand}</div>
                                            <div className="price">{formatPrice(product.price)}</div>

                                        </div>

                                    </div>
                                    <div className="text-end mt-3 me-3">
                                        <div className="price">{formatPrice(product.totalPayment)}</div>
                                        <div className="total-payment text-dark">SL : {product.sl}</div>
                                    </div>

                                </div>
                            ))
                        }
                        <div className="total__price--title d-flex justify-content-between mt-2 mx-3">
                            <div className="">  Tổng thanh toán 16 sản phẩm       =   </div>
                            <div className="price">{formatPrice(item.totalPayment)}</div>
                        </div>
                        <div className="code mx-3">Hành trình đơn: {item.code}</div>
                        <div className="d-flex justify-content-between mt-4 px-3">
                            <Link to='/payment'>
                                <div className="button btn text-white btn-primary px-2 ">Thanh toán ngay</div>
                            </Link>
                            <div className="button btn btn-outline-secondary px-2">Xem Chi Tiết Đơn hàng</div>
                            <div className="button btn btn-outline-secondary px-2">Hủy Đơn hàng</div>
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <div className="date">Ngày tạo đơn : 16: 20 21/12/2020</div>
                        </div>


                    </div>
                ))
            }
            <div className="py-5"></div>


        </div >
    )
}