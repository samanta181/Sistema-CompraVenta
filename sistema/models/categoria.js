import mongoose from 'mongoose';
const { Schema } = mongoose;

const categoriaSchema = new Schema({
  nombre:  {type: String, maxlength: 50, unique: true, required: true},
  descripcion: {type: String,maxlength: 50},// String is shorthand for {type: String}
  estado:  {type: Number, default:1} ,
  createdAt:  { type: Date, default: Date.now },
 
 
});

const Categoria =mongoose.model('categoria', categoriaSchema);
export default Categoria