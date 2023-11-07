import React from "react"
import { Link } from "react-router-dom";
interface ButtonAll {
    color: string

}
const ButtonAll: React.FC<ButtonAll> = (props) => {
    return (
        <div className="wrapper_btn_all d-flex justify-content-center ">
            <Link to={"/list-buy-house"} className="button rounded"
                style={{
                    color: props.color,
                    border: '1px solid' + props.color,
                }}>Xem tất cả</Link>

        </div>
    )

}
export default ButtonAll;