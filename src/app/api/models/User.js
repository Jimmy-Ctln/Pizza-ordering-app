import bcrypt from 'bcrypt';
import {models, model, Schema} from "mongoose"

const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, validate: pass => {
        if(!pass?.length || pass.length < 5) {
            new Error('password must be at least 5 characteres')
        }
    },
    createdAt: { type: Date, default: Date.now }
    }
}, {timesStamps: true});


UserSchema.post('validate', function (user) {
    const notHashedPassword = user.password;
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(notHashedPassword, salt);
})

export const User = models?.User || model('User', UserSchema)