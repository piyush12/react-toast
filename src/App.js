import Toastify from "./components/Toast/";
import useNotification from "./hooks/useNotification";

function App() {
  const toast = useNotification();

  const handleAlert = () => {
    toast.alert("Alert! This is alert");
  };
  const handleSuccess = () => {
    toast.success("Success! This is alert");
  };
  const handleWarning = () => {
    toast.warning("Warning! This is alert");
  };

  return (
    <div className="App">
      <Toastify position="bottom right" />
      <button className="btn" id="button" onClick={handleAlert}>
        Alert
      </button>
      <button className="btn" id="button" onClick={handleSuccess}>
        Success
      </button>
      <button className="btn" id="button" onClick={handleWarning}>
        Warning
      </button>
    </div>
  );
}

export default App;
