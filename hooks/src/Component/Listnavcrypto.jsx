// import '../styles/listcrypto.css'
import "../styles/coinComponent.css"
import white from "../assets/white-background.jpg"


function ListNavCrypto(){
    let myDate = new Date()
    console.log(myDate)

    return(
        <div className="bodylistcrypto">
        <div className="boddy-coin">
            <div className="title-coin">
                <h1>Crypto Currency</h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA5tJREFUaEPtmY+RTEEQxr+LABEgAkSACBABIkAEiAARIAJEgAgQASJABNTvarpqtt/Mm+7Zt6uu6rpqa/d23+vpr/983f3uRGdcTs64/ToH8L8juGUErku6KemWpIuSrpSXYfwk6bekr5I+lPe98e8LAEMfSXrgjI0Y9kPSG0lvJfF5SmYBYPjTYjif95WXkp6XCKV0zQC4K+nFhMdHhpFeDyW9H11Y/54F8Lp4PXNG9lrSCiAhyQA4hvF1wd+OIIgCeCeJ1DmmhCIRAfCsFOyM8VclQa8U6eUJBUMQIwB4He/PyLdiPPd+L0V/qfSJDKB7a4W9BgB65OAITf6URKOiiZmnX0l6XAxHz+fyO4B+BfVyLexEJHlfyBqATOrQjGhmCB0YIHRcXnwPAcDz6CSlviRDas4IA8AIDol4H6VPSp637EIHRtNteREV+khWiMKiY/ciMHMIyvEyhbcmOIeocMaFBAqL4M4tPQB4H69lpS5c7sX710r+e138Btg7wUNwEFEYAsBDFN2M1LXA/cZiFCAjAl70aUCdADIiN/wU24pApnj9oYwAdQpBl0yrJgDBiBpEhqoXadQCgKeiYfUAfKG1vOuNgLE+Rtxf9oidiaAFAD5nMckKvYD0MyHH4XsvzDicYZKJQN1LTu9vAfibtbxc7/OfryEC29D4G8Nr4/mOlLufOHPH5i0B+PyP2GRNLnKtXXMwAD7/8Sxs1tt/Z8niIABG+Q/r0K39tuVZahSJP3462KqIe/zvDWp1U8BFR+1QEUdpFK9DkxQqY0Ht3Z5nFwaU+6K0TToOaTSam2tF2+uuLabK0HaokUXG3UUuulwx+uTdegOgcI6f6zO7wWIi7Q1zkbzEION1UqO5cAyqMkOjflDsNjJ+iKZRbR/rIiDwOuBGwnWMEHvtHL0IZCfS1v5rum0sN1D2/JTCjxpPymLTIsprK2WGo7faf3tRay4zvVnIlOAdaiGyNdlKucX+60F0vT8CwO+ZSZHw8iLURrEzq6kHMP1YxRRlUqk+vAY0Kuh06jQnu5VTsiPvrMH1fYuu21I6ejJX33NMEK2O3XRKBgAKjgEibHykiFuoKWyARNgpk0oMh7CY39hWdWQjUFMs3bp+4pAxtr4WmsQhrTlpqHMWgCm2p2x4LjrT2714HMNhuZk56lTPvgBqDzEykF7279X6yQbG0hQxlBRhd5j+z2R96JYAhuE+xAXnAA7h1YzOMx+Bf3ceyjFlpYWeAAAAAElFTkSuQmCC"/>
            </div>
            <div className="note-date">
                <p>Note: {new Date().toString()}</p>
            </div>
            <div className="table-crypto">
            <div className="pembungkus-coin-container">
            <div className='coin-container'>
            <div className='coin-row' >
                    <div className='coin'>
                    <img src={white} alt="" />
                        <h1>Name</h1>
                        <h1 className='coin-symbol'>ID</h1>
                    </div>
                    <div className='coin-data'> 
                        <h1 className='coin-price'> Current Prize</h1>
                        <h1 className='coin-volume'>Market Cap</h1>
                        <h1 className='coin-percent re'>Price Change</h1>
                    </div>
              </div>
              </div>
              </div>
        </div>
        </div>
        </div>
    )
}

export default ListNavCrypto;