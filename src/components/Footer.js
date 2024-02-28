export function Footer({ items }) {

  if (!items.length) {
    return (
      <p className='stats'>Start adding some items to your packlist</p>
    );
  }
  const numberItems = items.length;
  const numberPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numberItems) * 100);
  return (
    <footer className='stats'>
      {percentage === 100 ? <p>You got everything, Ready to go </p> :
        <span>You Have {numberItems} items on your list, and you already packed {numberPacked} ({percentage}%)
        </span>}
    </footer>
  );
}
