const Circle = (props) => {
  return (
    <div
      style={{
        width: props.wd,
        height: props.hg,
        borderRadius: "9999px",
        backgroundColor: props.bg,
      }}
    ></div>
  );
};
export default Circle;
