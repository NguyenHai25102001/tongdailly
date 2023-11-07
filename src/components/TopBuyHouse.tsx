import React from "react"
import formatPrice from "./formatPrice";



function hideCharacters(input: string): string {
    if (typeof input === 'string' && input.length >= 4) {
        const visibleCharacters = input.slice(-4); // Lấy 4 ký tự cuối
        const hiddenCharacters = '*'.repeat(input.length - 4); // Tạo chuỗi dấu sao (*)
        return hiddenCharacters + visibleCharacters;
    } else {
        // Xử lý trường hợp không hợp lệ (ít hơn 4 ký tự)
        return input;
    }
}

const TopBuyHouse = ({ ...props }) => {

    const check = props.name !== '' && props.name !== undefined;

    return (
        <div className="wrapper__buy-house w-100">
            <div className="main-buy-house text-center w-100 bg-white rounded-3 py-3">
                <div className="d-flex  w-100 justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 0C12.825 0 0 12.825 0 28.5C0 44.175 12.825 57 28.5 57C44.175 57 57 44.175 57 28.5C57 12.825 44.175 0 28.5 0ZM28.5012 8.54883C33.3462 8.54883 37.0512 12.2538 37.0512 17.0988C37.0512 21.9438 33.3462 25.6488 28.5012 25.6488C23.6562 25.6488 19.9512 21.9438 19.9512 17.0988C19.9512 12.2538 23.6562 8.54883 28.5012 8.54883ZM11.3994 39.8995C15.1044 45.3146 21.3744 49.0195 28.4994 49.0195C35.6244 49.0195 41.8944 45.3145 45.5994 39.8995C45.5994 34.1995 34.1994 31.0645 28.4994 31.0645C22.7994 31.0645 11.3994 34.1995 11.3994 39.8995Z" fill="#858B93" />
                    </svg>
                </div>
                <div className="buy-house-phone mt-2 text-uppercase">
                    {check ? props.name : hideCharacters('1234567890')}
                </div>

                <div className="buy-house-status text-uppercase mt-1">{check ? 'Đã bán' : 'Đá mua'}</div>
                <div className="buy-house--price mt-1">{formatPrice('1000000')} Đ</div>
                <div className="buy-house--price mt-1">234 đn hàng</div>


            </div>


        </div>
    )
}
export default TopBuyHouse;