type Props = {};

export default function ProductHeader({}: Props) {
  const active = "new";
  const typeList = [
    {
      name: "Новинки",
      type: "new",
    },
    {
      name: "Популярние",
      type: "top",
    },
  ];

  return (
    <div className="product__header">
      {typeList.map((list, key) => (
        <button
          key={key + 2}
          className={`product__header-btn ${
            active == list.type && "product__header-btnActive"
          }`}
        >
          {list.name}
        </button>
      ))}
    </div>
  );
}
