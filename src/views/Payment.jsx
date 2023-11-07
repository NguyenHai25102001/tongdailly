import { Link } from "react-router-dom";

import HeaderCart from "../components/HeaderCart";
import logo from "../assets/logo";
import Swal from 'sweetalert2'
export default function Payment() {
    const payments = [
        {
            name: 'Thanh toán khi nhận hàng',
            logo: '',
        },
        {
            name: 'Thanh toán bằng ví Owang',
            logo: logo.momo,
        },
        {
            name: 'Thanh toán bằng ví Momo',
            logo: logo.momo,
        },
        {
            name: 'Thanh toán qua ví Shoppe Pay',
            logo: logo.shoppe,
        },
        {
            name: 'Thanh toán qua ví Vn Pay',
            logo: logo.zalo,
        },
    ]
    const handleOrder = () => {
        Swal.fire({
            title: '<div></div>',
            icon: 'success',
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: 'Tiếp tục mua sắm',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/'; // Use window.location.href for page redirection
            }
        });



    }
    return (
        <div className="wrapper_payment">
            <HeaderCart title='Thanh toán' />
            <div className="address p-2 bg-white">
                <div className="payment-title">Địa chỉ giao hàng</div>
                <div className="d-flex justify-content-between ms-2">
                    <div className="address--content">
                        <div className="d-flex gap-2 mb-2 align-items-center mt-2">
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <g filter="url(#filter0_d_6316_110270)">
                                    <path d="M13.6272 9.58456C12.7041 8.01097 10.9826 6.94971 8.99913 6.94971C7.01569 6.94971 5.29421 8.01097 4.37109 9.58456L4.38357 9.99931H13.6147L13.6272 9.58456Z" fill="#6D44E0" />
                                    <path d="M8.99978 5.24704C10.3777 5.24704 11.4947 4.15476 11.4947 2.80736C11.4947 1.45996 10.3777 0.367676 8.99978 0.367676C7.62189 0.367676 6.50488 1.45996 6.50488 2.80736C6.50488 4.15476 7.62189 5.24704 8.99978 5.24704Z" fill="#6D44E0" />
                                    <path d="M8.99969 5.61127C7.41543 5.61127 6.13055 4.35483 6.13055 2.80564C6.13055 1.25644 7.41543 0 8.99969 0C10.5839 0 11.8688 1.25644 11.8688 2.80564C11.8688 4.35483 10.5839 5.61127 8.99969 5.61127ZM8.99969 0.731905C7.82708 0.731905 6.87902 1.65898 6.87902 2.80564C6.87902 3.95229 7.82708 4.87937 8.99969 4.87937C10.1723 4.87937 11.1203 3.95229 11.1203 2.80564C11.1203 1.65898 10.1723 0.731905 8.99969 0.731905Z" fill="#6D44E0" />
                                    <path d="M4.37196 9.95221C4.30959 9.95221 4.24722 9.94001 4.18485 9.90342C4.0102 9.80583 3.94783 9.58626 4.04763 9.40328C5.05806 7.67111 6.95418 6.58545 9 6.58545C11.0458 6.58545 12.9419 7.67111 13.9524 9.40328C14.0522 9.57406 13.9898 9.80583 13.8152 9.90342C13.6405 10.001 13.4035 9.94001 13.3037 9.76923C12.418 8.25663 10.7714 7.31735 9 7.31735C7.22862 7.31735 5.58199 8.25663 4.6963 9.76923C4.63393 9.87902 4.50918 9.95221 4.37196 9.95221Z" fill="#6D44E0" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_6316_110270" x="0" y="0" width="18" height="17.9995" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6316_110270" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6316_110270" result="shape" />
                                    </filter>
                                </defs>
                            </svg></div>
                            <div className="">Trần Bá Quang</div>
                        </div>
                        <div className="d-flex gap-2 mb-2 align-items-center">
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                <path d="M8.53501 1.46393C6.5821 -0.488391 3.41626 -0.487922 1.46393 1.46501C-0.488391 3.41794 -0.487922 6.58376 1.46501 8.53608C3.41794 10.4884 6.58376 10.4879 8.53608 8.53501C9.4737 7.5971 10.0003 6.32512 10 4.99893C9.99973 3.67296 9.47276 2.40139 8.53501 1.46393ZM7.57233 6.96495C7.57212 6.96516 7.5719 6.9654 7.57167 6.96561V6.96395L7.31833 7.21561C6.99069 7.54739 6.51352 7.68389 6.05999 7.57561C5.60305 7.45331 5.16868 7.25862 4.77333 6.99895C4.40602 6.76421 4.06563 6.48979 3.75833 6.18061C3.47557 5.89993 3.22155 5.59173 2.99999 5.26061C2.75764 4.90432 2.56583 4.5162 2.42999 4.10727C2.27427 3.62688 2.40331 3.09975 2.76333 2.74561L3.05999 2.44895C3.14247 2.3661 3.27649 2.36581 3.35932 2.44829C3.35954 2.4485 3.35977 2.44872 3.35999 2.44895L4.29665 3.38561C4.3795 3.46809 4.37979 3.60212 4.29731 3.68495C4.2971 3.68516 4.29688 3.68538 4.29665 3.68561L3.74665 4.23561C3.58884 4.39171 3.56899 4.63975 3.69999 4.81895C3.89891 5.09196 4.11905 5.34886 4.35833 5.58729C4.6251 5.85522 4.91512 6.09895 5.22499 6.31563C5.40403 6.44051 5.64677 6.41946 5.80165 6.26563L6.33331 5.72563C6.41579 5.64278 6.54981 5.64249 6.63264 5.72497C6.63286 5.72518 6.63307 5.7254 6.63331 5.72563L7.57165 6.66563C7.65452 6.74809 7.65481 6.8821 7.57233 6.96495Z" fill="#6D44E0" />
                            </svg></div>
                            <div className="">1234567890</div>
                        </div>
                        <div className="d-flex gap-2 mb-2 align-items-center">
                            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="22" viewBox="0 0 12 22" fill="none">
                                <path d="M7.17659 10.0025C4.33421 9.92037 2 11.8714 2 14.2898C2 17.0344 5.07208 19.0263 6.79398 21.8908C6.8814 22.0363 7.1256 22.0365 7.21332 21.891C8.77103 19.3135 11.4334 17.5851 11.9267 15.102C12.4376 12.5324 10.2151 10.0903 7.17659 10.0025ZM7.00341 16.5368C5.55599 16.5368 4.38259 15.5307 4.38259 14.2898C4.38259 13.0489 5.55602 12.0428 7.00341 12.0428C8.45082 12.0428 9.62425 13.0489 9.62425 14.2898C9.62425 15.5307 8.45082 16.5368 7.00341 16.5368Z" fill="#6D44E0" />
                            </svg></div>
                            <div className="">28,Dai Linh,Trung Van,Nam Tu Liem</div>
                        </div>
                    </div>
                    <div className="fs-6 text-danger"><i class="bi bi-pencil-square"></i></div>
                </div>
            </div>

            <div className="transport p-2 mt-2 bg-white">
                <div className="payment-title">Hình thức vận chuyển</div>
                <div className="ms-2 my-2">
                    <div className="transport-name">Tên nhà vận chuyển</div>
                    <div className="nh">Nhận hàng trong vòng 3-4 ngày </div>

                </div>
            </div>
            <div className="payment mt-2 bg-white ">
                <div className="payment-title p-2">Hình thức thanh toán</div>
                <div className="select-payment ms-1 p-2 ms-2">
                    {
                        payments.map((payment, index) => (
                            <div className="d-flex justify-content-between align-items-center mb-2 w-100" key={index}>
                                <div class="form-check d-flex align-items-center gap-2 ">
                                    <input className="form-check-input " type="radio" name="exampleRadios" id={index} value="option1" />
                                    <label className="form-check-label payment-name" for={index}>
                                        {payment.name}
                                    </label>
                                </div>

                                <div className="logo"
                                    style={{
                                        backgroundImage: `url(${payment.logo})`,
                                        backgroundSize: 'cover',
                                    }}
                                >
                                    <div className="pt"></div>


                                </div>
                            </div>

                        ))
                    }


                </div>


            </div>
            <div className="payment-order mt-2 bg-white">
                <div className="payment-title p-2 pb-0">Đơn hàng ( 4 Sản phẩm)</div>
                <hr />
                <div className="content p-2 ms-2">
                    <div className="d-flex justify-content-between mb-2">
                        <div className="payment-order--title">Tổng tiền sản phẩm (4 sản phẩm)</div>
                        <div className="price">3.600.000đ</div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="payment-order--title">Tổng phí vẩn chuyển</div>
                        <div className="price">+120.000đ</div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="payment-order--title">Tổng phí ưu đãi</div>
                        <div className="price">-120.000đ</div>
                    </div>
                </div>
                <hr />
                <div className="payment-total px-2 d-flex justify-content-between">
                    <div className="payment-total--title">Tổng tiền hàng</div>
                    <div className="total-price">3.720.000đ</div>

                </div>

            </div>
            <div className="py-5"></div>
            <div className="payment-buy position-fixed d-flex justify-content-center wrapper__mobile">
                <Link to="#" className="btn-order py-3" onClick={handleOrder}>
                    Đặt mua
                </Link>
            </div>


        </div >
    )
}