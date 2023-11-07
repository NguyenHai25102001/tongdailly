import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton, FacebookIcon,
} from 'react-share';
import {
    EmailIcon,

    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon
} from "react-share";

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'; import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
function SelectShare({ ...props }) {
    const [active, setActive] = React.useState(false);

    React.useEffect(() => {
        setActive(props.status);
    }, [props.status]);

    console.log(active);

    return (
        <div className={(active ? '' : 'd-none')}>
            <div className={"wrapper__share rounded-top-4 wrapper__mobile z-3 " + (active ? '' : 'd-none')}>
                <div className=" d-flex justify-content-between py-3 align-items-center ">
                    <div className=""></div>
                    <div className="">Chia sẻ</div>
                    <div className="" role='button' onClick={props.handleClose}>
                        <IconButton aria-label="delete" >  <CloseIcon /></IconButton>
                    </div>
                </div>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={7}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={7}
                        freeMode={true}
                        watchSlidesProgress={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <EmailShareButton url="https://example.com" title="Example Title">
                                <EmailIcon size={48} round />
                            </EmailShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <FacebookShareButton url="https://example.com" quote="Example Quote">
                                <FacebookIcon size={48} round />
                            </FacebookShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <HatenaShareButton url="https://example.com">
                                <HatenaIcon size={48} round />
                            </HatenaShareButton>
                        </SwiperSlide>
                        <SwiperSlide>

                            <InstapaperShareButton url="https://example.com" title="Example Title">
                                <InstapaperIcon size={48} round />
                            </InstapaperShareButton>
                        </SwiperSlide>

                        <SwiperSlide>
                            <LineShareButton url="https://example.com" title="Example Title">
                                <LineIcon size={48} round />
                            </LineShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <LinkedinShareButton url="https://example.com" title="Example Title" summary="Example Summary">
                                <LinkedinIcon size={48} round />
                            </LinkedinShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <LivejournalShareButton url="https://example.com" title="Example Title">
                                <LivejournalIcon size={48} round />
                            </LivejournalShareButton>
                        </SwiperSlide>
                        {/* Thêm các nút chia sẻ khác tại đây theo cách tương tự */}
                        <SwiperSlide>
                            <MailruShareButton url="https://example.com" title="Example Title">
                                <MailruIcon size={48} round />
                            </MailruShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <OKShareButton url="https://example.com" title="Example Title">
                                <OKIcon size={48} round />
                            </OKShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <PinterestShareButton url="https://example.com" media="https://example.com/image.jpg">
                                <PinterestIcon size={48} round />
                            </PinterestShareButton>
                        </SwiperSlide>


                        <SwiperSlide>
                            <PocketShareButton url="https://example.com" title="Example Title">
                                <PocketIcon size={48} round />
                            </PocketShareButton>
                        </SwiperSlide>
                        <SwiperSlide>

                            <RedditShareButton url="https://example.com" title="Example Title">
                                <RedditIcon size={48} round />
                            </RedditShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TelegramShareButton url="https://example.com" title="Example Title">
                                <TelegramIcon size={48} round />
                            </TelegramShareButton>

                        </SwiperSlide>
                        <SwiperSlide>
                            <TwitterShareButton url="https://example.com" title="Example Title">
                                <TwitterIcon size={48} round />
                            </TwitterShareButton>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ViberShareButton url="https://example.com" title="Example Title">
                                <ViberIcon size={48} round />
                            </ViberShareButton>
                        </SwiperSlide>
                    </Swiper>



                </Swiper>

            </div>
        </div>
    )

}
export default SelectShare;