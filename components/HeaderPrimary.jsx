export default function HeaderPrimary() {
  return (
    <nav className="header-primary">
      <ul className="d-none d-lg-flex container">
        <li>
          <a href="https://x.ro" title="New Arrivals">
            New Arrivals
          </a>
        </li>

        <li>
          <a href="https://x.ro" title="Brands">
            Brands
          </a>
        </li>

        <li>
          <a href="https://x.ro" title="Men's">
            Men&apos;s
          </a>
        </li>

        <li>
          <a href="https://x.ro" title="Women's">
            Women&apos;s
          </a>
        </li>

        <li>
          <a href="https://x.ro" title="Accesories">
            Accesories
          </a>
        </li>

        <li>
          <a href="https://x.ro" title="Lookbook">
            Lookbook
          </a>
        </li>
      </ul>

      <div className="header-primary-mobile d-lg-none">
        <section className="header-primary-content container">
          <div className="search-form">
            <form action="">
              <button type="submit" className="search-button">
                <i className="fa-solid fa-magnifying-glass-dollar"></i>
              </button>

              <input
                type="text"
                className="search-field"
                placeholder="Search"
                title="Search"
              />
            </form>
          </div>

          <div className="header-primary-bars">
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </section>
      </div>
    </nav>
  );
}
