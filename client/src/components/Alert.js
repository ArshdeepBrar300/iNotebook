import {React,useState,useEffect} from "react";

const Alert = props => {
  const msg=props.msg;
  const [visible, setVisible] = useState(props.msg!=="");
  useEffect(() => {
    setVisible(msg!=="")
    const timer = setTimeout(() => {
      setVisible(false);
      
    }, 2000);

    return () => clearTimeout(timer);
  }, [msg]);

  //If props.alert exist then we will simply display the type and message of our alert
  return (
    <>
         {visible && (
        <div className={`alert alert-${props.type} alert-dismissible  fade show  position-fixed fixed-bottom m-3`} role="alert">
          <strong>{visible && props.msg}</strong>
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>)}
      
    </>
  );
};

export default Alert;