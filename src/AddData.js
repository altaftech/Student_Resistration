import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function AddData() {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState(null)
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const validateForm = () => {
        let formErrors = {}
        let valid = true
        
        if (!name) {
            formErrors.name = 'Name is required'
            valid = false
        }
        if (!gender) {
            formErrors.gender = 'Gender is required'
            valid = false
        }
        if (!email) {
            formErrors.email = 'Email is required'
            valid = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid'
            valid = false
        }
        if (!mobile) {
            formErrors.mobile = 'Mobile number is required'
            valid = false
        } else if (!/^\d{10}$/.test(mobile)) {
            formErrors.mobile = 'Mobile number must be 10 digits'
            valid = false
        }
        if (!password) {
            formErrors.password = 'Password is required'
            valid = false
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters'
            valid = false
        }

        setErrors(formErrors)
        return valid
    }

    const handleAddData = (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const formData = new FormData()
        formData.append('st_name', name)
        formData.append('st_gender', gender)
        formData.append('st_email', email)
        formData.append('st_mobileno', mobile)
        formData.append('st_password', password)
        if (image) {
            formData.append('st_photo', image)
        }

        axios.post('https://akashsir.in/myapi/crud/student-add-api.php', formData)
            .then(res => {
                console.log(res)
                alert('Data Added!')
                setName('')
                setGender('')
                setEmail('')
                setMobile('')
                setPassword('')
                setImage(null)
                navigate('/display')
            })
            .catch(error => {
                console.error("There was an error adding the data!", error)
            })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
            <form onSubmit={handleAddData} style={{
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                width: '400px'
            }}>
                <h3 style={{ textAlign: 'center' }}>Student Registration</h3>
                <div style={{ marginBottom: '2px' }}>
                    {/* <label style={styles.label}>Name</label> */}
                    <input type="text" name="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                </div>
                <div style={{ marginBottom: '2px' }}>
                    <label style={styles.label}>Gender</label>
                        <input type="radio" id='male' name="gender" value="Male" onChange={(e) => setGender(e.target.value)} />
                        <label htmlFor="male" style={styles.radioLabel}>Male</label>
                        <input type="radio" id='female' name="gender" value="Female" onChange={(e) => setGender(e.target.value)} />
                        <label htmlFor="female" style={styles.radioLabel}>Female</label>
                    
                    {errors.gender && <p style={styles.error}>{errors.gender}</p>}
                </div>
                <div style={{ marginBottom: '2px' }}>
                    {/* <label style={styles.label}>Email</label> */}
                    <input type="email" name="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>
                <div style={{ marginBottom: '2px' }}>
                    {/* <label style={styles.label}>Mobile</label> */}
                    <input type="number" name="mobile" placeholder='Mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} style={styles.input} />
                    {errors.mobile && <p style={styles.error}>{errors.mobile}</p>}
                </div>
                <div style={{ marginBottom: '2px' }}>
                    {/* <label style={styles.label}>Password</label> */}
                    <input type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
                    {errors.password && <p style={styles.error}>{errors.password}</p>}
                </div>
                <div style={{ marginBottom: '2px' }}>
                    <label style={styles.label}>Image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} style={styles.input} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <input type="submit" value="Add Data" style={styles.submitButton} />
                </div>
            </form>
        </div>
    )
}

const styles = {
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 500,
        color: '#333'
    },
    radioLabel: {
        marginRight: '15px',
        marginLeft: '5px',
        fontWeight: 'normal',
        color: '#333'
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '5px',
        boxSizing: 'border-box'
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '2px'
    },
    submitButton: {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%'
    }
}
