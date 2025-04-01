import axios from 'axios';
import React, { useState, useEffect } from 'react';

function AddProduct() {

    const [data, setData] = useState({
        name: "",
        type: "",  // 'type' for Fruit or Vegetable
        price: "",
        image: "" // added image input field
    });

    const [products, setProducts] = useState([]);

    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://67eb5ba434bcedd95f66156d.mockapi.io/product", data)
            .then((res) => {
                console.log(res.data);

                setData({
                    name: "",
                    type: "",
                    price: "",
                    image: "" // Resetting image as well
                });

                loadProducts();
            })
            .catch(error => {
                console.error("There was an error creating the item!", error);
            });
    };

    // Fetch the product data
    function loadProducts() {
        axios.get("https://67eb5ba434bcedd95f66156d.mockapi.io/product")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            });
    }

    useEffect(() => {
        loadProducts();  // Load products when the component mounts
    }, []);

    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    {/* Form Data */}
                    <div className="col-lg-4 mt-5">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input onChange={handleChange} value={data.name} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Type (Fruit/Vegetable)</label>
                                <input onChange={handleChange} value={data.type} type="text" className="form-control" id="type" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Price</label>
                                <input onChange={handleChange} value={data.price} type="text" className="form-control" id="price" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Image URL</label>
                                <input onChange={handleChange} value={data.image} type="text" className="form-control" id="image" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    {/* Table Data */}
                    <div className="col-lg-8 mt-5">
                        <h3>Product List</h3>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, i) => (
                                        <tr key={product.id}>
                                            <th scope="row">{i + 1}</th>
                                            <td>{product.name}</td>
                                            <td>{product.type}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <img src={product.image} alt={product.name} style={{ maxWidth: "100px", maxHeight: "100px", objectFit: "contain" }}  />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
