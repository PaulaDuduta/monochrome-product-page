export default function ProductTile2() {
  return (
    <article className="product-tile product-tile2">
      <div className="product-image">
        <a
          href="https://x.ro"
          title="Monochrome"
          className="product-tile-image-container"
        >
          <img
            src="images\Recently Viewed Thumbnail 2-3.png"
            alt="New in, Watches, Women, Men"
          ></img>
        </a>

        <span className="badge">
          <a href="" title="Wish List">
            <i className="fa-solid fa-heart"></i>
          </a>
        </span>
      </div>

      <div className="product-title">
        <span>Monochrome</span>
      </div>

      <div className="product-pricing">
        <span>$425</span>
      </div>
    </article>
  );
}
