import React from "react"

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = React.useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }

    }
    // Theo dõi sự kiện cuộn trang
    React.useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Xử lý sự kiện click
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll-to-top-button ${isVisible ? '' : 'd-none'}`} onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7754 13.3499V25.8233C19.7754 26.3576 19.3423 26.7907 18.8081 26.7907C18.2738 26.7907 17.8407 26.3576 17.8407 25.8233V13.3492L13.3718 17.8182C12.994 18.1959 12.3815 18.1959 12.0038 17.8182C11.626 17.4404 11.626 16.8279 12.0038 16.4502L18.1237 10.3302C18.2499 10.204 18.4023 10.12 18.5633 10.0781C18.6239 10.0623 18.6869 10.0522 18.7515 10.0485C19.0175 10.0331 19.2886 10.127 19.4917 10.3302L19.5068 10.3452" fill="#0F0A3C" />
                <circle cx="18" cy="18" r="17.5" stroke="white" />
                <path d="M18.8082 12.3822L13.3723 17.8182C12.9945 18.1959 12.382 18.1959 12.0043 17.8182C11.6265 17.4404 11.6265 16.8279 12.0043 16.4502L18.1242 10.3302C18.502 9.95243 19.1145 9.95243 19.4922 10.3302L25.6122 16.4502C25.9899 16.8279 25.9899 17.4404 25.6122 17.8182C25.2344 18.1959 24.6219 18.1959 24.2442 17.8182L18.8082 12.3822Z" fill="#333333" />
                <path d="M19.7754 25.8233C19.7754 26.3576 19.3423 26.7907 18.8081 26.7907C18.2738 26.7907 17.8407 26.3576 17.8407 25.8233V11.0142C17.8407 10.48 18.2738 10.0469 18.8081 10.0469C19.3423 10.0469 19.7754 10.48 19.7754 11.0142V25.8233Z" fill="#333333" />
            </svg>
        </div>
    )

}
