import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon";

function Header() {
    // Define the agency options
    const agencyOptions = [
        {
            title: 'gom chung',
            color: '#009F9D',
            path: '/'
        },
        {
            title: 'nhà bán',
            color: '#FF5E3A',
            path: '/buy-house'
        }
    ];

    // State to track the active agency index
    const [activeAgencyIndex, setActiveAgencyIndex] = useState<number | null>(0);

    // Update sessionStorage when the active agency changes
    useEffect(() => {
        sessionStorage.setItem('is-active', activeAgencyIndex?.toString() || '');
    }, [activeAgencyIndex]);
    const isActive = sessionStorage.getItem('is-active');
    console.log(isActive);

    return (
        <div className="wrapper__header bg-white">
            <div className="d-flex justify-content-center gap-4">
                {agencyOptions.map((item, idx) => (
                    <div
                        role="button"
                        onClick={() => setActiveAgencyIndex(idx)}
                        className={`header-title fs-6 text-uppercase${idx === activeAgencyIndex ? ' text-decoration-underline' : ''
                            }`}
                        key={idx}
                        style={{
                            color: idx === activeAgencyIndex ? item.color : '#666',
                            fontWeight: idx === activeAgencyIndex ? 800 : 500,
                        }}
                    >
                        <Link
                            to={item.path}
                            style={{
                                color: idx === activeAgencyIndex ? item.color : '#666',
                                fontWeight: idx === activeAgencyIndex ? 800 : 500,
                            }}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
            <div className="p-3">
                <form action="" method="">
                    <div className="header-search p-1 d-flex justify-content-between align-items-center">
                        <input
                            type="text"
                            id="searchInput"
                            name="searchInput"
                            placeholder="Tìm kiếm sản phẩm"
                            className="ms-1"
                        />
                        <div className="me-1 d-flex gap-2 align-items-center">
                            <div className="icon-image d-flex align-items-center">
                                <img src={icon.inputSearch} alt="" />
                            </div>
                            <button
                                type="submit"
                                className="header-search-icon bg-dark py-1 d-flex align-items-center justify-content-center"
                            >
                                <img src={icon.search} alt="" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Header;
