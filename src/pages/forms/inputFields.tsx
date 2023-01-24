type PROPs = {
  otherProps: any
};
function InputFields({ otherProps }: PROPs) {
  return (
    <div className="">
      <input type="text" onChange={otherProps} />
    </div>
  );
}
export default InputFields;
