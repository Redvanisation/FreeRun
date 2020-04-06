import React, { useState } from 'react';
import axios from 'axios';


const CreateProduct = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    // axios.post('https://free-run-api.herokuapp.com/api/products', data)
    axios.post('http://localhost:3000/api/products', data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='name' />
      <input type="text" name='description' placeholder='description' />
      <input type="number" name='price' placeholder="price" />
      <input type="text" name='category' placeholder='category' />
      <input type="number" name='stock'placeholder='stock' />
      <input type="file" name='image' onChange={(e) => setSelectedImage(e.target.files[0])} />
      <input type="submit" value="Create"/>
    </form>
  );
}

export default CreateProduct;
