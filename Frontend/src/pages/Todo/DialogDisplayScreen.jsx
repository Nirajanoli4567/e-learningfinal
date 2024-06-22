import { useEffect, useState } from "react";
import { Dialog } from "../../components/common/Dialog";
import { useParams } from "react-router";

export const DialogDisplayScreen = () => {
  const { id } = useParams();
  const [showDialog, setShowDialog] = useState(false);
  return (
    <main className="dialog-screen">
      <div>
        {id}
        <button onClick={() => setShowDialog(true)}>Show dialog</button>
      </div>

      {/* { showDialog &&
            <div className="dialog">
            <div className="backdrop" onClick={()=>setShowDialog(false)}></div>
            <div className="dialog-content">
                dialog content
            </div>
         </div>
         } */}
      <Dialog show={showDialog} close={() => setShowDialog(false)}>
        <h1> some random content</h1>
      </Dialog>
    </main>
  );
};
