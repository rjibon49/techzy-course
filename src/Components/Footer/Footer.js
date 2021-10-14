import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="containerxl bg-gray-300">
            <div className=" container grid grid-cols-2 md:grid-col-6 gap-4 py-10">
                <div className="">
                    <h4 className="font-bold text-2xl text-green-900">
                        Contact
                    </h4>
                    <p text-base> Brooklyn, NY 10036, 16-2 United States </p>
                    <p text-base> info@demolink.org </p>
                    <p text-base> Call Us: 1-800-123-1234 </p>
                </div>
                <div className="">
                    <h4 className="font-bold text-2xl text-green-900">
                        Social
                    </h4>
                    <ul className="footer-ul">
                        <li className="footer-li"><a className="footer-link" href="/test">Facebook</a> </li>
                        <li className="footer-li"><a className="footer-link"  href="/test">Instagram</a> </li>
                        <li className="footer-li"><a className="footer-link" href="/test">Youtube</a> </li>
                        <li className="footer-li"k><a className="footer-link"href="/test">Linkedin</a> </li>
                        <li className="footer-li"><a className="footer-link"href="/test">Twitter</a> </li>
                    </ul>
                </div>
            </div>
            <div>
                    <p className="font-bold text-center copy pb-2">
                    &#169; 2021 Teachzy. All rights reserved.
                    </p>
            </div>
        </div>
    );
};

export default Footer;