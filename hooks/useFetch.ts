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

export const useFetch = (
  url: string,
  typeProduct?: any,
  typeLocation?: any,
  id?: any,
) => {
  const [state, dispatch] = useReducer(fetchReducer, {
    data: [],
    isLoading: false,
    error: null,
  });
  useEffect(() => {
    (async () => {
      dispatch({
        type: "fetchAPI/request",
        isLoading: true,
      });
      try {
        if (typeProduct !== undefined) {
          const res: [] = await axiosClient.get(url);
          const data = res.filter((item: Product) =>
            typeProduct.includes(item?.typeProduct)
          );
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: data,
          });
        } else if (typeLocation !== undefined) {
          const res: [] = await axiosClient.get(url);
          const data = res.filter((item: Store) =>
            typeLocation.includes(item?.location)
          );
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: data,
          });
        } else if (id !== undefined) {
          const data = await axiosClient.get(`${url}/${id}`);
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: data,
          });
        } else {
          const data = await axiosClient(url);
          dispatch({
            type: "fetchAPI/success",
            isLoading: false,
            error: null,
            data: data,
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
  }, [url, typeProduct, typeLocation, id]);

  return { ...state };
};
