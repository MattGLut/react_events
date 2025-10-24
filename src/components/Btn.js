// function Btn() {
//   const clickHandler = () => {
//     console.log("Button clicked!");
//   };

//   return (
//     <button onClick={clickHandler}>
//       Click me
//     </button>
//   );
// }

// export default Btn;

function Btn() {
  const hoverHandler = () => {
    console.log("Button hovered!");
  };

  return (
    <button onMouseOver={hoverHandler}>
      Hover over me
    </button>
  );
}

export default Btn;