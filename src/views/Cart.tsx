import React from 'react';
import formatPrice from "../components/formatPrice";
import image from '../assets/image';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import HeaderCart from '../components/HeaderCart';

interface Product {
    productId: number;
    sku: number; // Ví dụ: SKU là một số, bạn có thể thay đổi kiểu dữ liệu nếu cần
    size: string;
    color: string;
    brand: string;
    price: number;
    sl: number;
    image: string;
    // Thêm các thuộc tính khác nếu cần
}

interface ShopCart {
    idShop: number;
    nameShop: string;
    shop: string;
    products: Product[];
}

interface SelectedProducts {
    [shopId: number]: Product[];
}
function Cart() {
    const [selectedProducts, setSelectedProducts] = React.useState<SelectedProducts>({});
    const listCart: ShopCart[] = [
        {
            idShop: 1,
            nameShop: 'Tên đại lý',
            shop: 'shop mall',
            products: [
                {
                    productId: 12,
                    sku: 123344,
                    size: 'M',
                    color: 'Màu vàng',
                    brand: 'nike',
                    price: 1,
                    sl: 10,
                    image: 'http://'
                },
                {
                    productId: 22,
                    sku: 123344,
                    size: 'M',
                    color: 'Màu vàng',
                    brand: 'nike',
                    price: 1,
                    sl: 10,
                    image: 'http://'
                }
            ]
        },
        {
            idShop: 3,
            nameShop: 'Tên đại lý',
            shop: 'shop mall',
            products: [
                {
                    productId: 31,
                    sku: 123344,
                    size: 'M',
                    color: 'Màu vàng',
                    brand: 'nike',
                    price: 1,
                    sl: 10,
                    image: 'http://'
                },
                {
                    productId: 41,
                    sku: 123344,
                    size: 'M',
                    color: 'Màu vàng',
                    brand: 'nike',
                    price: 1,
                    sl: 10,
                    image: 'http://'
                }
            ]
        }
    ];
    const [processingClick, setProcessingClick] = React.useState(false); // Biến cờ


    const handleProductSelection = (productId: number, shopId: number, price: number, checked: boolean) => {
        if (processingClick) {
            return; // Đã xử lý rồi, không làm gì cả
        }

        setProcessingClick(true); // Đánh dấu là đang xử lý click

        setSelectedProducts((prevSelectedProducts) => {
            const updatedSelectedProducts: SelectedProducts = { ...prevSelectedProducts };

            if (!updatedSelectedProducts[shopId]) {
                updatedSelectedProducts[shopId] = [];
            }

            if (checked) {
                const shop = listCart.find((cart) => cart.idShop === shopId);
                const selectedProduct = shop?.products.find((product) => product.productId === productId);

                if (selectedProduct) {
                    updatedSelectedProducts[shopId].push(selectedProduct);
                    console.log('Đã thêm sản phẩm');
                } else {
                    console.log('Product not found');
                }
            } else {
                const productIndex = updatedSelectedProducts[shopId].findIndex((product) => product.productId === productId);

                if (productIndex !== -1) {
                    const updatedShopProducts = [...updatedSelectedProducts[shopId]];
                    updatedShopProducts.splice(productIndex, 1);
                    updatedSelectedProducts[shopId] = updatedShopProducts;
                    console.log('Đã xóa sản phẩm');
                }
            }

            setProcessingClick(false); // Đánh dấu là đã xử lý xong click

            return updatedSelectedProducts;
        });
    };


    const [totalPrice, setTotalPrice] = React.useState(0);

    // Sử dụng useEffect để theo dõi selectedProducts
    React.useEffect(() => {
        const calculateTotalPrice = () => {
            let totalPrice = 0;
            // Duyệt qua các cửa hàng trong selectedProducts
            for (const shopId in selectedProducts) {
                if (selectedProducts.hasOwnProperty(shopId)) {
                    // Duyệt qua các sản phẩm trong cửa hàng
                    selectedProducts[shopId].forEach((product) => {
                        totalPrice += product.price;
                    });
                }
            }
            return totalPrice;
        };
        setTotalPrice(calculateTotalPrice());
    }, [selectedProducts]);


    const handleBack = () => {
        window.history.back();
    }


    return (
        <div className="wrapper__cart">
            <HeaderCart title='Giỏ hàng' />
            {
                listCart.map((item, index) => (
                    <div className="cart-item mb-1 bg-white " key={index}>
                        <div className="header-item d-flex justify-content-between p-3">
                            <div className="d-flex align-items-end gap-3">
                                <input className="form-check-input fs-6" type="checkbox" value=""
                                    id={`productCheckbox-${item.idShop}`}
                                />
                                <div className="d-flex gap-2">
                                    <div className="avatar">
                                        <img src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/393818474_314993221257179_4067156085223581821_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oVsddgIhhdcAX-lkANA&_nc_oc=AQn5cJI664_KkAhlS-P-0QU-F5yejBNFnsOuNcFSgZBLLdwSK76JixLRT6Tvsvpa2kU&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCMuazyxOrr80BCPJELrwiBitrURNsQBWEmkuQqMjsRKQ&oe=653B902C" alt="" className="rounded-circle" />
                                    </div>
                                    <div className="d-flex  flex-column justify-content-center gap-1">
                                        <div className="">Ten nha phan phoi</div>
                                        <div className="">    <span className="text-uppercase text-white px-1 py-1">Shop mall</span></div>
                                    </div>
                                </div>

                            </div>
                            <div className="delete text-decoration-underline">Xoá</div>
                        </div>
                        {
                            item.products.map((product, index) => (
                                <div className="mt-3 mb-2 position-relative" key={index}>
                                    <div className="product-info d-flex gap-2  w-100">
                                        <input
                                            className="form-check-input fs-6 mb-3 ms-4 mt-5"
                                            type="checkbox"
                                            id={`productCheckbox-${product.productId}`}
                                            checked={selectedProducts[item.idShop]?.some((p) => p.productId === product.productId)}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;
                                                handleProductSelection(product.productId, item.idShop, product.price, isChecked);
                                            }}
                                        />
                                        <label htmlFor={`productCheckbox-${product.productId}`}
                                            className="product-img"
                                            style={{
                                                backgroundImage: `url(${image.product_1})`,
                                                backgroundSize: 'cover',
                                            }}
                                        >
                                            <div className="pt"></div>
                                        </label>
                                        <div className="d-flex flex-column gap-1">
                                            <div className="name">Ao the thao</div>
                                            <div className="discription">SKU: 232323</div>
                                            <div className="discription">Thương hiệu: Nike</div>
                                            <div className="price">
                                                {formatPrice('200000')} đ{' '}
                                                <span className="text-decoration-line-through">{formatPrice('1500000')}</span>
                                            </div>
                                        </div>



                                    </div >

                                    <div className="d-flex flex-column justify-content-between align-items-end position-absolute"
                                        style={{ top: "1rem", right: '0.5rem' }}>
                                        <div className="total mb-2" style={{
                                            color: ' var(--semantic-100, #EE0D79)', fontSize: '12px', fontWeight: '700'
                                        }}>{formatPrice('1500000')} đ</div>
                                        <div className="dp d-flex gap-1 align-items-center">
                                            <div className=""
                                                >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="8" r="8" fill="#DDE1E7" />
                                                    <path d="M10.7781 7.31152C11.1583 7.31152 11.4665 7.61976 11.4665 7.99999C11.4665 8.38021 11.1583 8.68845 10.7781 8.68845L5.22167 8.68845C4.84144 8.68845 4.5332 8.38021 4.5332 7.99999C4.5332 7.61976 4.84144 7.31152 5.22167 7.31152L10.7781 7.31152Z" fill="#F8F7F7" />
                                                </svg>
                                            </div>

                                            <input type="text" value={product.sl} name={`name-${product.productId}`} id={`productCheckbox-${product.productId}`} className='text-center' />

                                            <div className=""
                                               >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                    <circle cx="8" cy="8" r="8" fill="#6D44E0" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00013 4.53516C7.6199 4.53516 7.31166 4.84339 7.31166 5.22362V7.31344H5.22167C4.84144 7.31344 4.5332 7.62168 4.5332 8.0019C4.5332 8.38213 4.84144 8.69037 5.22167 8.69037H7.31166V10.78C7.31166 11.1603 7.6199 11.4685 8.00013 11.4685C8.38035 11.4685 8.68859 11.1603 8.68859 10.78V8.69037H10.7781C11.1583 8.69037 11.4665 8.38213 11.4665 8.0019C11.4665 7.62168 11.1583 7.31344 10.7781 7.31344H8.68859V5.22362C8.68859 4.84339 8.38035 4.53516 8.00013 4.53516Z" fill="#F8F7F7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            ))
                        }
                        <div className="d-flex gap-2 align-items-center pt-2">
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                                    <path d="M20.1918 2.68894C19.8666 2.02528 19.2323 1.61161 18.5426 1.61329H15.9238V5.43485C15.9238 5.8605 16.2664 6.2048 16.6566 6.2048H21.9168L20.1918 2.68894Z" fill="#3BCADD" />
                                    <path d="M5.05358 18.0001C6.29049 18.0001 7.2932 16.9062 7.2932 15.5567C7.2932 14.2072 6.29049 13.1133 5.05358 13.1133C3.81667 13.1133 2.81396 14.2072 2.81396 15.5567C2.81396 16.9062 3.81667 18.0001 5.05358 18.0001Z" fill="#3BCADD" />
                                    <path d="M17.7144 13.1133C16.4774 13.1133 15.4746 14.2073 15.4746 15.5569C15.4746 16.9065 16.4774 18.0005 17.7144 18.0005C18.9514 18.0005 19.9542 16.9065 19.9542 15.5569C19.9542 15.5568 19.9542 15.5568 19.9542 15.5567C19.9527 14.2079 18.9507 13.1148 17.7144 13.1133Z" fill="#3BCADD" />
                                    <path d="M23.5962 8.80788L22.4383 7.19799H16.6569C15.7649 7.19799 15.0142 6.40838 15.0142 5.43529V0.735199C15.0225 0.338282 14.7343 0.00924472 14.3705 0.000185802C14.3576 -0.000124435 14.3447 -6.25577e-05 14.3317 0.000495869H0.725231C0.335032 0.000495869 0 0.309492 0 0.735199V14.3199C0 14.7456 0.335032 15.078 0.725231 15.078H1.93279C2.16727 13.198 3.75429 11.8813 5.4775 12.137C6.87968 12.3452 7.98237 13.5482 8.17318 15.078H14.595C14.8296 13.1979 16.4167 11.8813 18.14 12.1372C19.542 12.3454 20.6446 13.5484 20.8355 15.078H23.2748C23.665 15.078 24 14.7456 24 14.3199V10.0631C23.9961 9.60748 23.8542 9.16614 23.5962 8.80788Z" fill="#3BCADD" />
                                </svg>
                            </div>
                            <div className=""
                                style={{
                                    color: "var(--neutral-title, #273D90)",
                                    fontSize: '0.8em',
                                    fontWeight: '500'

                                }}
                            >
                                <div className="">    Miễn phí vận chuyển : Đơn hàng trên 700.000 đ   </div>
                                <div className="">   Miễn phí tối đa : 35.000 đ   </div>
                            </div>
                        </div>



                    </div >
                ))
            }
            <div className="" style={{
                height: '100px'
            }}></div>





            <div className="total__payment wrapper__mobile rounded-top-4 p-2" >
                <div className="t">Tổng</div>
                <div className="ms-3 mt-1 d-flex justify-content-between">
                    <div className="">
                        <div className="paymemt-price">{formatPrice(totalPrice)} đ</div>
                        <div className="incentives">Nhận được 200.000 à. Xu</div>
                    </div>
                    <div className=" d-flex align-items-center">
                        <Link to={'/payment'} className="btn-payment btn text-white " role="button">
                            Thanh toán
                        </Link>

                    </div>
                </div>

            </div >
        </div >
    )

}
export default Cart;