import axios from 'axios';
import React, { useEffect, useState } from 'react';

function FruitVegetableCrud() {

    const [data, setData] = useState({
        name: "",
        type: "",  // 'type' for Fruit or Vegetable
        price: ""
    });

    const [newData, setNewData] = useState([]);

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
                    price: ""
                });

                loadData();
            });
    };

    function loadData() {
        axios.get("https://67eb5ba434bcedd95f66156d.mockapi.io/product")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data);
            });
    };

    useEffect(() => {
        loadData();
    }, []);

    function handleDelete(id) {
        axios.delete("https://67eb5ba434bcedd95f66156d.mockapi.io/product/" + id)
            .then((res) => {
                console.log(res.data);
                loadData();
            });
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">

                    {/* Form Data */}
                    <div className="col-lg-4 mt-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input onChange={handleChange} value={data.name} type="text" className="form-control" id="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Type (Fruit/Vegetable)</label>
                                <input onChange={handleChange} value={data.type} type="text" className="form-control" id="type" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input onChange={handleChange} value={data.price} type="text" className="form-control" id="price" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                    {/* Table Data */}
                    <div className="col-lg-8 mt-5">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    newData.map((item, i) => {
                                        return (
                                            <tr key={item.id}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.type}</td>
                                                <td>{item.price}</td>
                                                <td>
                                                <button className="btn btn-primary mt-2"><i className="fas fa-pencil-alt"></i></button>
                                                <button onClick={() => handleDelete(item.id)} className="btn btn-danger"><i className="fas fa-trash"></i></button>

                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FruitVegetableCrud;
