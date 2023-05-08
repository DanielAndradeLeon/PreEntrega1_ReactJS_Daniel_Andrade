import styles from './CheckoutForm.module.css';
import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();
        
        const userData = {
            name, phone, email
        }

        onConfirm(userData);
    }

    return (
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className={styles.Form}>
                <label className={styles.Label}>
                        Nombre:
                    <input
                        className={styles.Input}
                        type="text"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label className={styles.Label}>
                        Teléfono:
                    <input
                        className={styles.Input}
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label className={styles.Label}>
                        Email:
                    <input
                        className={styles.Input}
                        type="text"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <button className={styles.Button} type="submit">Confirmar compra</button>
            </form>
        </div>
    )
}

export default CheckoutForm;
