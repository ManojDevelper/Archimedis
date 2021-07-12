import React from 'react';
import "../../styles/Home/Footer.css";
import img1 from "../../images/linkdin.svg";
import img2 from "../../images/facebook.svg";
import img3 from "../../images/insta.svg";
import img4 from "../../images/twitter.svg";
import img5 from "../../images/youtube.svg";
import { graphql, useStaticQuery } from "gatsby";
// import Dialog from '@material-ui/core/Dialog';

const Footer = () => {
    const data = useStaticQuery(graphql`
    query{
        Footer: file(relativePath: {eq: "footer.md"}) {
            id
            childMarkdownRemark {
              frontmatter {
                footer {
                  id
                  title
                  footercontainer {
                    id
                    description
                  }
                }
              }
            }
          }
    }`)
    //pay
    // const [open, setOpen] = React.useState(false);
    // const [scroll, setScroll] = React.useState('paper');

    // const handleClickOpen = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const descriptionElementRef = React.useRef(null);
    // React.useEffect(() => {
    //     if (open) {
    //         const { current: descriptionElement } = descriptionElementRef;
    //         if (descriptionElement !== null) {
    //             descriptionElement.focus();
    //         }
    //     }
    // }, [open]);
    //privacy
    // const [opens, setOpens] = React.useState(false);
    // const [scrolls, setScrolls] = React.useState('paper');

    // const handleClickOpens = (scrollType) => () => {
    //     setOpens(true);
    //     setScrolls(scrollType);
    // };

    // const handleCloses = () => {
    //     setOpens(false);
    // };

    return (
        <>
            <div id="footer">
                <div id="footer_container">
                    <div id="footer_container_top">
                        {data.Footer.childMarkdownRemark.frontmatter.footer.map(footers =>
                            <div id="footer_cards" key={footers.id}>
                                <h1>{footers.title}</h1>
                                {footers.footercontainer.map(footercontainers =>
                                    <div key={footercontainers.id}>
                                        <p>{footercontainers.description}</p>
                                    </div>
                                )}
                            </div>
                        )}
                        <div id="footer_cards2">
                            <iframe title="Archimedis" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15550.306655100214!2d80.0145069!3d12.9989065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd072fdf7b5826742!2sArchimedis%20Healthcare%20Private%20Limited%20-%20Reputed%20Pharma%20Manufacturers%20Chennai!5e0!3m2!1sen!2sin!4v1623929915150!5m2!1sen!2sin" id="footermap"></iframe>
                        </div>
                    </div>
                    <div id="footer_container_bottom">
                        <div id="footer_container_bottom_icons">
                            <img src={img1} alt="img" />
                            <img src={img2} alt="img" />
                            <img src={img3} alt="img" />
                            <img src={img4} alt="img" />
                            <img src={img5} alt="img" />
                        </div>
                        <p>Copyright © 2021 Archimedis. All rights reserved.</p>
                    </div>
                </div>
                {/* <div id="footer_minidiv">
                    <div id="footer_minidiv_block1">
                        <img src="" alt="img" />
                        <img src="" alt="img" />
                        <img src="" alt="img" />
                        <img src="" alt="img" />
                        <img src="" alt="img" />
                    </div>
                    <div id="footer_minidiv_block2">
                        <h1 onClick={handleClickOpen('paper')}>Terms of Service</h1>
                        <h1 onClick={handleClickOpens('paper')}>Privacy Policy</h1>
                    </div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                        fullScreen="true"
                    >
                        <div id="tncpop">
                            <div id="tncpop_top">
                                <img src="" alt="img" onClick={handleClose} />
                            </div>
                            <h1>Terms Of Service</h1>
                            <h2>README FIRST</h2>
                            <p>Welcome to the ContentConcepts website. ContentConcepts provides you with its services
                                subject to the following conditions. By visiting or by purchasing services or products from
                                ContentConcepts.in, or our other affiliate domains, you accept these conditions.
                                Additionally, when you use any future ContentConcepts service or product, or visit or
                                purchase from any business affiliated with ContentConcepts, whether it is included in the
                                ContentConcepts website, you will also be subject to the guidelines and conditions
                                applicable to such service or business. Please review the following conditions carefully.
                            </p>
                            <h2>ACCESS AND COPYRIGHT</h2>
                            <p>ContentConcepts grants you a limited license to access this website, but not to download
                                (other than page caching) or modify any portion of this website, except with the express
                                written consent of ContentConcepts. This license excludes any resale or commercial use of
                                this website or its contents; any downloading or copying of account information for the
                                benefit of another merchant; any derivative use of this website or its contents; any use of
                                data mining, robots, or similar data-gathering and extraction tools; or any collection and use
                                of any product or service listings, descriptions, or prices. This website or any portion of this
                                website may not be duplicated, reproduced, copied, sold, resold, visited, or otherwise
                                exploited for any commercial purpose without the express written consent of
                                ContentConcepts. You may not use any ContentConcepts logo or other proprietary
                                trademark or graphic as part of the link without express written consent from
                                ContentConcepts. Any unauthorized use terminates the permission or license granted by
                                ContentConcepts.

                            </p>
                            <p>This website is owned and operated by ContentConcepts and is protected by international
                                copyright and trademark laws.
                                You are not permitted to modify, reproduce, republish, copy, upload, post, distribute or
                                transmit in any way any material from this website, including code and software.
                                Unauthorized use of any portion of this website beyond that contained in the previous
                                section may violate trademark, copyright, and other laws.
                                Authors submitting material to ContentConcepts for service retain the copyright for their
                                material, and ContentConcepts requires no other credit or acknowledgment for the work
                                completed apart from the fees described on various services pages on the website.
                                ContentConcepts does not claim any rights to such material by virtue of supplying its
                                services, and will not use or disclose such material for any reason other than providing our
                                services.</p>
                            <p>By submitting your material to ContentConcepts, you represent and warrant that you own
                                or otherwise control all the rights to the material that you submit for service; that the
                                material does not contain any content which violates any applicable local, national or
                                international law or regulation; that the material does not infringe, misappropriate or
                                otherwise violate any copyright, trademark or other intellectual property right, right of
                                privacy, right of publicity or any other right of any entity or person; that use of the material
                                you supply does not violate this policy and will not cause injury to any person or entity; that
                                the material is accurate; and that you will indemnify ContentConcepts and/or its affiliates
                                for all claims resulting from any material you supply. ContentConcepts has the right but not
                                the obligation to delete any material that violates these conditions from the website, and to
                                monitor and refuse any content or activity. ContentConcepts shall have no liability to any
                                user of the website for the removal of any such material. ContentConcepts takes no
                                responsibility and assumes no liability for any material submitted by you or any third party.
                                ContentConcepts advises on changes that you, your publisher, or other third parties may
                                accept, reject, or further modify. Therefore, the content of any finished work is entirely the
                                responsibility of the author or any other persons to whom the author licenses, delegates, or
                                otherwise assigns control over his or her work. Comments provided to the author by
                                ContentConcepts and its personnel are provided for personal use only. Rights, credit and
                                acknowledgment for any original work created by ContentConcepts and its staff will be
                                negotiated on a case-by-case basis. ContentConcepts' work on any manuscript does not
                                imply any endorsement of the manuscript's content or of the author.</p>
                            <h2>Electronic communications
                            </h2>
                            <p>When you visit the ContentConcepts website or send emails to us, you are communicating
                                with us electronically. You agree to receive communications from us electronically. We will
                                communicate with you by email, or by posting notices on this website. Unless otherwise
                                indicated, ContentConcepts does not guarantee the confidentiality of these electronic
                                communications. You also agree that all agreements, disclosures, notices, and other
                                communications that we provide to you electronically satisfy any legal requirement that
                                such communications be in writing.
                            </p>
                            <h2>Privacy</h2>
                            <p>As a policy, we respect and protect the privacy of the individuals who visit our website. Our
                                Privacy Policy is incorporated herein by reference and therefore, by accepting the terms of
                                use of this website, you expressly consent to the terms and conditions of our Privacy Policy.
                                You may view our Privacy Policy at https://www.ContentConcepts.in/privacypolicy
                            </p>
                            <h2>Customers</h2>
                            <p>ContentConcepts is committed to providing quality editing and proofreading services at
                                affordable prices. However, ContentConcepts is not obligated to refund the purchase price
                                of any service under any circumstance unless explicitly agreed to by ContentConcepts. Price,
                                terms, and availability are subject to change without notice. All prices quoted are in Indian
                                Rupee (INR) unless otherwise stated. ContentConcepts and its affiliates reserve the right to request payment before delivery of service, to refuse service, or to cancel orders, or to limit
                                quantities at ContentConcepts sole discretion.
                                The purchase prices and invoices may be based on information that you provide to us,
                                including the word count of the documents you are submitting for service. You represent
                                and warrant that such information is accurate, and you agree to pay to ContentConcepts
                                any additional charges arising from any inaccuracy in such information within seven days of
                                notification thereof. ContentConcepts is not obligated to verify the accuracy of such
                                information, but will refund to you any overpayment arising from inaccuracy therein.
                                ContentConcepts may, at its sole discretion, offer monthly invoicing arrangements to
                                regular business customers and personal customers, and may agree to additional or
                                modified terms for such arrangements. Unless otherwise agreed to in writing, payment is
                                due when the invoice is rendered.
                            </p>
                            <h2>Disclaimer of warranties and limitations of liability</h2>
                            <p>ContentConcepts and its contractors attempt to be as reliable and accurate as possible.
                                However, ContentConcepts does not warrant that any product or service descriptions, other
                                content of this website, or its services performed for its customers are complete, accurate,
                                reliable, error-free, or current. This website and ContentConcepts services are provided by
                                ContentConcepts on an "as is" and "as available" basis and at your sole risk. To the fullest
                                extent permissible pursuant to applicable law, ContentConcepts disclaims all warranties and
                                conditions, expressed or implied, with respect to its services and any information, materials,
                                or content on this website, including any implied warranties or conditions of fitness for a
                                particular purpose, merchantability, and non-infringement. ContentConcepts, in its website,
                                including without limitation graphics, banners, and links pages, may provide pointers and
                                links to websites maintained by third parties. ContentConcepts does not operate, or control
                                in any respect, any information, products, or services on these third-party websites.
                                In no event is ContentConcepts, its employees, independent contractors, subsidiary and
                                parent companies, affiliates, or any third parties mentioned on the website liable for any
                                damages whatsoever (including, without limitation, direct, incidental, or consequential
                                damages, lost profits, or damages resulting from lost data, breach of confidentiality, or
                                business interruption) resulting from the performance of ContentConcepts’ services, the use
                                or inability to use the ContentConcepts website or the material contained on the website,
                                whether based on warranty, contract, negligence, tort, strict liability, operation of law, or
                                any other legal theory, whether or not ContentConcepts is advised of the possibility of such
                                damages.
                                In no event is ContentConcepts liable for damages in excess of the amount paid by a
                                customer for the service in question. ContentConcepts has created this website and
                                determined its prices in reliance on the limitations of liability and disclaimers of warranties
                                and damages set forth herein, and the same form a fundamental basis of the bargain
                                between the parties. They shall apply even if the contract between you and
                                ContentConcepts is found to have failed in its essential purpose or has been fundamentally
                                breached. You specifically agree that ContentConcepts is not liable for any offensive,
                                defamatory, or illegal conduct of any user. If you are dissatisfied with any ContentConcepts material, or with any of ContentConcepts terms and conditions, your sole and exclusive
                                remedy is to discontinue using ContentConcepts services.
                                While we endeavor to ensure that any files originating at this website are free of known
                                computer viruses, we make no warranty or guarantee that files are virus-free, and we are
                                not able to provide any assurances with respect to email or attachments that may have
                                originated with third parties. Therefore, all recipients are cautioned to check all email,
                                attachments, and other computer files before accessing them, and any and all risk of virus
                                contamination is assumed by the recipient. ContentConcepts makes no warranty or
                                guarantee that the website will operate in a manner that is secure (unless otherwise
                                indicated), uninterrupted or error-free. ContentConcepts is not responsible for technical,
                                hardware or software failures of any kind; incomplete, garbled or delayed computer
                                transmissions; or lost or unavailable network connections.
                            </p>
                            <h2>Other</h2>
                            <p>The aforementioned terms and conditions constitute the complete and exclusive statement
                                of the mutual understanding of the parties and supersede and cancel all previous written
                                and oral agreements and communications relating to the subject matter hereof. If any
                                provision of this agreement shall be unlawful, void, or for any reason unenforceable, then
                                that provision shall be deemed severable from this agreement and shall not affect the
                                validity and enforceability of any remaining provisions</p>
                        </div>
                    </Dialog>
                    <Dialog
                        open={opens}
                        onClose={handleCloses}
                        scroll={scrolls}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                        fullScreen="true"
                    >
                        <div id="tncpop">
                            <div id="tncpop_top">
                                <img src="" alt="img" onClick={handleCloses} />
                            </div>
                            <h1>Privacy Policy</h1>
                            <p>We hold the confidentiality of your intellectual property, the documents and business
                                data in high regard. As a professional online service, we value your trust in us and we
                                are committed to protecting your privacy.
                                Adhering to National and International Acts such as the Privacy Act 1988 and the
                                Privacy Amendment Act 2000, we abide by the National Privacy Principles integrated
                                in these acts, and all the documents you share with us are dealt with in accordance
                                with the same.
                                Our employees are under this confidentiality agreement. The client retains exclusive
                                ownership of the copyrights and control over the documents shared.
                                We have drafted a privacy policy exclusively for ContentConcepts wherein the entire
                                procedure of receiving, using and safeguarding your personal and professional
                                information is described in detail.
                            </p>
                            <h2>Amendment in the Privacy Policy</h2>
                            <p>ContentConcepts reserves the right to make any modifications/additions to its privacy
                                policy whenever and wherever it finds it necessary. These changes will come into
                                effect after they have been announced on the website. We advise you to go through
                                the privacy policy from time to time, as your use of our website following any such
                                revision constitutes your agreement to follow and be bound by the altered privacy
                                policy.
                            </p>
                            <h2>Personal Information</h2>
                            <p>Any personal information recorded by us, such as your name, e-mail id, etc., is used
                                to offer you our services.
                                We never store any information about the credit/debit card that you use for conducting
                                transactions with us. All transactions are carried out through secure payment methods
                                such as PayPal and WorldPay.
                                We are committed to not disclosing your personal information to any other party,
                                except with those who work on our behalf to deliver you the required service, which
                                again abides by our privacy policy.
                                We ensure that we take necessary steps to protect your data against any kind of
                                misuse and loss.
                            </p>
                            <h2>Deleting Your Data</h2>
                            <p>ContentConcepts ensures that all the data shared by you and all the documents are
                                permanently wiped out from our system within 120 days after the job is delivered.
                            </p>
                            <h2>Accessing Your Personal Data</h2>
                            <p>You can contact us to modify or add to the personal information that you have shared
                                with us. You can make the necessary changes free of cost and as many times as you
                                need.
                            </p>
                            <h2>The No Spam Policy</h2>
                            <p>ContentConcepts strongly condemns spam and is committed to the Spam Act of 2003
                                that prohibits any unsolicited mail such as newsletters and marketing communications.
                                We make sure that such mail is sent to you only after obtaining an authorization from
                                you.
                                If, at any point, you feel like unsubscribing from our mails, please contact us and it will
                                be done within 5 days.
                                We treat our database as extremely confidential and in no form is it shared with or sold
                                to other parties.
                            </p>
                            <h2>External Websites</h2>
                            <p>ContentConcepts bears no responsibility for the external links posted on its website.
                                It is strongly recommended that you check the respective privacy policies of these
                                external parties, as our privacy policy does not apply to them</p>
                            <h2>Grievances</h2>
                            <p>If you have any complaints regarding our privacy policy, kindly communicate them to
                                us. We will take the required action and contact you immediately.</p>
                        </div>
                    </Dialog>
                </div> */}
            </div>
        </>
    );
};
export default Footer;