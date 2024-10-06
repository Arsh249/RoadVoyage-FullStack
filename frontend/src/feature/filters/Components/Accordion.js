import { useState } from "react";

export const Accordion = ({ className, children, title, open = false }) => {
  const [show, setShow] = useState(open);

  return (
    <div className={className}>
      <button onClick={() => setShow(!show)} style={styles.header}>
        <span className="title">{title}</span>
        <span className="material-icons">keyboard_arrow_down</span>
      </button>
      {show && <>{children}</>}
    </div>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
    width: "100%",
  },
};
