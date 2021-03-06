import mongoose, {Schema} from 'mongoose'

const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   }
})

export default mongoose.model('User', UserSchema)