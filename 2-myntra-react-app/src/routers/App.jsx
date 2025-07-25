
import Header from "../components/Header" 
import Footer from "../components/Footer"
import FetchItems from "../components/Fetchitems"
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom"
import LoadingSpinner from "../components/LoadingSpinner";
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus.currentlyFetching ? <LoadingSpinner/>: <Outlet/>}
   
    <Footer></Footer>
    </>
  )
}

export default App
