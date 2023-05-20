export function CarouselSlideItem({ pos, idx, activeIdx, createItem }) {
  const item = createItem(pos, idx, activeIdx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.image} />
      </div>
    </li>
  );
}
