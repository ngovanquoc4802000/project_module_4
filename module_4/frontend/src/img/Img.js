import React from "react";

function ForgotPassword() {
    return (
        <div className="forgot-wrapper">
            <div className="forgot-box">
                <h2 className="forgot-title">Forgot Password</h2>
                <p className="forgot-subtitle">Please enter your email to reset your password</p>
                <form className="forgot-form">
                    <div className="forgot-input-group">
                        <MailIcon className="forgot-icon" />
                        <input type="email" placeholder="Your email" required />
                    </div>
                    <button type="submit" className="forgot-btn">
                        <SendHorizonal className="forgot-btn-icon" />
                        Send Request
                    </button>
                </form>
                <Link to="/login" className="forgot-back">← Back to Login</Link>
            </div>
        </div>
    );
}

export default ForgotPassword;
