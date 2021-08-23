import React, { useState } from "react";
import "../../styles/Home/Contact.css";
import img1 from "../../images/c_phone.svg";
import img2 from "../../images/c_mail.svg";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [organization, setOrganization] = useState("")
    const [message, setMessage] = useState("")
    const [disabled, setDisabled] = useState(false);
    console.log(name)

    const [errors, setErrors] = useState("");
    const validation = () => {
        let errors = {};
        if (!name) {
            errors.color = "red"
        } else {
            errors.color = ""
        } if (!email) {
            errors.color = "red"
        } else {
            errors.color = ""
        } if (!phone) {
            errors.color = "red"
        } else {
            errors.color = ""
        } if (!organization) {
            errors.color = "red"
        } else {
            errors.color = ""
        } if (!message) {
            errors.color = "red"
        } else {
            errors.color = ""
        }
        return errors;
    }


    function signUpp() {
        setErrors(validation())
    }

    const onFinish = async values => {

        setDisabled(true);

        var saveData = values;

        const data = new FormData();

        data.append("name", name);
        data.append("email", email);
        if (phone === undefined) {
            data.append("phone", '-');
        } else {
            data.append("phone", phone);
        }
        data.append("organization", organization);
        data.append("message", message);

        var url = "https://script.google.com/macros/s/AKfycbyXc8omZG7quzksXGSRktMgsQiWy7L79FoorEqBg_aEmtzpWBOHn8kkPsdllbtu_3d1/exec";

        await fetch(url, {
            method: 'POST',
            body: data,
            mode: 'no-cors',
        }).then(function (response) {
            setDisabled(false);
        }).catch(function (err) {
            setDisabled(false);
        });
    };

    return (
        <>
            <div className="contact" id="contact">
                <h1>Contact us</h1>
                <div className="contact_contrainer">
                    <div className="contact_img_block">
                        <div id="contact_img_block_top">
                            <p>Reach Us</p>
                            <p>Fill up the form and we will get back to you within 24 hours</p>
                        </div>
                        <div id="contact_img_block_bottom">
                            <div id="contact_img_block_bottom_blocks">
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <img src={img1} alt="img" />
                                </div>
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <p>+91  44 4717 1111</p>
                                </div>
                            </div>
                            <div id="contact_img_block_bottom_blocks">
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <img src={img2} alt="img" />
                                </div>
                                <div id="contact_img_block_bottom_blocks_b1">
                                    <p>care@archimedis.net</p>
                                </div>
                            </div>
                        </div>
                        <iframe title="Archimedis" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.306655100214!2d80.0145069!3d12.9989065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd072fdf7b5826742!2sArchimedis%20Healthcare%20Private%20Limited%20-%20Reputed%20Pharma%20Manufacturers%20Chennai!5e0!3m2!1sen!2sin!4v1623929915150!5m2!1sen!2sin" id="contact_img_block_bottom_blocks2"></iframe>
                    </div>
                    <div className="contact_info_block" method="POST" action="">
                        <div className="contact_info_top">
                            <div className="contact_name" style={{ position: `relative` }}>
                                {(name.length < 3) ? (<span style={{ color: (errors.color) }}>Your Name</span>) : (<span>Your Name</span>)}
                                <input type="text" placeholder="Chris Do" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="contact_name" style={{ position: `relative` }}>
                                {(!email) || (!/\S+@\S+\.\S+/.test(email)) ? (<span style={{ color: (errors.color) }}>Email Address</span>) : (<span>Email Address</span>)}
                                <input type="text" placeholder="chrisdo@abc.com" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="contact_info_top">
                            <div className="contact_name" style={{ position: `relative` }}>
                                {(!phone || phone.length < 10) ? (<span style={{ color: (errors.color) }}>Contact Number (optional)</span>) : (<span>Contact Number (optional)</span>)}
                                <input type="mail" placeholder="+91  9876543210" value={phone} onChange={e => setPhone(parseInt(e.target.value) || "")} maxLength={12}
                                    minLength={10}
                                    onKeyPress={event => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault()
                                        }
                                    }} />
                            </div>
                            <div className="contact_name" style={{ position: `relative` }}>
                                {(!organization || organization.length < 3) ? (<span style={{ color: (errors.color) }}>Your organization name (optional)</span>) : (<span>Your organization name (optional)</span>)}
                                <input type="text" placeholder="ABC inc." value={organization} onChange={e => setOrganization(e.target.value)} />
                            </div>
                        </div>

                        <div className="contact_message" style={{ position: `relative` }}>
                            <span>Message</span>
                            <textarea type="text" placeholder="What do you want to talk to us about?" value={message} onChange={e => setMessage(e.target.value)} />
                        </div>
                        <div className="button">
                            {name.length < 3, !email || (!/\S+@\S+\.\S+/.test(email)), !phone || phone.length < 10, !organization || organization.length < 3 ?
                                <button onClick={signUpp}>SEND MESSAGE</button>
                                :
                                <button onClick={onFinish}>SEND MESSAGE</button>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};
export default Contact;