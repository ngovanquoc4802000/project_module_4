import React from 'react';
import './Header.css';
import logo from '../assets/foody-logo.png';
import govSeal from '../assets/gov_seals.jpg';


const Header = () => {
    return (
        <div className="page-wrapper">
            <div className="header">
                <div className="header-top">
                    <div className="header-left">
                        <a href="#" className="menu-item">Khám Phá</a>
                        <a href="#" className="menu-item">Đặt Giao Hàng</a>
                        <a href="#" className="menu-item">
                            Đi chợ <span className="new-label">NEW</span>
                        </a>
                    </div>
                </div>

                <div className="header-bottom">
                    <img src={logo} alt="Logo" className="logo"/>

                    <select className="dropdown">
                        <option>Hà Nội</option>
                        <option>Hồ Chí Minh</option>
                        <option>Đà Nẵng</option>
                    </select>

                    <select className="dropdown">
                        <option>Ăn uống</option>
                        <option>Du lịch</option>
                        <option>Giải trí</option>
                    </select>

                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Địa điểm, món ăn, loại hình..."/>
                        <button className="filter-btn">Bộ lọc</button>
                        <button className="search-btn">🔍</button>
                    </div>

                    <div className="header-actions">
                        <button className="login-btn">Đăng nhập</button>
                        <span className="icon">🔔</span>
                    </div>
                </div>
            </div>

            <div className="content">
                <h1>Nội dung trang web ở đây</h1>
                <p>Bạn có thể thêm bất kỳ nội dung nào ở phần này.</p>
            </div>


            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-column">
                        <h4>Khám phá</h4>
                        <a href="#">Ứng dụng Mobile</a>
                        <a href="#">Tạo bộ sưu tập</a>
                        <a href="#">Bảo mật thông tin</a>
                        <a href="#">Quy định</a>
                    </div>
                    <div className="footer-column">
                        <h4>Công ty</h4>
                        <a href="#">Giới thiệu</a>
                        <a href="#">Trợ giúp</a>
                        <a href="#">Việc làm</a>
                        <a href="#">Quy chế</a>
                        <a href="#">Thỏa thuận sử dụng dịch vụ</a>
                        <a href="#">Liên hệ</a>
                    </div>
                    <div className="footer-column">
                        <h4>Tham gia trên</h4>
                        <a href="#">Facebook</a>
                        <a href="#">Instagram</a>
                        <a href="#">Youtube</a>
                        <a href="#">Google</a>
                        <a href="#">ShopeeFood.vn</a>
                    </div>
                    <div className="footer-column">
                        <h4>Giấy phép</h4>
                        <a href="#">MXH 363/GP-BTTTT</a>
                        <img
                            src={govSeal}
                            alt="Bộ công thương"
                            className="gov-logo"
                        />

                    </div>
                </div>

                <div className="footer-bottom">
                    <p>
                        Công Ty Cổ Phần Foody, Lầu G, Tòa nhà Jabes 1, 244 đường Cống Quỳnh,
                        phường Phạm Ngũ Lão, Quận 1, TP.HCM
                    </p>
                    <p>Email: cskh@support.shopeefood.vn</p>
                    <p>
                        Giấy CN ĐKDN số 0311828036 do Sở KHĐT TP.HCM cấp ngày 11/6/2012,
                        sửa đổi lần thứ 23, ngày 10/12/2020
                    </p>
                    <p>
                        Giấy phép thiết lập MXH trên mạng số 363/GP-BTTTT do Bộ TTTT cấp ngày
                        30/6/2016. Người chịu trách nhiệm: Đặng Hoàng Minh.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Header;
