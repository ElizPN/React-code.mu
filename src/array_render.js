export function ArrayRender() {
  const arr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];
  const newArr = arr.map(function (item, index) {
    return <li key={index}>{item}</li>;
  });

  return <div>{newArr}</div>;
}
