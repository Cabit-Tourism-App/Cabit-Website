

export default function Foot() {
    return (
        <footer 
            className="row"
            style={{
                backgroundColor: "#1C1F22",
                padding: "40px 60px",
                margin: "0",
                borderRadius: "3px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                backdropFilter: "blur(12px)",
                color: "#E0E0E0",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div className="col-3">
                <img src= "images/CabitImageW.png" alt="logo??"/>
                <p style={{ color: "#B0B0B0", fontSize: "14px" }}>© 2024 CabIt. All rights reserved.</p>
            </div>

            <div className="col-2">
                <h5 style={{ color: "#FFEB66", fontWeight: "600" }}>Company</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-secondary">Home</a></li>
                    <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-secondary">About Us</a></li>
                    <li className="nav-item mb-2"><a href="/careers" className="nav-link p-0 text-secondary">Careers</a></li>
                    <li className="nav-item mb-2"><a href="/blog" className="nav-link p-0 text-secondary">Blog</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5 style={{ color: "#FFEB66", fontWeight: "600" }}>Support</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-secondary">Contact Us</a></li>
                    <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-secondary">FAQs</a></li>
                    <li className="nav-item mb-2"><a href="/help" className="nav-link p-0 text-secondary">Help Center</a></li>
                    <li className="nav-item mb-2"><a href="/safety" className="nav-link p-0 text-secondary">Safety</a></li>
                </ul>
            </div>

            <div className="col-2">
                <h5 style={{ color: "#FFEB66", fontWeight: "600" }}>Legal</h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><a href="/privacy" className="nav-link p-0 text-secondary">Privacy Policy</a></li>
                    <li className="nav-item mb-2"><a href="/terms" className="nav-link p-0 text-secondary">Terms of Service</a></li>
                    <li className="nav-item mb-2"><a href="/refund" className="nav-link p-0 text-secondary">Refund Policy</a></li>
                </ul>
            </div>

            <div className="col-3">
                <h5 style={{ color: "#FFEB66", fontWeight: "600" }}>Newsletter</h5>
                <p style={{ fontSize: "13px", color: "#B0B0B0" }}>Stay updated with our latest news & offers.</p>
                <input
                    type="email"
                    placeholder="Your email"
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "1px solid #444",
                        backgroundColor: "#2A2D31",
                        color: "#E0E0E0",
                        width: "100%",
                        marginBottom: "12px",
                        fontSize: "14px"
                    }}
                />
                <button style={{
                    backgroundColor: "#FFEB66",
                    color: "#2D3134",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    fontWeight: "600"
                }}>
                    Subscribe
                </button>
            </div>

        </footer>
    );
}
