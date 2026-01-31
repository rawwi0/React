import "./PrimaryButton.css";

// const PrimaryButton = () => {
//   return (
//     <div>
//       <button>Primary Button</button>
//     </div>
//   );
// };
function PrimaryButton({ children, className = "", ...rest }) {
  return (
    <button
      className={`primary-button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;




