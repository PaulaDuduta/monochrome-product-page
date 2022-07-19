import ProductTile1 from '../catalog/ProductTile1';
import ProductTile2 from '../catalog/ProductTile2';
import ProductTile3 from '../catalog/ProductTile3';
import ProductTile4 from '../catalog/ProductTile4';

export default function CatalogPreviews() {
  return (
    <>
      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2>You may also like</h2>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-flex">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>
      </section>

      <section className="home-catalog-preview container">
        <header className="home-catalog-title">
          <h2>Recently view</h2>
        </header>

        <section className="product-tiles-mobile d-lg-none">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>
        </section>

        <section className="product-tiles-desktop d-none d-lg-flex">
          <ProductTile1></ProductTile1>

          <ProductTile2></ProductTile2>

          <ProductTile3></ProductTile3>

          <ProductTile4></ProductTile4>
        </section>
      </section>
    </>
  );
}
