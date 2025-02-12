import { SEARCH_PARAMS } from "@/constants/search-params.constants";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useMemo, useCallback } from "react";

// Define the type for SEARCH_PARAMS keys
type SearchParamKeys = keyof typeof SEARCH_PARAMS;

// Define a generic type for the hook
const useCustomSearchParams = <T extends SearchParamKeys>(
  entityType: T,
  valueTypes?: T[]
) => {
  // const searchParams = useLocalSearchParams();
  const searchParams: Partial<SearchParamKeys> = useLocalSearchParams<any>();
  const { replace } = useRouter();
  const pathname = usePathname();

  // Retrieve the main search parameter value
  /** Value of the param that opens or closes any modal */
  const modalValue = searchParams[SEARCH_PARAMS[entityType] as any];

  // Retrieve multiple search parameter values if valueTypes are provided
  /** Record of the values of all additional params */
  const paramValues = useMemo(() => {
    if (valueTypes) {
      return valueTypes.reduce((acc, type) => {
        acc[type] = searchParams[SEARCH_PARAMS[type] as any];
        return acc;
      }, {} as Record<T, string | null>);
    }
    return {} as Record<T, string | null>;
  }, [searchParams, valueTypes]);

  const handleSetParams = useCallback(
    (set?: boolean, value?: string) => {
      const params = new URLSearchParams(searchParams);

      if (set) {
        value
          ? params.set(SEARCH_PARAMS[entityType], value)
          : params.set(SEARCH_PARAMS[entityType], SEARCH_PARAMS[entityType]);
      } else {
        params.delete(SEARCH_PARAMS[entityType]);
      }

      // Set or delete additional parameters if valueTypes are provided
      if (valueTypes) {
        valueTypes.forEach((type) => {
          params.delete(SEARCH_PARAMS[type]);
          // if (set) {
          //   params.set(SEARCH_PARAMS[type], SEARCH_PARAMS[type]);
          // } else {
          //   params.delete(SEARCH_PARAMS[type]);
          // }
        });
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [entityType, pathname, replace, searchParams, valueTypes]
  );

  return { handleSetParams, modalValue, paramValues };
};

export default useCustomSearchParams;