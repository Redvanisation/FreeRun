import React, { useState } from 'react';
import axios from 'axios';


const CreateProduct = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = new FormData(e.target);
    // axios.post('https://free-run-api.herokuapp.com/api/products', data);
    axios.post('http://localhost:3000/api/products', data)
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
    e.target.reset();
  };

  const handleImage = (e) => {
    const img = e.target.files[0];
    if (img.type === 'image/png' || img.type === 'image/jpg' || img.type === 'image/jpeg') {
      setSelectedImage(e.target.files[0]);
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
      alert('Please upload an image of type PNG or JPG');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form create-product">
      <input type="text" className="input create-product__input" name='name' placeholder='name' required />
      <textarea className="textarea create-product__textarea" name="description" cols="40" rows="10" />
      <input type="number" className="input create-product__input" name='price' placeholder='price' required />
      <input type="text" className="input create-product__input" name='category' placeholder='category' required />
      <input type="number" className="input create-product__input" name='stock'placeholder='stock' required />
      <input type="file" className="input create-product__input" name='image' onChange={handleImage} required />
      <input type="submit" className="button" value="Create" disabled={isDisabled} />
    </form>
  );
}

export default CreateProduct;
