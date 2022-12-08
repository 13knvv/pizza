import ContentLoader from 'react-content-loader'

const PizzaCardSkeleton = () => (
  <div className="pizzas-card__wrapp ">
    <ContentLoader
      className="pizza-card"
      speed={2}
      width={292}
      height={492}
      viewBox="0 0 292 492"
      backgroundColor="#f3f3f3"
      foregroundColor="#e6e6e6"
    >
      <circle cx="153" cy="133" r="125" />
      <rect x="29" y="308" rx="0" ry="0" width="230" height="15" />
      <rect x="7" y="438" rx="0" ry="0" width="96" height="20" />
      <rect x="7" y="353" rx="0" ry="0" width="274" height="58" />
      <rect x="141" y="431" rx="13" ry="13" width="139" height="32" />
    </ContentLoader>
  </div>
)

export default PizzaCardSkeleton
