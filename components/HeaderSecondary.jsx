export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-secondary-inner container py-3 p-lg-0">
        <section className="header-connect d-none d-lg-flex">
          <ul>
            <li>
              <a
                href="https://x.ro"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a
                href="https://x.ro"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a
                href="https://x.ro"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://x.ro"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44 (0)10 2345 6789">Call us +44 (0)10 2345 6789</a>
            </li>
          </ul>
        </section>

        <section className="mobile-title d-lg-none text-uppercase">
          <span>Monochrome</span>
        </section>

        <section className="header-controls">
          <div className="search-bar d-none d-lg-block">
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

          <div className="control-buttons">
            <ul>
              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My Account"
                >
                  <i className="fa-solid fa-user-gear"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Wish List"
                >
                  <i className="fa-solid fa-heart-pulse"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Cart"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
