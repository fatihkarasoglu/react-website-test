import '../pages/index.css'

export default function Register() {

    return(
        <div className='container'>
            <div className='form'>
                <form>
                    <h2>Bize Katıl</h2>   
                    <label>Kullanıcı Adı 
                        <input type='text' name='' required />
                    </label>
                    <label>E-posta
                        <input type="text" name='' required />
                    </label>
                    <label>Şifre
                        <input type="password" name='' required />
                    </label>
                    <button type='submit'>Gönder</button>
                </form>
            </div>
        </div>
    )
}