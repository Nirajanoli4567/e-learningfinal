export const Dialog = (props) => {
  return props.show ? (
    <div className="dialog">
      {/* <div className="backdrop" onClick={()=>setShowDialog(false)}></div> */}
      <div className="backdrop" onClick={props.close}></div>
      <div className="dialog-content">{props.children}</div>
    </div>
  ) : (
    ""
  );
};
