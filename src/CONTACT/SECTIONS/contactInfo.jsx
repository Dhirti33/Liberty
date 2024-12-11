import "../STYLES/contactInfo.css"


const ContactInfo = () => {
  return (
    <section id="ContactInfo">
        <div className="contactInfoContainer">
            <div className="contactLocationText">
                <h2 className="headerText H2">WE CAN&apos;T WAIT TO MEET YOU!</h2>
                <p className="subText">We are excited to welcome you home as part of our church family. Below are the details we hope will put you at ease and make your experience an inviting one. It&apos;s absolutely awesome that you&apos;re here!</p>
            </div>
            <div className="contactLocationLine">
                <div className="lineCard">
                    <div className="lineIcon"><i className="phone bi-telephone-fill"></i></div>
                    <div className="lineText">Phone</div>
                    <div className="lineDetail">+233 548341442</div>
                </div>
                <div className="lineCard">
                    <div className="lineIcon"><i className="bi bi-envelope-fill"></i></div>
                    <div className="lineText">Email</div>
                    <div className="lineDetail">lomokodesmond@gmail.com</div>
                </div>
                <div className="lineCard">
                    <div className="lineIcon"><i className="location bi-geo-alt-fill"></i></div>
                    <div className="lineText">Location</div>
                    <div className="lineDetail">Accra, Ghana</div>
                </div>
            </div>
            <div className="contactForm">
                <label htmlFor="" className="H2">Get In Touch</label>
                <form action="" id="Form">
                    <input type="text" name="" id="" className="formName" placeholder='Name' />
                    <input type="email" name="" id="" className="formEmail" placeholder='Email' />
                    <input type="text" name="" id="" className="formTitle" placeholder='Title' />
                    <textarea name="" id="" className="formMessage" placeholder='Message'></textarea>
                    <button type="submit" className='formSubmit'>SUBMIT</button>
                </form>
            </div>
        </div>    
    </section>
  )
}

export default ContactInfo