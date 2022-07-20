export default function ContentProduct() {
  return (
    <section className="content-product">
      <aside className="product-images">
        <div className="screen-image">
          <img src="images\3.png" alt="watch, wrist, metal, black, style" />
        </div>

        <div className="carousel-images">
          <img src="images\6.png" alt="watch, black, metal" />

          <img src="images\7.png" alt="watch, black" />

          <img
            src="images\jj-ying-dfjfNu3Q0Yc-unsplash.png"
            alt="watch, black, metal, product-case"
          />

          <img src="images\6.png" alt="watch, black, metal, leather" />
        </div>
      </aside>
      <div className="product-details">
        <header>
          <h3>Monochrome Max Bill - $725</h3>
        </header>

        <div className="product-description">
          <div>
            <h4>description</h4>
            <p>
              Mr Max Bill was a true creative genius, carving out a career as a
              painter, architect, sculptor and designer. As well as leaving
              behind an expansive body of work, he was also an avid collector of
              watches, and this Junghans chronoscope timepiece is dedicated to
              his memory. Immaculately housed in a domed Plexiglass case and
              finished with a handsome leather strap, it&apos;s a highly
              technical piece in a stylish package.
            </p>
          </div>

          <h4>size & fit</h4>

          <h4>details & care</h4>

          <h4>delivery & returns</h4>
        </div>

        <div className="product-ctas">
          <div className="cart-btn">
            <i class="fa-solid fa-bag-shopping"></i>
            <button type="button" className="button" title="Add to bag">
              Add to bag
            </button>
          </div>
          <div className="whishlist-btn">
            <i class="fa-regular fa-heart"></i>
            <button type="button" className="button" title="Whishlist">
              Whishlist
            </button>
          </div>
        </div>

        <div className="product-connect">
          <header>
            <a href="https://x.ro" target="_blank" rel="noopener noreferrer">
              Shipping restrictions may apply
            </a>
          </header>

          <section className="product-social-contact">
            <ul className="my-2">
              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i class="fa-regular fa-envelope"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://x.ro"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact us"
                >
                  <i class="fa-brands fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>

        <div className="product-customer-service">
          <ul>
            <li>Product code 668235</li>

            <li>
              {' '}
              <a href="https://x.ro" target="_blank" rel="noopener noreferrer">
                Send us custom inquiry
              </a>
            </li>

            <li>
              {' '}
              <a href="https://x.ro" target="_blank" rel="noopener noreferrer">
                Contact us <span>customer service</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
