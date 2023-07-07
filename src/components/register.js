import '../App.css';

export default function Register() {

    return(
        <div className="register">
            <form className='form'>
                <label>Kullanıcı Adı
                    <input type='text' name='' required />
                </label>
                <label>E-posta
                    <input type="text" name='' required />
                </label>
                <label>Şifre
                    <input type="password" name='' required />
                </label>
                <input type="submit" value='Gönder' className='btn' />
            </form>
        </div>
    )
}