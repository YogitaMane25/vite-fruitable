import React from 'react'

function Shop() {
  return (
    <>

      {/* <!-- Modal Search Start --> */}
      <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Search by keyword</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex align-items-center">
              <div class="input-group w-75 mx-auto d-flex">
                <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal Search End --> */}


      {/* <!-- Single Page Header start --> */}
      <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">Shop</h1>
        <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active text-white">Shop</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}


      {/* <!-- Fruits Shop Start--> */}
      <div class="container-fluid fruite py-5">
  <div class="container py-5">
    <h1 class="mb-4">Our Organic Products</h1>
    <div class="row g-4">
      {/* <!-- Search Input Section --> */}
      <div class="col-xl-3 col-md-6">
        <div class="input-group w-100 mx-auto d-flex">
          <input type="search" class="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
          <span id="search-icon-1" class="input-group-text p-3"><i class="fa fa-search"></i></span>
        </div>
      </div>

      {/* <!-- Category  Section -->
      <div class="col-xl-3 col-md-6">
        <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
          <label for="category">All Products</label>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
          <label for="category">Vegetables</label>
        </div>
      </div>
      <div class="col-xl-3 col-md-6">
        <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
          <label for="category">Fruits</label>
        </div>
      </div>
      {/* <!-- Sorting Dropdown Section --> */}
      {/* <div class="col-xl-3 col-md-6">
        <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
          <label for="fruits">Default Sorting:</label>
          <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
            <option value="volvo">Nothing</option>
            <option value="saab">Popularity</option>
            <option value="opel">Organic</option>
            <option value="audi">Fantastic</option>
          </select>
        </div>
      </div> */}
     <div class="col-lg-8 text-end">
                            <ul class="nav nav-pills d-inline-flex text-center mb-5" style={{marginLeft:"45px"}}>
                                <li class="nav-item">
                                    <a class="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span class="text-dark" style={{width: "130px"}}>All Products</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span class="text-dark" style={{width: "130px"}}>Vegetables</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span class="text-dark" style={{width: "130px"}}>Fruits</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span class="text-dark" style={{width: "130px"}}>default sorting</span>
                                        <select id="fruits" name="fruitlist" class="border-0 form-select-sm bg-light me-3" form="fruitform">
                                        <option value="volvo">Nothing</option>
                                        <option value="saab">Popularity</option>
                                        <option value="opel">Organic</option>
                                        <option value="audi">Fantastic</option>
                                    </select>
                                    </a>
                                </li>
                              
                            </ul>
                        </div>
                          </div>
  </div>



              {/* information start */}
              <div class="tab-content" style={{ marginTop: "0px", paddingTop: "0px" }}>
                <div id="tab-1" class="tab-pane fade show p-0 active">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-2.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-4.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apricots</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3" >
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-3.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Banana</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-1.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-2.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" class="tab-pane fade show p-0">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-2.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" class="tab-pane fade show p-0">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-1.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-6.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apple</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-4" class="tab-pane fade show p-0">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Grapes</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-4.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Apricots</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-5" class="tab-pane fade show p-0">
                  <div class="row g-4">
                    <div class="col-lg-12">
                      <div class="row g-4">
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-3.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Banana</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-2.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Raspberries</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 col-lg-4 col-xl-3">
                          <div class="rounded position-relative fruite-item">
                            <div class="fruite-img">
                              <img src="img/fruite-item-1.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                            </div>
                            <div class="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px",left: "10px"}}>Fruits</div>
                            <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                              <h4>Oranges</h4>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                              <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               {/* information end */}
   
      <div class="col-12">
        <div class="pagination d-flex justify-content-center mt-5">
          <a href="#" class="rounded">&laquo;</a>
          <a href="#" class="active rounded">1</a>
          <a href="#" class="rounded">2</a>
          <a href="#" class="rounded">3</a>
          <a href="#" class="rounded">4</a>
          <a href="#" class="rounded">5</a>
          <a href="#" class="rounded">6</a>
          <a href="#" class="rounded">&raquo;</a>
        </div>
      </div>


      
      {/* <!-- Vesitable Shop Start--> */}
        <div class="container-fluid vesitable py-5">
            <div class="container py-5">
                <h1 class="mb-0">Fresh Organic Vegetables</h1>
                <div class="owl-carousel vegetable-carousel justify-content-center">
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-1.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-3.png" class="img-fluid w-100 rounded-top bg-light" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Banana</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-4.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Bell Papper</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-5.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Potatoes</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div class="border border-primary rounded position-relative vesitable-item">
                        <div class="vesitable-img">
                            <img src="img/vegetable-item-6.jpg" class="img-fluid w-100 rounded-top" alt=""/>
                        </div>
                        <div class="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div class="p-4 rounded-bottom">
                            <h4>Parsely</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                            <div class="d-flex justify-content-between flex-lg-wrap">
                                <p class="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary"><i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Vesitable Shop End --> */}









</div>

    </>
  )
};

export default Shop;