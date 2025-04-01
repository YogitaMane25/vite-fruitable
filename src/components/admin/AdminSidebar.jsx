import { Link, Outlet } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          {/* Sidebar */}
          <nav id="sidebarMenu" className="d-lg-block sidebar bg-white" style={{marginTop:"160px",}}>
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                {/* Main Dashboard Link */}
                <Link to="/admin" className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
                  <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                  <span>Main dashboard</span>
                </Link>
                {/* Add Product Link */}
                <Link to="/admin/addproduct" className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-chart-area fa-fw me-3"></i>
                  <span>Add Product</span>
                </Link>
                {/* Products Link */}
                <Link to="/admin/products" className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-lock fa-fw me-3"></i>
                  <span>Products</span>
                </Link>
                {/* Logout Link */}
                <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                  <i className="fas fa-lock fa-fw me-3"></i>
                  <span>Logout</span>
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-lg-9">
          {/* Content will be rendered here based on the route */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
