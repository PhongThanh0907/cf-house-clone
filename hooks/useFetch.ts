import { useEffect } from "react";
import { axiosClient } from "../service/axiosClient";
import { Product } from "../types/product";
import { Store } from "../types/store";
import { useReducer } from "./useReducer";

function fetchReducer(state: any, action: any) {
  switch (action.type) {
    case "fetchAPI/request":
      return { ...state, isLoading: action.isLoading };
    case "fetchAPI/success":
    case "fetchAPI/error":
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        data: action.data,
      };
    default:
      return state;
  }
}

export const useFetch = (url: string, typeProduct?: any) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  console.log(typeProduct)

  useEffect(() => {
    (async () => {
      dispatch({
        type: "fetchAPI/request",
        isLoading: true,
      });
      try {
        console.log(typeProduct)
        if (typeProduct !== undefined) {
          const res:[] = await axiosClient.get(url);
          const dataFilter = res.filter(
            (item: Product) => typeProduct.includes(item?.typeProduct)
          );
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: dataFilter,
          });
        } else {
          const dataProduct = await axiosClient(url);
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: dataProduct,
          });
        }
      } catch (err) {
        dispatch({
          type: "fetchAPI/error",
          isLoading: false,
          error: err,
          data: [],
        });
      }
    })();
  }, [url, typeProduct]);

  // return { data: state.data, isLoading: state.isLoading, error: state.error};
  return { ...state };
};
