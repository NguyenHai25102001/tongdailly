import React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
export default function HeaderCart({ ...props }) {
    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="wrapper_header_cart w-100 px-3 py-2">

            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <div className=""
                        onClick={handleBack}><svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                            <path d="M13 1L1 13L13 23" stroke="white" stroke-linejoin="bevel" />
                        </svg></div>
                    <div className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="6" viewBox="0 0 24 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="white" />
                            <circle cx="12" cy="3" r="3" fill="white" />
                            <circle cx="21" cy="3" r="3" fill="white" />
                        </svg>
                    </div>


                </div>
                <div className="title text-center">{props.title}</div>
                <div className="">
                    <div className="text-white fs-6">

                        <Badge badgeContent={4} color="primary">
                            <MessageIcon />
                        </Badge>


                    </div>
                </div>

            </div>

        </div>
    );
}
