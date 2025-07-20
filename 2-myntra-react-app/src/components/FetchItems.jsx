import {useSelector,useDispatch}  from "react-redux";
import { useEffect } from "react";
import { itemsActions } from "../store/itemsSlice";
import { FetchStatusActions } from "../store/fetechStatusSlice";


const FetchItems=()=>{
 const fetchStatus = useSelector((store) => store.fetchStatus);
const dispatch = useDispatch();

 useEffect(() => {
  if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(FetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
         dispatch(FetchStatusActions.markFetchDone());
         dispatch(FetchStatusActions.markFetchingFinished());
         dispatch(itemsActions.addInitialItems(items ));

      });
    return () => {
      
      controller.abort();
    };
  }, [fetchStatus]);



 return <></>
}
export default FetchItems;