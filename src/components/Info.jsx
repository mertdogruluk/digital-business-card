export default function Info(){
    return (
        <div className="info">
            <img src="/src/assets/images/info-img.png" alt="Profile" />
            <h1>Mert Doğruluk</h1>
            <p>Web Developer</p>
            <small>mertdogruluk25@gmail.com</small>
            <div className="buttons">
                <a href="mailto:mertdogruluk25@gmail.com" target="_blank" rel="noopener noreferrer" className="button email">Email</a>
                <a href="https://www.linkedin.com/in/mert-doğruluk-15a509270" target="_blank" rel="noopener noreferrer" className="button linkedin">LinkedIn</a>
            </div>
        </div>
    )
}