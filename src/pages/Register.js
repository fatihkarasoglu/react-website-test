import { useEffect, useState } from 'react'
import '../pages/index.css'

export default function Register() {

    const [data, setData] = useState({
        user: '',
        email:'',
        phone:'',
        password:'',
        confirmPassword:''
    })

    const [formData, setFormData] = useState({});
    const submit = () => {
        setFormData((prevFormData) => [...prevFormData, data]);
    }

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData])

    return(
        <div className='container'>
            <div className='form'>
                <form>
                    {/* <a href='http://localhost:3000/'>Ana Sayfaya Dön </a> */}
                    <h2>Bize Katıl</h2>
                    <label>Kullanıcı Adı
                        <input type='text' name='user' value={data.user} onChange={(e) => setData(e.target.value)} required autoComplete='off' />
                    </label>
                    <label>E-posta
                        <input type="text" name='mail' value={data.email} onChange={(e) => setData(e.target.value)} required autoComplete='off' />
                    </label>
                    <label>Telefon Numarası 
                        <input type='tel' name='phone' value={data.phone} onChange={(e) => setData(e.target.value)} required autoComplete='off' />
                    </label>
                    <label>Şifre
                        <input type="password" name='password' value={data.password} onChange={(e) => setData(e.target.value)} required autoComplete='off' />
                    </label>
                    <label>Şifreyi Doğrulayın
                        <input type='password' name='confirmPassword' value={data.confirmPassword} onChange={(e) => setData(e.target.value)} required autoComplete='off' />
                    </label>
                    <button className='Submitbtn' type='submit' onClick={submit}>Gönder</button>
                    <button className='Resetbtn' type='reset'>Sıfırla</button>
                </form>
            </div>
        </div>
    )
}