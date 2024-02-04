import bcrypt from "bcrypt";
import { Admin } from './models/Admin.js'
import './db.js'

async function AdminAccount() {
    try {
        const adminCount = await Admin.countDocuments()
        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('adminpassword', 10)
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            console.log('Admin account created')
        } else {
            console.log('Admin account already exists')
        }
    }catch(error){
        console.log('Error:'+error)
    }
}

AdminAccount()