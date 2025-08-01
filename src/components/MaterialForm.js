import React, { useState } from 'react';

export default function MaterialForm() {
  const [material, setMaterial] = useState({ type: '', cost: '', supplier: '' });

  const handleChange = e => setMaterial({ ...material, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Material submitted:', material);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Material</h3>
      <input name="type" placeholder="Material Type" onChange={handleChange} />
      <input name="cost" type="number" placeholder="Cost" onChange={handleChange} />
      <input name="supplier" placeholder="Supplier" onChange={handleChange} />
      <button type="submit">Add Material</button>
    </form>
  );
}
