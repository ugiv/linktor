import React from 'react';
import './darkness.css';
import { CgArrowTopRight } from "react-icons/cg";

function Darkness() {
    return (
        <div className="darkness">
            <div className="header-title">
                <h1>X-CLOTHES</h1>
            </div>
            <div className="link-list-container">
                <a href="https://tokopedia.com" className="list-link">
                    <p>Tokopedia</p>
                    <div className="circle">
                        <CgArrowTopRight 
                            color='white'
                            size={34}
                        />
                    </div>
                </a>
                <a href="https://shopee.com" className="list-link">
                    <p>Shopee</p>
                    <div className="circle">
                        <CgArrowTopRight 
                            color='white'
                            size={34}
                        />
                    </div>
                </a>
                <a href="https://zalora.co.id" className="list-link">
                    <p>Zalora</p>
                    <div className="circle">
                        <CgArrowTopRight 
                            color='white'
                            size={34}
                        />
                    </div>
                </a>
                <a href="https://blibli.com" className="list-link">
                    <p>Blibli</p>
                    <div className="circle">
                        <CgArrowTopRight 
                            color='white'
                            size={34}
                        />
                    </div>
                </a>
            </div>
            <div className="description-link-list">
                <p>Temukan toko kami di e-commerce favorite anda.</p>
            </div>
            <div className="footer">
                <p>Powered by <span>INFORK</span></p>
            </div>
        </div>
    )
}

export default Darkness;